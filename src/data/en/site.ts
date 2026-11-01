/**
 * 영문 사이트 설정 — /en
 * ─────────────────────────────────────────────
 * 한국에 오는 외국 기업·방문객을 위한 영어 페이지의 공통 정보입니다.
 * 회사 정보와 연락처는 한국어 사이트(src/data/site.ts)와 같은 값을 씁니다.
 */
import { contactInfo, site } from '../site';
import { pricingNotes, pricingPlans } from '../pricing';

export const enSite = {
  name: 'CERTO AGENCY',
  legalName: 'Certo Drive',
  url: `${site.url}/en`,
  tagline: 'Interpreters and translators for business in Korea',
  locale: 'en_US',
} as const;

/**
 * Formspree 문의 접수 주소.
 *
 * https://formspree.io 에서 폼을 만들면 `https://formspree.io/f/xxxxxxxx` 형태의 주소가 나옵니다.
 * 이 주소는 공개되어도 되는 값입니다. (폼 제출용 주소이며 비밀 키가 아닙니다)
 * 아래 상수에 붙여 넣거나, 환경 변수 NEXT_PUBLIC_FORMSPREE_ENDPOINT 로 지정하세요.
 * 값이 비어 있으면 문의 폼 대신 이메일 안내가 표시됩니다.
 */
export const FORMSPREE_ENDPOINT = (process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '').trim();

export const enContact = {
  email: contactInfo.email,
  phone: contactInfo.phone,
  hours: 'Mon–Fri 09:00–18:00 KST (UTC+9)',
  address: '2F A9, 39-26 Gangnam-daero 8-gil, Seocho-gu, Seoul, Republic of Korea',
} as const;

export const enNavigation = [
  { label: 'Services', href: '/en#services' },
  { label: 'Cities', href: '/en#cities' },
  { label: 'Languages', href: '/en#languages' },
  { label: 'Pricing', href: '/en#pricing' },
  { label: 'Guides', href: '/en#guides' },
] as const;

export const enCta = { label: 'Request a quote', href: '/en/contact' } as const;

const won = (n: number) => `₩${n.toLocaleString('en-US')}`;

/** 요금표 — 한국어 사이트의 pricing.ts 숫자를 그대로 읽어 두 사이트가 어긋나지 않습니다. */
const enPlanText: Record<string, { name: string; fit: string; includes: string[] }> = {
  standard: {
    name: 'Standard interpreter',
    fit: 'Everyday business meetings, basic on-site interpreting and simple consultations.',
    includes: ['On-site interpreting', 'Schedule confirmation', 'General business communication'],
  },
  business: {
    name: 'Business premium',
    fit: 'Important buyer meetings, specialist negotiations and anything that needs preparation.',
    includes: [
      'Pre-meeting document review',
      'Industry terminology preparation',
      'On-site interpreting',
      'Summary of key points discussed',
      'Follow-up email support if needed',
    ],
  },
  executive: {
    name: 'Executive / specialist',
    fit: 'M&A, investment, contract negotiation, technical meetings, factory audits and board-level meetings.',
    includes: [
      'Specialist material review in advance',
      'Financial, technical and legal terminology preparation',
      'On-site interpreting for high-stakes meetings',
      'Record of key decisions',
      'Meeting notes and follow-up communication if needed',
    ],
  },
};

export const enPricing = pricingPlans.map((plan) => {
  const text = enPlanText[plan.id];
  const range = plan.priceMax
    ? `${won(plan.priceMin)} – ${won(plan.priceMax)}`
    : `${won(plan.priceMin)}+`;
  return { id: plan.id, highlight: Boolean(plan.highlight), range, unit: 'per day', ...text };
});

export const enPricingNotes = [
  'Prices are in Korean won (KRW) per day. For trips outside Seoul, travel, accommodation and local transport are quoted separately.',
  'The final quote depends on the language, the difficulty of the subject, hours, and how much preparation material there is.',
];

// 한국어 사이트의 고지와 의미가 같은지 확인용 — 문구가 바뀌면 영문도 함께 고칩니다.
export const koPricingNotes = pricingNotes;
