/**
 * 문의 이메일 발송 점검 스크립트
 * ─────────────────────────────────────────────
 * 폼에 가짜 문의를 넣지 않고도 이메일 경로가 살아 있는지 확인합니다.
 *
 *   RESEND_API_KEY=re_xxx node scripts/check-email.mjs
 *   npm run check:email                      (.env.local 을 읽습니다)
 *
 * Resend 가 돌려주는 오류 메시지를 그대로 보여주므로
 * 키 오류인지 수신 주소 제한인지 바로 구분할 수 있습니다.
 */
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

/** .env.local 이 있으면 읽어들입니다. (아주 단순한 파서) */
function loadEnvFile(name) {
  const file = resolve(root, name);
  if (!existsSync(file)) return;
  for (const line of readFileSync(file, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, '');
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvFile('.env.local');
loadEnvFile('.dev.vars');

// src/lib/notify.ts 의 기본값과 동일하게 유지해야 합니다.
const DEFAULT_FROM = 'CERTO AGENCY <onboarding@resend.dev>';

const apiKey = process.env.RESEND_API_KEY;
const to = process.env.INQUIRY_TO_EMAIL;
const from = process.env.INQUIRY_FROM_EMAIL || DEFAULT_FROM;

console.log('─'.repeat(60));
console.log('CERTO 문의 이메일 발송 점검');
console.log('─'.repeat(60));
console.log(`발신  ${from}`);
console.log(`수신  ${to || '(없음)'}`);
console.log(`키    ${apiKey ? `${apiKey.slice(0, 6)}…${apiKey.slice(-4)}` : '(없음)'}`);
console.log('');

if (!apiKey) {
  console.error('✗ RESEND_API_KEY 가 없습니다.');
  console.error('');
  console.error('  1) https://resend.com 에서 가입 (문의를 받을 주소로 가입하세요)');
  console.error('  2) API Keys 메뉴에서 키 발급');
  console.error('  3) .env.local 에 RESEND_API_KEY=re_... 추가 또는');
  console.error('     RESEND_API_KEY=re_... node scripts/check-email.mjs 로 실행');
  process.exit(1);
}

if (!to) {
  console.error('✗ INQUIRY_TO_EMAIL 이 없습니다. (문의를 받을 주소)');
  console.error('');
  console.error('  수신 주소는 소스에 두지 않고 환경 변수로만 관리합니다.');
  console.error('  저장소가 공개되어 있으면 이메일이 스팸 수집 대상이 되기 때문입니다.');
  console.error('');
  console.error('  .env.local 에 INQUIRY_TO_EMAIL=받을주소@example.com 추가 또는');
  console.error('  배포 환경(Cloudflare Variables and Secrets)에 등록하세요.');
  process.exit(1);
}

let response;
try {
  response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: to.split(',').map((address) => address.trim()).filter(Boolean),
      subject: '[CERTO] 문의 이메일 발송 점검',
      text: [
        '이 메일이 보인다면 홈페이지 문의 폼의 이메일 발송 경로가 정상입니다.',
        '',
        `발신: ${from}`,
        `수신: ${to}`,
        '',
        '실제 문의가 접수되면 이 주소로 문의 내용이 전달됩니다.',
      ].join('\n'),
    }),
  });
} catch (error) {
  console.error('✗ api.resend.com 에 연결하지 못했습니다.');
  console.error(`  ${error}`);
  console.error('');
  console.error('  → 네트워크 또는 방화벽/프록시 설정을 확인하세요.');
  process.exit(1);
}

const body = await response.text();

if (response.ok) {
  console.log('✓ 발송 성공');
  console.log(`  ${body}`);
  console.log('');
  console.log(`  ${to} 받은편지함(및 스팸함)을 확인해 주세요.`);
  process.exit(0);
}

console.error(`✗ 발송 실패 — HTTP ${response.status}`);
console.error(`  ${body}`);
console.error('');

if (/allowlist|egress|proxy|blocked/i.test(body)) {
  console.error('  → 네트워크 정책이 api.resend.com 접근을 막고 있습니다.');
  console.error('     방화벽/프록시 허용 목록에 api.resend.com 을 추가하세요.');
  console.error('     (API 키 문제가 아닙니다)');
} else if (response.status === 401) {
  console.error('  → API 키가 올바르지 않습니다.');
} else if (response.status === 403) {
  console.error('  → 키 권한 또는 발송 제한 문제입니다. 아래 응답 내용을 확인하세요.');
} else if (body.includes('testing emails') || body.includes('own email')) {
  console.error('  → Resend 는 도메인 인증 전까지 "가입에 사용한 이메일" 로만 발송됩니다.');
  console.error(`     ${to} 로 Resend 에 가입했는지 확인하시거나,`);
  console.error('     회사 도메인을 Resend 에 인증한 뒤 INQUIRY_FROM_EMAIL 을 그 도메인 주소로 바꾸세요.');
} else if (body.includes('domain')) {
  console.error('  → INQUIRY_FROM_EMAIL 도메인이 Resend 에 인증되지 않았습니다.');
  console.error('     인증 전에는 INQUIRY_FROM_EMAIL 을 비워두세요. (onboarding@resend.dev 사용)');
}
process.exit(1);
