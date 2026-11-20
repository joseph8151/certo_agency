/**
 * 관리자 로그인 — 비밀번호 하나를 직원이 함께 씁니다.
 * ─────────────────────────────────────────────
 * Cloudflare 에 Secret 두 개가 있어야 로그인이 열립니다. (없으면 관리자 화면이 잠겨 있습니다)
 *   BOARD_ADMIN_PASSWORD   직원이 로그인할 때 쓰는 비밀번호
 *   BOARD_SESSION_SECRET   로그인 쿠키를 서명하는 임의의 긴 문자열 (16자 이상)
 * 코드에 기본 비밀번호는 없습니다.
 */
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const SESSION_COOKIE = 'certo_board_session';
const SESSION_DAYS = 7;
const enc = new TextEncoder();

const env = (name: string) => process.env[name]?.trim() ?? '';

export function authConfigured() {
  return env('BOARD_ADMIN_PASSWORD').length >= 8 && env('BOARD_SESSION_SECRET').length >= 16;
}

async function hmacHex(secret: string, data: string) {
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(data));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

/** 시간차 공격을 줄이기 위해 두 값의 HMAC 을 같은 길이로 비교합니다. */
async function safeEqual(a: string, b: string) {
  const secret = env('BOARD_SESSION_SECRET') || 'x';
  const [ha, hb] = await Promise.all([hmacHex(secret, `cmp.${a}`), hmacHex(secret, `cmp.${b}`)]);
  let diff = 0;
  for (let i = 0; i < ha.length; i++) diff |= ha.charCodeAt(i) ^ hb.charCodeAt(i);
  return diff === 0;
}

export async function passwordMatches(input: string) {
  if (!authConfigured()) return false;
  return safeEqual(input, env('BOARD_ADMIN_PASSWORD'));
}

export async function makeSessionToken() {
  const expires = Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000;
  const sig = await hmacHex(env('BOARD_SESSION_SECRET'), `session.${expires}`);
  return `${expires}.${sig}`;
}

export async function isLoggedIn() {
  if (!authConfigured()) return false;
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!token) return false;
  const [expires, sig] = token.split('.');
  if (!expires || !sig || Number(expires) < Date.now()) return false;
  const expected = await hmacHex(env('BOARD_SESSION_SECRET'), `session.${expires}`);
  return safeEqual(sig, expected);
}

/** 로그인하지 않았다면 /admin 으로 보냅니다. */
export async function requireAdmin() {
  if (!(await isLoggedIn())) redirect('/admin');
}

export const sessionCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  path: '/admin',
  maxAge: SESSION_DAYS * 24 * 60 * 60,
};
