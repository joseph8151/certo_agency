/**
 * 이미지 매니페스트
 * ─────────────────────────────────────────────
 * hero · interpretation · translation · domestic · business 는 실사 사진입니다.
 * global 만 아직 플레이스홀더(SVG)이며, 해외 현장 사진을 확보하면 교체합니다.
 *
 * 교체 방법
 *   1) public/images/ 에 사진을 넣습니다. (예: hero.jpg)
 *   2) 아래 src 를 '/images/hero.jpg' 로 변경합니다.
 *   3) 원본 비율과 프레임 비율이 다르면 position 으로 잘리는 기준점을 잡습니다.
 *   4) 외부 CDN을 쓰려면 next.config.mjs 의 images.remotePatterns 에 호스트를 추가합니다.
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
  /**
   * object-position. 프레임 비율과 원본 비율이 다를 때 잘리는 기준점입니다.
   * 인물이 한쪽에 몰린 사진은 이 값으로 잘리지 않게 잡아 줍니다. (기본 '50% 50%')
   */
  position?: string;
};

export const images = {
  hero: {
    src: '/images/hero.jpg',
    ratio: '4 / 3',
    alt: '서울 도심이 보이는 회의실에서 진행되는 국제 비즈니스 미팅',
    subject: '국제 컨퍼런스 · 고급 회의장 전경',
    position: '54% 50%',
  },
  interpretation: {
    src: '/images/interpretation.jpg',
    ratio: '4 / 3',
    alt: '창가 회의실에서 마주 앉아 진행되는 일대일 비즈니스 미팅',
    subject: '국제회의 · 통역 부스 · 비즈니스 미팅 현장',
    position: '52% 50%',
  },
  translation: {
    src: '/images/translation.jpg',
    ratio: '4 / 3',
    alt: '밝은 책상 위에서 검토 중인 문서',
    subject: '계약서·보고서 검토, 데스크 위 문서와 손, 차분한 톤',
    position: '50% 46%',
  },
  domestic: {
    src: '/images/domestic.jpg',
    ratio: '6 / 7',
    alt: '기업 로비를 함께 걸어 들어오는 담당자와 파트너',
    subject: '서울 도심 · 기업 미팅 · 컨벤션 센터',
    position: '31% 50%',
  },
  business: {
    src: '/images/business.jpg',
    ratio: '16 / 9',
    alt: '회의실에서 진행되는 기업 대상 프레젠테이션',
    subject: '기업 임원 미팅 · 글로벌 오피스 · 파트너십 현장',
    position: '50% 40%',
  },
  global: {
    src: '/images/global.svg',
    ratio: '4 / 5',
    alt: '해외 비즈니스 현장',
    subject: '공항 · 해외 컨벤션 센터 · 국제 전시회 현장, 세로형 구도',
  },
} satisfies Record<string, ImageSlot>;

export type ImageKey = keyof typeof images;
