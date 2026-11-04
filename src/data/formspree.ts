/**
 * Formspree 문의 접수 주소 — 한국어 · 영문 사이트가 함께 씁니다.
 * ─────────────────────────────────────────────
 * 상담 문의는 Formspree 로 받습니다.
 *
 * https://formspree.io 에서 폼을 만들면 `https://formspree.io/f/xxxxxxxx` 주소가 나옵니다.
 * 이 주소는 공개되어도 되는 값입니다. (폼 제출용 주소이며 비밀 키가 아닙니다)
 * 아래 상수에 붙여 넣거나 환경 변수 NEXT_PUBLIC_FORMSPREE_ENDPOINT 로 지정하세요.
 *
 * 주소가 비어 있는 동안에는
 *   - 한국어 폼은 기존 접수 경로(/api/contact)로 보냅니다. 문의가 유실되지 않게 하기 위한 임시 경로입니다.
 *   - 영문 폼은 이메일 안내를 보여 줍니다.
 */
export const FORMSPREE_ENDPOINT = (process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '').trim();
