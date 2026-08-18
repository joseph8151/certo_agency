/**
 * 문의 알림 전송
 * ─────────────────────────────────────────────
 * 이메일 발송에는 아래 두 값이 모두 필요합니다.
 *
 *   RESEND_API_KEY     Resend API 키          (필수)
 *   INQUIRY_TO_EMAIL   수신 주소              (필수 · 쉼표로 여러 개 가능)
 *   INQUIRY_FROM_EMAIL 발신 주소 변경          (Resend 에서 도메인 인증을 마친 뒤에만)
 *   SLACK_WEBHOOK_URL  Slack Incoming Webhook (선택 — 즉시 알림)
 *
 * 수신 주소를 소스에 두지 않는 이유 — 저장소가 공개되어 있으면
 * 이메일 주소가 스팸 수집 대상이 됩니다. 배포 환경 변수로만 관리합니다.
 *
 * fetch 만 사용하므로 Cloudflare Workers / Vercel / Node 어디서든 동작합니다.
 */
import type { InquiryPayload } from './inquiry';

export type NotifyResult = { channel: string; ok: boolean; error?: string };

/**
 * 발신 주소 (기본값).
 * onboarding@resend.dev 는 Resend 가 제공하는 검증용 발신 주소로, 도메인 인증 없이 쓸 수 있습니다.
 * 다만 도메인 인증 전에는 "Resend 가입에 사용한 이메일" 로만 발송됩니다.
 * 회사 도메인을 Resend 에 인증한 뒤 INQUIRY_FROM_EMAIL 을 그 도메인 주소로 바꾸면
 * 임의의 주소로도 발송할 수 있습니다.
 */
export const DEFAULT_INQUIRY_FROM = 'CERTO AGENCY <onboarding@resend.dev>';

const FIELD_LABELS: [keyof InquiryPayload, string][] = [
  ['name', '의뢰인 / 회사명'],
  ['phone', '연락처'],
  ['email', '이메일'],
  ['service', '서비스'],
  ['interpretationType', '통역 방식'],
  ['language', '희망 언어'],
  ['country', '국가 · 지역'],
  ['location', '장소'],
  ['startDate', '시작일'],
  ['endDate', '종료일'],
  ['time', '시간'],
  ['headcount', '참석 인원'],
  ['industry', '산업 분야'],
  ['message', '프로젝트 내용'],
];

/** 값이 있는 항목만 추립니다. */
function filledFields(payload: InquiryPayload) {
  return FIELD_LABELS.map(([key, label]) => [label, (payload[key] ?? '').trim()] as const).filter(
    ([, value]) => value.length > 0,
  );
}

