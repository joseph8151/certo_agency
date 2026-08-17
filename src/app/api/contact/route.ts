import { NextResponse } from 'next/server';
import { emptyInquiry, validateInquiry, type InquiryPayload } from '@/lib/inquiry';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * 문의 접수 엔드포인트
 * ─────────────────────────────────────────────
 * ⚠️ 현재는 서버 로그에만 기록합니다. 실제 운영 전에 아래 중 하나를 연결하세요.
 *
 *   · 이메일 발송   : Resend / SendGrid / AWS SES
 *   · 스프레드시트  : Google Sheets API
 *   · 메신저 알림   : Slack Incoming Webhook / 카카오 알림톡
 *   · CRM          : HubSpot / Notion Database
 *
 * 예) Resend 연동
 *   const res = await fetch('https://api.resend.com/emails', {
 *     method: 'POST',
 *     headers: {
 *       Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
 *       'Content-Type': 'application/json',
 *     },
 *     body: JSON.stringify({ from, to, subject, text }),
 *   });
 */
export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: '요청 형식이 올바르지 않습니다.' }, { status: 400 });
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

  // TODO: 실제 알림 채널 연결 지점
  console.info('[CERTO] 신규 문의 접수', {
    receivedAt: new Date().toISOString(),
    name: payload.name,
    company: payload.company,
    email: payload.email,
    phone: payload.phone,
    language: payload.language,
    service: payload.service,
    schedule: payload.schedule,
    location: payload.location,
    message: payload.message,
  });

  return NextResponse.json({ ok: true });
}
