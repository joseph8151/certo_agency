/**
 * 검색엔진 노출 설정
 * ─────────────────────────────────────────────
 * 네이버 · 구글 등에 사이트 소유를 증명하는 인증 코드와
 * 전 페이지 공통으로 사용하는 검색 키워드를 모아둔 파일입니다.
 *
 * 인증 코드는 환경 변수로 넣습니다. (값이 비어 있으면 태그가 아예 출력되지 않습니다)
 *   NEXT_PUBLIC_NAVER_SITE_VERIFICATION    네이버 서치어드바이저
 *   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION   구글 서치콘솔
 *
 * NEXT_PUBLIC_ 값은 빌드 시점에 박히므로, 등록 후 반드시 재배포해야 반영됩니다.
 */

/** 값이 비어 있으면 undefined 로 만들어 빈 meta 태그가 남지 않게 합니다. */
function code(value: string | undefined) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

export const verification = {
  naver: code(process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION),
  google: code(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION),
};

/**
 * 사이트 대표 키워드
 * ─────────────────────────────────────────────
 * 네이버·구글은 keywords 메타태그를 순위에 거의 반영하지 않습니다.
 * 실제로 노출을 만드는 것은 title / description / 본문에 쓰인 말입니다.
 * 그래서 아래 목록은 "본문에 실제로 등장하는 표현" 과 맞춰 둡니다.
 *
 * 검색 의도별로 묶어 두었으니, 새 키워드를 넣을 때는
 * 해당 표현이 페이지 본문에도 자연스럽게 등장하는지 함께 확인하세요.
 */
export const siteKeywords = [
  /* 브랜드 */
  "CERTO AGENCY",
  "체르토 에이전시",
  "체르토 통역",

  /* 업종 — 가장 큰 검색량 */
  "통역 에이전시",
  "번역 에이전시",
  "통번역 에이전시",
  "통역 업체",
  "번역 업체",
  "통역사 섭외",
  "통역사 매칭",
  "전문 통역",
  "전문 번역",

  /* 통역 방식 */
  "동시통역",
  "순차통역",
  "수행통역",
  "의전 통역",
  "화상 통역",
  "주재원 통역",

  /* 상황 */
  "기업 통역",
  "비즈니스 통역",
  "국제회의 통역",
  "전시회 통역",
  "박람회 통역",
  "해외 출장 통역",
  "해외 통역사",
  "바이어 미팅 통역",
  "공장 실사 통역",
  "세미나 통역",
  "IR 통역",

  /* 언어 */
  "영어 통역",
  "중국어 통역",
  "일본어 통역",
  "영어 번역",
  "중국어 번역",
  "일본어 번역",

  /* 번역 */
  "계약서 번역",
  "기술 문서 번역",
  "기업 번역",
  "전문 번역 회사",
] as const;