/** 배열을 size 개씩 나눕니다. */
function chunk<T>(items: T[], size: number): T[][] {
  const groups: T[][] = [];
  for (let i = 0; i < items.length; i += size) groups.push(items.slice(i, i + size));
  return groups;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** 받은편지함에서 한 줄로 구분되도록 핵심 정보를 제목에 담습니다. */
function buildSubject(payload: InquiryPayload) {
  const parts = [payload.service, payload.country || payload.location, payload.startDate]
    .map((part) => part?.trim())
    .filter(Boolean);
  return `[CERTO 문의] ${payload.name}${parts.length ? ` · ${parts.join(' · ')}` : ''}`;
}

function buildText(payload: InquiryPayload, receivedAt: string) {
  const lines = filledFields(payload).map(([label, value]) => `${label}: ${value}`);
  return [`CERTO AGENCY 신규 문의`, `접수 시각: ${receivedAt}`, '', ...lines].join('\n');
}

function buildHtml(payload: InquiryPayload, receivedAt: string) {
  const rows = filledFields(payload)
    .map(
      ([label, value]) =>
        `<tr>
           <th align="left" style="padding:10px 16px 10px 0;vertical-align:top;white-space:nowrap;font-weight:600;color:#192C3B;border-bottom:1px solid #E7E3DB;">${escapeHtml(label)}</th>
           <td style="padding:10px 0;vertical-align:top;color:#192C3B;border-bottom:1px solid #E7E3DB;">${escapeHtml(value).replace(/\n/g, '<br>')}</td>
         </tr>`,
    )
    .join('');

  return `<!doctype html>
<html lang="ko"><body style="margin:0;padding:32px;background:#F7F4EE;font-family:-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;">
  <div style="max-width:640px;margin:0 auto;background:#FFFFFF;padding:36px;">
    <p style="margin:0;font-size:11px;letter-spacing:3px;color:#285A8C;font-weight:600;">CERTO AGENCY</p>
    <h1 style="margin:14px 0 6px;font-size:22px;color:#192C3B;">신규 프로젝트 문의</h1>
    <p style="margin:0 0 26px;font-size:13px;color:#6B7783;">접수 시각 ${escapeHtml(receivedAt)}</p>
    <table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.7;">${rows}</table>
    <p style="margin:26px 0 0;font-size:12px;color:#6B7783;">
      이 메일은 홈페이지 문의 폼에서 자동 발송되었습니다. 회신은 위 이메일 주소로 보내주세요.
    </p>
  </div>
</body></html>`;
}

async function sendResend(payload: InquiryPayload, receivedAt: string): Promise<NotifyResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;
  const from = process.env.INQUIRY_FROM_EMAIL || DEFAULT_INQUIRY_FROM;

  // 키가 없으면 이메일 채널을 쓰지 않는 것으로 간주합니다.
  if (!apiKey) return { channel: 'resend', ok: false, error: 'not-configured' };

  // 키는 있는데 수신 주소가 없는 설정 실수 — 조용히 넘기지 않고 실패로 처리합니다.
  if (!to) {
    return {
      channel: 'resend',
      ok: false,
      error: 'INQUIRY_TO_EMAIL 이 설정되지 않았습니다. 수신 주소를 등록하세요.',
    };
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: to.split(',').map((address) => address.trim()).filter(Boolean),
        // 담당자가 메일에서 바로 회신할 수 있도록
        reply_to: payload.email,
        subject: buildSubject(payload),
        text: buildText(payload, receivedAt),
        html: buildHtml(payload, receivedAt),
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => '');
      return { channel: 'resend', ok: false, error: `${response.status} ${detail.slice(0, 300)}` };
    }
    return { channel: 'resend', ok: true };
  } catch (error) {
    return { channel: 'resend', ok: false, error: String(error) };
  }
}

async function sendSlack(payload: InquiryPayload, receivedAt: string): Promise<NotifyResult> {
  const webhook = process.env.SLACK_WEBHOOK_URL;
  if (!webhook) return { channel: 'slack', ok: false, error: 'not-configured' };

  try {
    const response = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: `*CERTO 신규 문의* — ${payload.name} (${payload.service})`,
        blocks: [
          {
            type: 'header',
            text: { type: 'plain_text', text: '신규 프로젝트 문의', emoji: false },
          },
          // Slack section 은 필드를 10개까지만 표시하므로 나눠 담습니다.
          // (자르면 시간·인원·내용 같은 항목이 조용히 사라집니다)
          ...chunk(filledFields(payload), 10).map((group) => ({
            type: 'section',
            fields: group.map(([label, value]) => ({
              type: 'mrkdwn',
              text: `*${label}*\n${value.slice(0, 1500)}`,
            })),
          })),
          {
            type: 'context',
            elements: [{ type: 'mrkdwn', text: `접수 시각 ${receivedAt}` }],
          },
        ],
      }),
    });

    if (!response.ok) {
      return { channel: 'slack', ok: false, error: String(response.status) };
    }
    return { channel: 'slack', ok: true };
  } catch (error) {
    return { channel: 'slack', ok: false, error: String(error) };
  }
}

/** 설정된 채널이 있는지 */
export function hasConfiguredChannel() {
  return Boolean(process.env.RESEND_API_KEY || process.env.SLACK_WEBHOOK_URL);
}

/**
 * 설정된 채널로 모두 전송하고 결과를 돌려줍니다.
 * 한 채널이 실패해도 다른 채널 전송은 계속됩니다.
 */
export async function notifyInquiry(
  payload: InquiryPayload,
  receivedAt: string,
): Promise<NotifyResult[]> {
  const results = await Promise.all([
    sendResend(payload, receivedAt),
    sendSlack(payload, receivedAt),
  ]);

  // 설정되지 않은 채널은 결과에서 제외합니다.
  return results.filter((result) => result.error !== 'not-configured');
}
