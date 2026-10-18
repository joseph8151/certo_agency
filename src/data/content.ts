/**
 * 섹션별 콘텐츠 데이터
 * ─────────────────────────────────────────────
 * 모든 문구·목록은 배열 데이터로 관리합니다.
 * 항목을 추가/삭제하면 화면에 그대로 반영됩니다.
 */

/* ── 07. Hero 하단 신뢰 바 ───────────────────────────── */
export const trustBarItems: string[] = [
  '비즈니스 통역',
  '계약 · 기술 미팅',
  '전시회 · 바이어 상담',
  '문서 번역 및 검토',
  '해외 출장 지원',
  '기업 전담 서비스',
];

/* ── 08. 왜 체르토 에이전시인가 ──────────────────────── */
export type ValuePillar = {
  no: string;
  title: string;
  body: string;
};

export const valuePillars: ValuePillar[] = [
  {
    no: '01',
    title: '상황을 먼저 확인합니다',
    body: '언어만 맞추는 것이 아니라 미팅의 목적과 업종을 먼저 확인한 뒤 배정합니다.',
  },
  {
    no: '02',
    title: '전문 일정에 대응합니다',
    body: '기술 미팅, 계약 협의, 투자 논의처럼 용어와 정확성이 중요한 자리를 다룹니다.',
  },
  {
    no: '03',
    title: '사전 자료를 검토합니다',
    body: '자료를 미리 공유해 주시면 현장에서 쓸 용어와 표현을 맞춰 둡니다.',
  },
  {
    no: '04',
    title: '미팅 이후까지 이어집니다',
    body: '필요하시면 회의록 정리와 후속 문서 작성까지 함께 지원합니다.',
  },
  {
    no: '05',
    title: '해외 일정을 연계합니다',
    body: '통역뿐 아니라 현지 미팅 조율과 이동까지 하나의 창구에서 안내합니다.',
  },
  {
    no: '06',
    title: '담당자가 끝까지 관리합니다',
    body: '문의부터 일정 종료까지 같은 담당자가 맡아 중간에 설명이 끊기지 않습니다.',
  },
];

/* ── 09. 서비스 3개 영역 ────────────────────────────── */
export type ServiceArea = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  items: string[];
  cta: string;
  /** src/data/images.ts 의 키 */
  imageKey: 'interpretation' | 'translation' | 'global';
};

export const serviceAreas: ServiceArea[] = [
  {
    id: 'interpretation',
    eyebrow: '통역',
    title: '비즈니스 통역',
    subtitle:
      '일반 미팅부터 계약 협상, 기술 미팅, 투자 미팅, 공장 실사까지 업무 목적과 난이도에 맞춰 통역사를 연결합니다.',
    items: [
      '비즈니스 통역',
      '바이어 미팅 통역',
      '기술 통역',
      '계약 협상 통역',
      'M&A · 투자 미팅 통역',
      '공장 실사 통역',
      '전시회 통역',
      '온라인 미팅 통역',
      '해외 출장 동행 통역',
    ],
    cta: '통역 서비스 자세히 보기',
    imageKey: 'interpretation',
  },
  {
    id: 'translation',
    eyebrow: '문서',
    title: '비즈니스 문서 지원',
    subtitle: '미팅 전후에 필요한 문서까지 함께 지원합니다.',
    items: [
      '계약서 번역',
      'NDA 번역 및 검토',
      '제안서 번역',
      '회사소개서 번역',
      '견적서 번역',
      '회의록 작성 및 번역',
      '후속 이메일 작성',
      '기술자료 번역',
      '번역 검수',
    ],
    cta: '문서 지원 자세히 보기',
    imageKey: 'translation',
  },
  {
    id: 'global',
    eyebrow: '해외 지원',
    title: '해외 출장 · 비즈니스 지원',
    subtitle: '통역 외에도 해외 일정에 필요한 현장 업무를 함께 연결합니다.',
    items: [
      '해외 출장 일정 지원',
      '현지 미팅 코디네이션',
      '공항 픽업 및 차량 이동 연계',
      '바이어 미팅 일정 조율',
      '현지 업체 연락',
      '전시회 현장 지원',
      '통역 + 차량 패키지',
      '통역 + 회의록 패키지',
      '통역 + 계약서 번역 패키지',
      '통역 + 출장 지원 패키지',
    ],
    cta: '해외 지원 자세히 보기',
    imageKey: 'global',
  },
];

/* ── 10. 국내 통역 ──────────────────────────────────── */
export const domesticServices: string[] = [
  '기업 미팅',
  '해외 바이어 방문',
  '국제 컨퍼런스',
  '기업 행사',
  '전시회 및 박람회',
  '수행 통역',
  'VIP 일정',
  '온라인 미팅',
];

/* ── 11. 해외 통역 ──────────────────────────────────── */
export type Region = {
  name: string;
  note: string;
};

export const globalRegions: Region[] = [
  { name: '북미', note: '기업 방문 · 전시회 · 바이어 상담' },
  { name: '유럽', note: '국제 전시회 · 현지 미팅 · 산업 시찰' },
  { name: '아시아', note: '생산 현장 · 공급망 미팅 · 지사 지원' },
  { name: '중동', note: '정부 · 기업 상담 · 프로젝트 협의' },
  { name: '오세아니아', note: '비즈니스 출장 · 파트너 미팅' },
];

