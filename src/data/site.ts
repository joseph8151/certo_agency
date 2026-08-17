/**
 * 사이트 전역 정보 · 사업자 정보 · 네비게이션
 * ─────────────────────────────────────────────
 * 회사 정보와 연락처는 이 파일만 수정하면 사이트 전체에 반영됩니다.
 */

/**
 * 사이트 절대 주소 — canonical, sitemap.xml, OG 태그, JSON-LD 에 사용됩니다.
 *
 * 배포 환경에서는 환경 변수로 지정하는 것을 권장합니다. (코드 수정 없이 도메인 변경 가능)
 *   Cloudflare  → Workers 설정 > Variables and Secrets 에 NEXT_PUBLIC_SITE_URL 추가
 *   Vercel      → Project Settings > Environment Variables
 *   로컬        → .env.local  (`.env.example` 참고)
 *
 * 빌드 시점에 인라인되므로, 값을 바꾼 뒤에는 반드시 재배포해야 반영됩니다.
 */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.certoagency.com').replace(
  /\/+$/,
  '',
);

export const site = {
  name: 'CERTO AGENCY',
  nameKo: '체르토 에이전시',
  tagline: 'Global Interpretation & Translation Agency',
  taglineKo: '해외 통번역 · 국내 통번역 · 기업 전문 통번역 · 고품격 전문가 매칭',
  promise: '필요한 언어만 연결하는 것이 아니라, 프로젝트에 적합한 전문가를 연결합니다.',
  url: SITE_URL,
  locale: 'ko_KR',
} as const;

/**
 * 연락처 — 실제 정보로 교체해 주세요.
 * 값을 비워두면(''), 해당 항목은 화면에 렌더링되지 않습니다.
 */
export type ContactInfo = {
  email: string;
  phone: string;
  phoneHours: string;
  kakao: string;
  address: string;
  addressDetail: string;
};

export const contactInfo: ContactInfo = {
  email: 'contact@certoagency.com',
  phone: '',
  phoneHours: '평일 09:00 – 18:00',
  kakao: '',
  address: '',
  addressDetail: '',
};

/**
 * 사업자 정보 — 확정 후 값을 채우면 Footer에 자동 노출됩니다.
 */
export const businessInfo: { label: string; value: string }[] = [
  { label: '상호', value: 'CERTO AGENCY' },
  { label: '대표', value: '' },
  { label: '사업자등록번호', value: '' },
  { label: '통신판매업신고', value: '' },
  { label: '주소', value: '' },
];

export type NavItem = { label: string; href: string };

/**
 * 홈 섹션 앵커는 하위 페이지에서도 동작하도록 절대 경로(`/#...`)로 씁니다.
 * 서비스 항목은 상세 페이지로 연결됩니다.
 */
export const navigation: NavItem[] = [
  { label: 'About', href: '/#about' },
  { label: 'Interpretation', href: '/interpretation' },
  { label: 'Translation', href: '/translation' },
  { label: 'Global Service', href: '/global' },
  { label: 'For Business', href: '/business' },
  { label: 'Process', href: '/#process' },
  { label: 'Contact', href: '/#contact' },
];

export const footerNavigation: NavItem[] = [
  { label: 'About', href: '/#about' },
  { label: 'Interpretation', href: '/interpretation' },
  { label: 'Translation', href: '/translation' },
  { label: 'Global', href: '/global' },
  { label: 'Business', href: '/business' },
  { label: 'Contact', href: '/#contact' },
];

export const cta = {
  primary: '프로젝트 문의하기',
  href: '/#contact',
} as const;
