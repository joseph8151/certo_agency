import { NextResponse } from 'next/server';
import { emptyInquiry, validateInquiry, type InquiryPayload } from '@/lib/inquiry';
import { hasConfiguredChannel, notifyInquiry } from '@/lib/notify';

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
        message:
          '일시적인 오류로 문의를 접수하지 못했습니다. 잠시 후 다시 시도하시거나 이메일로 보내주세요.',
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