/* ── 12. 기업 고객 전용 서비스 ──────────────────────── */
export const businessServices: string[] = [
  '기업 전담 통번역',
  '해외 출장 통역',
  '국제회의',
  '전시회 통역',
  '해외 바이어 대응',
  '문서 번역',
  '다국어 콘텐츠',
  '장기 프로젝트',
];

/* ── 13. 전문 분야 ──────────────────────────────────── */
export type Industry = { en: string; ko: string };

export const industries: Industry[] = [
  { en: 'Business', ko: '비즈니스 · 경영' },
  { en: 'Finance', ko: '금융 · 투자' },
  { en: 'Legal', ko: '법률 · 계약' },
  { en: 'Medical', ko: '의료 · 제약' },
  { en: 'Technology', ko: '기술 · 연구' },
  { en: 'Engineering', ko: '엔지니어링 · 플랜트' },
  { en: 'Education', ko: '교육 · 학술' },
  { en: 'Government', ko: '공공 · 정부' },
  { en: 'Fashion', ko: '패션 · 리테일' },
  { en: 'Beauty', ko: '뷰티 · 코스메틱' },
  { en: 'Entertainment', ko: '엔터테인먼트 · 미디어' },
  { en: 'Manufacturing', ko: '제조 · 생산' },
  { en: 'IT', ko: 'IT · 소프트웨어' },
  { en: 'Marketing', ko: '마케팅 · 커뮤니케이션' },
];

/* ── 14. Premium Matching System ────────────────────── */
export type MatchingStep = {
  step: string;
  title: string;
  body: string;
};

export const matchingSteps: MatchingStep[] = [
  {
    step: '01',
    title: '미팅 내용 확인',
    body: '언어, 일정, 장소, 업무 목적, 산업분야를 확인합니다.',
  },
  {
    step: '02',
    title: '후보 선별',
    body: '자리의 성격에 맞는 전문가 후보를 추립니다.',
  },
  {
    step: '03',
    title: '배정',
    body: '경력과 유사한 자리를 맡아본 경험을 기준으로 최종 배정합니다.',
  },
  {
    step: '04',
    title: '진행 지원',
    body: '일정 조율부터 현장 진행까지 담당자가 함께 확인합니다.',
  },
];

/* ── 15. 품질 기준 ──────────────────────────────────── */
export type QualityCheck = { label: string; body: string };

export const qualityChecks: QualityCheck[] = [
  { label: '전문 분야', body: '해당 산업의 용어와 맥락을 이해하는가.' },
  { label: '경력', body: '유사 규모·성격의 업무를 수행한 경험이 있는가.' },
  { label: '언어 능력', body: '양방향 커뮤니케이션이 안정적으로 가능한가.' },
  { label: '관련 프로젝트 경험', body: '동일한 유형의 현장을 다뤄본 적이 있는가.' },
  { label: '비즈니스 커뮤니케이션 능력', body: '기업 환경에 맞는 태도와 표현을 갖췄는가.' },
  { label: '일정 및 현장 대응력', body: '변동 상황에서도 침착하게 대응할 수 있는가.' },
  { label: '직업적 태도', body: '준비, 시간, 태도에 대한 기준이 명확한가.' },
  { label: '기밀 유지', body: '기밀 유지 원칙을 이해하고 준수하는가.' },
];

/* ── 16. 통역이 필요한 상황 ─────────────────────────── */
export type UseCase = {
  situation: string;
  solution: string;
};

export const useCases: UseCase[] = [
  { situation: '해외 바이어가 한국에 방문합니다.', solution: '바이어 미팅 통역' },
  { situation: '해외 전시회에 참가합니다.', solution: '전시회 현장 통역' },
  { situation: '계약 조건을 협의해야 합니다.', solution: '계약 협상 통역' },
  { situation: '계약서를 검토해야 합니다.', solution: '계약서 번역 · 검토' },
  { situation: '해외 기업과 온라인 미팅이 있습니다.', solution: '온라인 미팅 통역' },
  { situation: '해외 공장을 실사해야 합니다.', solution: '공장 실사 통역 · 출장 지원' },
];

/* ── 17. 고객 유형 ──────────────────────────────────── */
export const clientTypes: string[] = [
  '제조 기업',
  '수출입 기업',
  '스타트업',
  '법무법인',
  '컨설팅 기업',
  '공공기관',
  '대학 · 연구기관',
  '행사 주최사',
  '전시 기획사',
  '의료기관',
  '미디어 기업',
  '글로벌 브랜드',
];

/* ── 18. 프로젝트 예시 ──────────────────────────────── */
export type Project = {
  category: string;
  languagePair: string;
  location: string;
  description: string;
};

