/**
 * 섹션별 콘텐츠 데이터
 * ─────────────────────────────────────────────
 * 모든 문구·목록은 배열 데이터로 관리합니다.
 * 항목을 추가/삭제하면 화면에 그대로 반영됩니다.
 */

/* ── 07. Hero 하단 신뢰 바 ───────────────────────────── */
export const trustBarItems: string[] = [
  '국내 통번역',
  '해외 통번역',
  '기업 프로젝트',
  '국제행사',
  '전문분야 번역',
  '글로벌 전문가 네트워크',
];

/* ── 08. 왜 CERTO 인가 ──────────────────────────────── */
export type ValuePillar = {
  no: string;
  titleEn: string;
  body: string;
};

export const valuePillars: ValuePillar[] = [
  {
    no: '01',
    titleEn: 'PROJECT FIT',
    body: '프로젝트의 산업, 언어, 일정, 장소, 목적을 먼저 분석합니다.',
  },
  {
    no: '02',
    titleEn: 'CURATED PROFESSIONALS',
    body: '경력과 전문분야를 기준으로 적합한 통역사·번역가를 선별합니다.',
  },
  {
    no: '03',
    titleEn: 'END-TO-END SUPPORT',
    body: '상담부터 매칭, 일정 조율, 프로젝트 진행까지 담당자가 관리합니다.',
  },
];

/* ── 09. 서비스 Overview ────────────────────────────── */
export type ServiceArea = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  items: string[];
  cta: string;
  /** src/data/images.ts 의 키 */
  imageKey: 'interpretation' | 'translation';
};

