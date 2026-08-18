import { NextResponse } from 'next/server';
import { contactInfo } from '@/data/site';
import { emptyInquiry, validateInquiry, type InquiryPayload } from '@/lib/inquiry';
import {
  describeEmailConfig,
  hasConfiguredChannel,
  isDebugEnabled,
  notifyInquiry,
  probeResend,
} from '@/lib/notify';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * 문의 접수 엔드포인트
 * ─────────────────────────────────────────────
 * 알림 채널은 환경 변수로 켜집니다. (src/lib/notify.ts 참고)
 *   RESEND_API_KEY + INQUIRY_TO_EMAIL  → 이메일 발송
 *   SLACK_WEBHOOK_URL                  → Slack 알림
 *
 * 채널이 하나도 설정되지 않으면 서버 로그에만 남습니다.
 * 로그는 장기 보관되지 않으므로 운영 전에 반드시 채널을 연결하세요.
 */
/**
 * 설정 점검용 — 브라우저에서 /api/contact 를 열면 알림 채널 준비 상태를 보여줍니다.
 * 비밀값이나 수신 주소는 노출하지 않고 준비 여부만 반환합니다.
 * 배포 후 "문의가 왜 안 오지?" 를 로그 없이 바로 확인하기 위한 용도입니다.
 */
export async function GET() {
  const hasKey = Boolean(process.env.RESEND_API_KEY?.trim());
  const hasRecipient = Boolean(process.env.INQUIRY_TO_EMAIL?.trim());

  const email = !hasKey
    ? 'missing-key'
    : !hasRecipient
      ? 'missing-recipient'
      : 'ready';
  const slack = process.env.SLACK_WEBHOOK_URL?.trim() ? 'ready' : 'off';
  const ready = email === 'ready' || slack === 'ready';

  // INQUIRY_DEBUG=1 일 때만 원인 추적에 필요한 정보를 덧붙입니다.
  // 키는 노출하지 않고, 수신 주소는 가려서 보여줍니다. (src/lib/notify.ts)
  const debug = isDebugEnabled()
    ? { ...describeEmailConfig(), resend: await probeResend() }
    : undefined;

  // 설정 점검 결과가 캐시되면 "변수를 넣었는데 왜 안 보이지?" 로 이어집니다.
  return NextResponse.json(
    {
      ready,
      channels: { email, slack },
      hint: ready
        ? '알림 채널이 설정되어 있습니다. 그래도 메일이 오지 않으면 Resend 대시보드의 발송 로그를 확인하세요.'
        : email === 'missing-key'
          ? 'RESEND_API_KEY 를 Secret 으로 등록하세요.'
          : 'INQUIRY_TO_EMAIL 을 Secret 으로 등록하세요. (문의를 받을 주소 · Text 로 등록하면 배포할 때 삭제됩니다)',
      ...(debug ? { debug } : {}),
    },
    { headers: { 'Cache-Control': 'no-store, max-age=0' } },
  );
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: '요청 형식이 올바르지 않습니다.' },
      { status: 400 },
    );
  }

  const raw = (body ?? {}) as Record<string, unknown>;
  const payload: InquiryPayload = { ...emptyInquiry };

  (Object.keys(emptyInquiry) as (keyof InquiryPayload)[]).forEach((key) => {
    const value = raw[key];
    payload[key] = typeof value === 'string' ? value.slice(0, 4000) : '';
  });

  // 봇 트랩: 사람에게는 보이지 않는 필드가 채워졌다면 조용히 성공 처리
  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  const errors = validateInquiry(payload);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, message: '입력 내용을 확인해 주세요.', errors },
      { status: 422 },
    );
  }

  const receivedAt = new Date().toISOString();

  if (!hasConfiguredChannel()) {
    // 개발 환경 또는 채널 미설정 상태 — 접수는 받되 눈에 띄게 경고를 남깁니다.
    console.warn(
      '[CERTO] 알림 채널이 설정되지 않아 문의가 로그에만 기록됩니다. ' +
        'RESEND_API_KEY + INQUIRY_TO_EMAIL 또는 SLACK_WEBHOOK_URL 을 설정하세요.',
    );
    console.info('[CERTO] 신규 문의 접수', { receivedAt, ...payload, website: undefined });
    return NextResponse.json({ ok: true });
  }

  const results = await notifyInquiry(payload, receivedAt);
  const delivered = results.filter((result) => result.ok);

  if (delivered.length === 0) {
    // 설정된 채널이 전부 실패 — 문의를 잃지 않도록 로그에 남기고 사용자에게 알립니다.
    console.error('[CERTO] 문의 알림 전송 실패', {
      receivedAt,
      results,
      payload: { ...payload, website: undefined },
    });
    return NextResponse.json(
      {
        ok: false,
        // 공개 이메일이 없을 때 "이메일로 보내달라"고 하면 갈 곳이 없으므로
        // 실제로 노출 중인 대체 연락처가 있을 때만 안내합니다.
        message: contactInfo.email
          ? `일시적인 오류로 문의를 접수하지 못했습니다. 잠시 후 다시 시도하시거나 ${contactInfo.email} 로 보내주세요.`
          : '일시적인 오류로 문의를 접수하지 못했습니다. 잠시 후 다시 시도해 주세요. 계속 실패하면 잠시 뒤에 다시 방문해 주세요.',
        // 진단 모드에서만 실제 실패 사유(Resend 응답 코드/메시지)를 함께 내려줍니다.
        ...(isDebugEnabled() ? { debug: results } : {}),
      },
      { status: 502 },
    );
  }

  // 일부 채널만 실패한 경우 — 접수는 성공했으므로 로그만 남깁니다.
  const failed = results.filter((result) => !result.ok);
  if (failed.length > 0) {
    console.warn('[CERTO] 일부 알림 채널 전송 실패', { receivedAt, failed });
  }

  console.info('[CERTO] 신규 문의 접수', {
    receivedAt,
    name: payload.name,
    service: payload.service,
    delivered: delivered.map((result) => result.channel),
  });

  return NextResponse.json({ ok: true });
}