export const projects: Project[] = [
  {
    category: '해외 비즈니스 미팅',
    languagePair: '한국어 ↔ 영어',
    location: '서울',
    description: '해외 기업 미팅 순차 통역',
  },
  {
    category: '국제 전시회',
    languagePair: '한국어 ↔ 영어',
    location: '유럽',
    description: '해외 전시회 기업 통역 지원',
  },
  {
    category: '경영진 미팅',
    languagePair: '한국어 ↔ 일본어',
    location: '서울',
    description: '기업 임원 미팅 수행 통역',
  },
  {
    category: '문서 번역',
    languagePair: '한국어 → 영어',
    location: '기업 프로젝트',
    description: '기업 제안서 및 비즈니스 문서 번역',
  },
];

/* ── 19. 상담 프로세스 ──────────────────────────────── */
export type ProcessStep = { no: string; label: string; body: string };

export const processSteps: ProcessStep[] = [
  { no: '01', label: '일정과 언어 확인', body: '날짜, 시간, 장소, 필요한 언어를 확인합니다.' },
  { no: '02', label: '미팅 목적 확인', body: '어떤 자리인지에 따라 필요한 통역사가 달라집니다.' },
  { no: '03', label: '자료 및 난이도 확인', body: '사전 자료가 있으면 용어와 준비 범위를 가늠합니다.' },
  { no: '04', label: '통역사 또는 담당자 배정', body: '업종과 경험을 기준으로 적합한 사람을 배정합니다.' },
  { no: '05', label: '견적 안내', body: '업무 범위가 정리된 뒤 견적을 보내드립니다.' },
  { no: '06', label: '일정 진행', body: '진행 중에도 담당자가 함께 확인합니다.' },
];

/* ── 20. FAQ ────────────────────────────────────────── */
export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: '통역 비용은 어떻게 결정되나요?',
    a: '언어, 시간, 장소, 업무 난이도, 사전 자료 검토 여부에 따라 달라집니다.',
  },
  {
    q: '계약서나 기술자료를 미리 보내도 되나요?',
    a: '가능합니다. 사전 자료를 검토하면 현장에서 사용하는 용어와 표현을 미리 맞출 수 있습니다.',
  },
  {
    q: '해외 출장도 함께 지원 가능한가요?',
    a: '통역뿐 아니라 일정, 이동, 현지 미팅 지원 등을 함께 안내할 수 있습니다.',
  },
  {
    q: '하루 통역만 가능한가요?',
    a: '반일, 1일, 장기 일정, 정기 미팅 등 일정에 맞춰 안내합니다.',
  },
  {
    q: '온라인 미팅도 가능한가요?',
    a: 'Zoom, Google Meet, Teams 등 온라인 미팅 통역도 가능합니다.',
  },
  {
    q: '통역사는 어떻게 선정되나요?',
    a: '업종, 경력, 유사한 자리를 맡아본 경험, 현장 대응력을 기준으로 후보를 추린 뒤 미팅 성격에 맞는 사람을 배정합니다.',
  },
  {
    q: '급하게 통역사가 필요한 경우도 가능한가요?',
    a: '일정과 언어에 따라 긴급 배정을 지원합니다. 다만 분야와 지역에 따라 가용 인력이 달라지므로, 확인 즉시 가능 여부를 알려드립니다.',
  },
  {
    q: '번역은 얼마나 걸리나요?',
    a: '분량과 전문성, 요청하시는 검수 수준에 따라 달라집니다. 문서를 확인한 뒤 일정과 함께 안내드리며, 급한 건은 따로 협의합니다.',
  },
  {
    q: '여러 언어가 동시에 필요한 경우도 가능한가요?',
    a: '가능합니다. 언어별로 각각 업체를 찾으실 필요 없이 하나의 프로젝트로 묶어 관리합니다.',
  },
  {
    q: '지역에 관계없이 배정할 수 있나요?',
    a: '국내는 서울을 중심으로 전국 주요 도시를, 해외는 현지 네트워크를 통해 대응합니다. 지역과 일정에 따라 가능 여부를 먼저 확인해 드립니다.',
  },
];

/* ── 22. 문의 폼 옵션 ───────────────────────────────── */
export const serviceOptions: string[] = [
  '비즈니스 통역',
  '문서 번역 · 검토',
  '해외 출장 지원',
  '기업 전담 서비스',
  '기타',
];

/** 통역 방식 — 통역 관련 문의에서 선택합니다. */
export const interpretationTypeOptions: string[] = [
  '순차 통역',
  '동시 통역',
  '수행 통역',
  '화상회의 통역',
  '전시회 · 부스 통역',
  '아직 모르겠습니다',
];

/** 산업 분야 — 전문 분야 매칭에 사용합니다. */
export const industryOptions: string[] = [
  '비즈니스 · 경영',
  '금융 · 투자',
  '법률 · 계약',
  '의료 · 제약',
  '기술 · IT',
  '엔지니어링 · 제조',
  '교육 · 학술',
  '공공 · 정부',
  '패션 · 뷰티 · 소비재',
  '엔터테인먼트 · 미디어',
  '기타',
];

export const languageOptions: string[] = [
  '영어',
  '일본어',
  '중국어',
  '스페인어',
  '프랑스어',
  '독일어',
  '베트남어',
  '러시아어',
  '아랍어',
  '기타 / 미정',
];
