/**
 * 프리미엄 통역 서비스 — 요금 안내
 * ─────────────────────────────────────────────
 * 가격을 바꿀 일이 가장 많으므로 이 파일 한 곳에서만 관리합니다.
 * 컴포넌트(src/components/PremiumService.tsx)에는 숫자가 하나도 없습니다.
 *
 * 수정할 때
 *   - 화면에 보이는 금액 → price 문자열
 *   - 구조화 데이터용 숫자 → priceMin / priceMax (원 단위)
 *     두 값이 어긋나면 검색 결과에 잘못된 가격이 노출되므로 함께 고쳐야 합니다.
 *     상한이 없는 플랜(…이상)은 priceMax 를 비워 둡니다.
 */

export type PricingPlan = {
  id: string;
  /** 카드 상단에 작게 표기되는 구분 라벨 */
  en: string;
  name: string;
  /** 화면에 그대로 출력되는 금액 문자열 */
  price: string;
  /** 금액 뒤에 붙는 단위 */
  unit: string;
  description: string;
  includes: string[];
  /**
   * 구조화 데이터용 (원 단위). 화면 표기와 반드시 일치시켜 주세요.
   * priceMax 를 생략하면 "이상" 으로 간주합니다.
   */
  priceMin: number;
  priceMax?: number;
  /**
   * 업무 범위가 가장 넓어 문의가 많은 구간을 시각적으로 구분합니다.
   * "추천 플랜" 같은 판매 문구 대신, 테두리와 배경만으로 차이를 둡니다.
   */
  highlight?: boolean;
};

export const pricingIntro = {
  eyebrow: '프리미엄 통역',
  title: '프리미엄 통역 서비스',
  lead: '중요한 미팅은 통역 시간만으로 견적을 내지 않습니다. 사전 자료 검토부터 현장 통역, 필요 시 사후 정리까지 업무 범위에 맞춰 안내합니다.',
} as const;

export const pricingPlans: PricingPlan[] = [
  {
    id: 'standard',
    en: '일반',
    name: '일반 통역',
    price: '80만~120만',
    unit: '원 / 1일',
    priceMin: 800_000,
    priceMax: 1_200_000,
    description: '일반 비즈니스 미팅, 기본 현장 통역, 단순 상담 및 일정에 적합합니다.',
    includes: ['현장 통역', '기본 일정 확인', '일반 비즈니스 커뮤니케이션'],
  },
  {
    id: 'business',
    en: '프리미엄',
    name: '비즈니스 프리미엄 통역',
    price: '150만~200만',
    unit: '원 / 1일',
    priceMin: 1_500_000,
    priceMax: 2_000_000,
    description: '중요 바이어 미팅, 전문 비즈니스 협의, 사전 준비가 필요한 일정에 적합합니다.',
    includes: [
      '사전 자료 검토',
      '업종 및 전문용어 준비',
      '현장 통역',
      '주요 논의 내용 정리',
      '필요 시 후속 이메일 지원',
    ],
    highlight: true,
  },
  {
    id: 'executive',
    en: '전문',
    name: 'Executive / 전문 통역',
    price: '200만~300만',
    unit: '원 / 1일 (이상)',
    priceMin: 2_000_000,
    description:
      'M&A, 투자, 계약 협상, 기술 미팅, 공장 실사, 경영진 미팅 등 중요도가 높은 일정에 적합합니다.',
    includes: [
      '전문자료 사전 검토',
      '금융·기술·계약 전문용어 준비',
      '중요 미팅 현장 통역',
      '주요 결정사항 정리',
      '필요 시 회의록 및 후속 커뮤니케이션 지원',
    ],
  },
];

/** 요금표 바로 아래 한 문단 */
export const pricingScope =
  '프리미엄 통역은 현장 통역뿐 아니라 사전 자료 검토, 전문용어 준비, 미팅 진행, 필요 시 회의 내용 정리와 후속 이메일 지원까지 포함할 수 있습니다.';

