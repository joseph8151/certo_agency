/**
 * 이미지 매니페스트
 * ─────────────────────────────────────────────
 * 현재는 브랜드 톤에 맞춘 라인 컴포지션 플레이트(SVG)를 사용합니다.
 * 실사 사진을 확보하면 아래 `src` 경로만 교체하면 됩니다.
 *
 * 교체 방법
 *   1) public/images/ 에 사진을 넣습니다. (예: hero.jpg)
 *   2) 아래 src 를 '/images/hero.jpg' 로 변경합니다.
 *   3) 외부 CDN을 쓰려면 next.config.mjs 의 images.remotePatterns 에 호스트를 추가합니다.
 *
 * 권장 촬영/선정 방향 (`subject` 참고)
 *   - 헤드셋을 낀 콜센터 이미지는 사용하지 않습니다.
 *   - 국제회의, 비즈니스 미팅, 해외 전시회, 기업 행사, 공항·호텔·컨벤션 등
 *     실제 비즈니스 현장의 사람 중심 이미지를 사용합니다.
 *   - 이미지 위에는 블루/아이보리 오버레이가 약하게 적용되어 톤이 통일됩니다.
 */

export type ImageSlot = {
  src: string;
  /** 권장 비율 (레이아웃이 이 비율을 기준으로 잡혀 있습니다) */
  ratio: string;
  /** 접근성 대체 텍스트 — 실제 사진으로 교체할 때 함께 수정하세요. */
  alt: string;
  /** 어떤 사진이 들어가야 하는지에 대한 가이드 */
  subject: string;
};

export const images = {
  hero: {
    src: '/images/hero.svg',
    ratio: '4 / 5',
    alt: '국제 비즈니스 컨퍼런스 현장',
    subject: '국제 컨퍼런스 · 고급 회의장 전경, 세로형 구도',
  },
  interpretation: {
    src: '/images/interpretation.svg',
    ratio: '4 / 3',
    alt: '국제회의에서 진행되는 전문 통역 현장',
    subject: '국제회의 · 통역 부스 · 비즈니스 미팅 현장',
  },
  translation: {
    src: '/images/translation.svg',
    ratio: '4 / 3',
    alt: '전문 번역 문서 작업 현장',
    subject: '계약서·보고서 검토, 데스크 위 문서와 손, 차분한 톤',
  },
  domestic: {
    src: '/images/domestic.svg',
    ratio: '6 / 7',
    alt: '서울에서 진행되는 기업 비즈니스 미팅',
    subject: '서울 도심 · 기업 미팅 · 컨벤션 센터',
  },
  business: {
    src: '/images/business.svg',
    ratio: '16 / 9',
    alt: '기업 글로벌 커뮤니케이션 현장',
    subject: '기업 임원 미팅 · 글로벌 오피스 · 파트너십 현장',
  },
  industries: {
    src: '/images/industries.svg',
    ratio: '3 / 2',
    alt: '다양한 산업 분야의 비즈니스 현장',
    subject: '산업 현장 · 전시회 부스 · 기업 방문',
  },
} satisfies Record<string, ImageSlot>;

export type ImageKey = keyof typeof images;