export const serviceAreas: ServiceArea[] = [
  {
    id: 'interpretation',
    eyebrow: 'INTERPRETATION',
    title: '전문 통역 서비스',
    subtitle: '현장의 언어를 정확하게. 비즈니스의 맥락까지 전달합니다.',
    items: [
      '비즈니스 미팅 통역',
      '수행 통역',
      '순차 통역',
      '동시 통역',
      '국제회의 통역',
      '기업 행사',
      '전시회 / 박람회',
      '해외 출장',
      '바이어 미팅',
      '현지 비즈니스 지원',
      '온라인 / 화상회의 통역',
    ],
    cta: '통역 서비스 자세히 보기',
    imageKey: 'interpretation',
  },
  {
    id: 'translation',
    eyebrow: 'TRANSLATION',
    title: '전문 번역 서비스',
    subtitle: '문서의 목적과 독자를 이해하는 번역. 전문 분야별로 매칭합니다.',
    items: [
      '기업 문서',
      '계약서',
      '제안서',
      '보고서',
      '홈페이지',
      '마케팅 자료',
      '논문',
      '매뉴얼',
      '프레젠테이션',
      '기술 문서',
      '비즈니스 자료',
      '각종 전문 문서',
    ],
    cta: '번역 서비스 자세히 보기',
    imageKey: 'translation',
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
  { name: 'North America', note: '기업 방문 · 전시회 · 바이어 상담' },
  { name: 'Europe', note: '국제 전시회 · 현지 미팅 · 산업 시찰' },
  { name: 'Asia', note: '생산 현장 · 공급망 미팅 · 지사 지원' },
  { name: 'Middle East', note: '정부·기업 상담 · 프로젝트 협의' },
  { name: 'Oceania', note: '비즈니스 출장 · 파트너 미팅' },
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
  titleEn: string;
  body: string;
};

export const matchingSteps: MatchingStep[] = [
  {
    step: 'STEP 01',
    titleEn: 'PROJECT BRIEF',
    body: '언어, 일정, 장소, 업무 목적, 산업분야를 확인합니다.',
  },
  {
    step: 'STEP 02',
    titleEn: 'EXPERT SELECTION',
    body: '프로젝트 특성에 적합한 전문가 후보를 선별합니다.',
  },
  {
    step: 'STEP 03',
    titleEn: 'MATCHING',
    body: '경력, 전문분야, 프로젝트 경험을 바탕으로 최종 전문가를 매칭합니다.',
  },
  {
    step: 'STEP 04',
    titleEn: 'PROJECT SUPPORT',
    body: '일정 조율부터 프로젝트 진행까지 CERTO가 지원합니다.',
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
  { label: 'Professionalism', body: '준비, 시간, 태도에 대한 기준이 명확한가.' },
  { label: 'Confidentiality', body: '기밀 유지 원칙을 이해하고 준수하는가.' },
];

/* ── 16. 통역이 필요한 상황 ─────────────────────────── */
export type UseCase = {
  situation: string;
  solution: string;
};

export const useCases: UseCase[] = [
  { situation: '해외 바이어가 한국에 방문합니다.', solution: '비즈니스 미팅 / 수행 통역' },
  { situation: '해외 전시회에 참가합니다.', solution: '해외 현지 통역' },
  { situation: '국제회의를 준비하고 있습니다.', solution: '순차 / 동시 통역' },
  { situation: '계약서를 번역해야 합니다.', solution: '전문 문서 번역' },
  { situation: '해외 기업과 온라인 미팅이 있습니다.', solution: '화상회의 통역' },
  { situation: '해외 출장을 준비하고 있습니다.', solution: '해외 비즈니스 통역' },
];

/* ── 17. 고객 유형 ──────────────────────────────────── */
export const clientTypes: string[] = [
  'Corporations',
  'Startups',
  'Law Firms',
  'Consulting Firms',
  'Government',
  'Universities',
  'Conference Organizers',
  'Exhibition Companies',
  'Medical Organizations',
  'Media Companies',
  'Global Brands',
  'Individual Professionals',
];

/* ── 18. 프로젝트 예시 ──────────────────────────────── */
export type Project = {
  titleEn: string;
  languagePair: string;
  location: string;
  description: string;
};

export const projects: Project[] = [
  {
    titleEn: 'GLOBAL BUSINESS MEETING',
    languagePair: 'Korean ↔ English',
    location: '서울',
    description: '해외 기업 미팅 순차 통역',
  },
  {
    titleEn: 'INTERNATIONAL EXHIBITION',
    languagePair: 'Korean ↔ English',
    location: 'Europe',
    description: '해외 전시회 기업 통역 지원',
  },
  {
    titleEn: 'EXECUTIVE MEETING',
    languagePair: 'Korean ↔ Japanese',
    location: 'Seoul',
    description: '기업 임원 미팅 수행 통역',
  },
  {
    titleEn: 'DOCUMENT TRANSLATION',
    languagePair: 'Korean → English',
    location: 'Corporate',
    description: '기업 제안서 및 비즈니스 문서 번역',
  },
];

/* ── 19. 상담 프로세스 ──────────────────────────────── */
export type ProcessStep = { no: string; label: string; body: string };

export const processSteps: ProcessStep[] = [
  { no: '01', label: '문의', body: '필요한 내용을 남겨주시면 담당자가 연락드립니다.' },
  { no: '02', label: '프로젝트 확인', body: '언어, 일정, 장소, 목적을 함께 정리합니다.' },
  { no: '03', label: '전문가 선별', body: '분야와 경험을 기준으로 후보를 추립니다.' },
  { no: '04', label: '견적 및 매칭', body: '조건에 맞는 견적과 전문가를 제안드립니다.' },
  { no: '05', label: '일정 확정', body: '세부 일정과 현장 정보를 확정합니다.' },
  { no: '06', label: '프로젝트 진행', body: '진행 중에도 담당자가 함께 관리합니다.' },
];

/* ── 20. FAQ ────────────────────────────────────────── */
export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: '통역 비용은 어떻게 결정되나요?',
    a: '언어, 통역 방식(순차·동시·수행), 소요 시간, 장소, 전문 분야의 난이도에 따라 산정됩니다. 프로젝트 내용을 알려주시면 조건에 맞는 견적을 안내드립니다.',
  },
  {
    q: '해외 통역도 가능한가요?',
    a: '가능합니다. 북미, 유럽, 아시아, 중동, 오세아니아 등 현지 미팅·전시회·기업 방문 프로젝트를 지원하며, 현지 전문가 매칭 또는 동행 통역 중 프로젝트에 적합한 방식을 제안드립니다.',
  },
  {
    q: '통역사는 어떻게 선정되나요?',
    a: '전문 분야, 경력, 유사 프로젝트 경험, 비즈니스 커뮤니케이션 능력, 현장 대응력을 기준으로 후보를 선별한 뒤 프로젝트 성격에 가장 적합한 전문가를 매칭합니다.',
  },
  {
    q: '급하게 통역사가 필요한 경우도 가능한가요?',
    a: '일정과 언어에 따라 긴급 매칭을 지원합니다. 다만 전문 분야와 지역에 따라 가용 인력이 달라지므로, 확인 즉시 가능 여부를 안내드립니다.',
  },
  {
    q: '기업 장기 계약도 가능한가요?',
    a: '가능합니다. 반복적인 통번역 수요가 있는 기업을 위해 전담 담당자를 두고 프로젝트 단위로 관리하는 장기 협력 방식을 운영합니다.',
  },
  {
    q: '온라인 통역도 가능한가요?',
    a: 'Zoom, Teams, Google Meet 등 주요 화상회의 환경에서의 통역을 지원합니다. 회의 형식과 참석자 구성에 따라 적합한 통역 방식을 제안드립니다.',
  },
  {
    q: '번역 기간은 얼마나 걸리나요?',
    a: '분량과 전문성, 요청하시는 검수 수준에 따라 달라집니다. 문서를 확인한 뒤 정확한 일정과 함께 안내드리며, 긴급 건은 별도로 협의합니다.',
  },
  {
    q: '전문 분야 번역도 가능한가요?',
    a: '법률, 의료, 금융, 기술, 학술 등 전문 분야는 해당 분야 경험을 보유한 번역가에게 배정합니다. 필요한 경우 용어집과 스타일 가이드를 함께 관리합니다.',
  },
  {
    q: '여러 언어가 동시에 필요한 경우도 가능한가요?',
    a: '가능합니다. 다국어가 동시에 필요한 행사나 프로젝트는 CERTO가 하나의 프로젝트로 통합 관리하여, 언어별로 각각 업체를 찾으실 필요가 없습니다.',
  },
  {
    q: '지역에 관계없이 통역사를 배정할 수 있나요?',
    a: '국내는 서울을 중심으로 전국 주요 도시를, 해외는 현지 네트워크를 통해 대응합니다. 지역과 일정에 따라 가능 여부를 먼저 확인해 드립니다.',
  },
];

/* ── 22. 문의 폼 옵션 ───────────────────────────────── */
export const serviceOptions: string[] = ['통역', '번역', '해외 통역', '기업 프로젝트', '기타'];

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