/** 요금표 아래 고지 */
export const pricingNotes: string[] = [
  '해외 출장 동행의 경우 통역료 외 항공, 숙박, 현지 교통비가 별도로 발생할 수 있습니다.',
  '언어, 국가, 업무 난이도, 통역 시간, 사전 자료 분량에 따라 최종 견적은 달라질 수 있습니다.',
];

export const pricingFaqs: { q: string; a: string }[] = [
  {
    q: '프리미엄 통역은 왜 비용이 다른가요?',
    a: '프리미엄 통역은 현장 통역 시간뿐 아니라 사전 자료 검토, 업종 이해, 전문용어 준비, 미팅 후 정리 등 전체 업무 범위를 포함하기 때문입니다.',
  },
  {
    q: '어떤 일정이 프리미엄에 해당하나요?',
    a: 'M&A, 투자, 계약 협상, 기술 미팅, 공장 실사, 경영진 미팅처럼 한 문장의 의미와 정확성이 중요한 일정에 적합합니다.',
  },
  {
    q: '일반 통역과 프리미엄 통역 중 무엇을 선택해야 하나요?',
    a: '일정 내용을 보내주시면 미팅 목적, 업종, 참석자, 전문성, 사전 자료 여부를 확인한 뒤 적합한 범위로 안내합니다.',
  },
];

/* ── 기업 전담 통역 서비스 ───────────────────────────
 * 해외 거래가 반복되는 기업을 위한 월 단위 지원입니다.
 * 금액은 시작가이며, 실제 견적은 업무 범위에 따라 달라집니다.
 * ─────────────────────────────────────────────────── */

export type RetainerPlan = {
  id: string;
  name: string;
  /** 화면에 그대로 출력되는 금액 문자열 */
  price: string;
  unit: string;
  /** 구조화 데이터용 (원 단위). 시작가이므로 상한은 두지 않습니다. */
  priceMin: number;
  fit: string;
};

export const retainerIntro = {
  eyebrow: '기업 전담',
  title: '기업 전담 통역 서비스',
  lead: '해외 거래가 반복되는 기업을 위한 정기 지원 서비스입니다. 매번 처음부터 설명하지 않아도 되도록, 지난 미팅의 용어와 맥락을 이어서 관리합니다.',
} as const;

/** 모든 구간에 공통으로 포함되는 구성 */
export const retainerIncludes: string[] = [
  '월 정기 온라인 미팅 통역',
  '번역 지원',
  '긴급 미팅 우선 배정',
  '전담 통역사 우선 배정',
  '기존 미팅 용어 및 히스토리 관리',
];

export const retainerPlans: RetainerPlan[] = [
  {
    id: 'light',
    name: '정기 온라인 미팅 중심',
    price: '50만',
    unit: '원 / 월 ~',
    priceMin: 500_000,
    fit: '월 단위 화상 미팅과 간단한 문서 지원이 필요한 경우',
  },
  {
    id: 'standard',
    name: '미팅 + 문서 지원',
    price: '100만',
    unit: '원 / 월 ~',
    priceMin: 1_000_000,
    fit: '미팅 횟수가 늘고 계약·제안 문서가 함께 오가는 경우',
  },
  {
    id: 'extended',
    name: '전담 운영',
    price: '200만',
    unit: '원 / 월 ~',
    priceMin: 2_000_000,
    fit: '현장 통역과 출장이 정기적으로 발생하는 경우',
  },
];

export const retainerNote =
  '위 금액은 시작 기준입니다. 미팅 횟수, 언어, 문서 분량, 현장 통역 포함 여부에 따라 업무 범위를 정리한 뒤 별도 견적으로 안내드립니다.';

export const pricingCta = {
  title: '중요한 미팅일수록 준비부터 다르게',
  body: '일정, 국가, 언어, 미팅 목적을 보내주시면 일반 통역과 프리미엄 통역 중 적합한 범위를 안내드립니다.',
  label: '프리미엄 통역 문의하기',
  href: '#contact',
} as const;
