/**
 * 언어별 · 국가별 검색 랜딩 페이지 — 공용 타입과 조립 함수
 * ─────────────────────────────────────────────
 * "영어 통역", "일본어 번역", "미국 통역", "독일 현지 통역" 같은 검색어는
 * 그 문구가 제목인 페이지가 있어야 잡힙니다. (도시는 city-pages.ts)
 *
 * 구조: 언어 → 국가 → 도시 로 서로 링크되어 검색 로봇이 따라 내려갈 수 있습니다.
 *   /language/[slug]   언어별 (통역 + 번역)
 *   /country/[slug]    국가별 (통역 + 현지 통역)
 *   /global/[city]     도시별 (현지 통역)
 *
 * 내용은 language-data.ts / country-data.ts 에 있습니다.
 * 페이지를 늘릴 때는 "그 언어·국가에서만 할 수 있는 이야기" 가 있을 때만 추가하세요.
 * 제목만 바꾼 비슷한 페이지는 검색엔진이 품질 낮은 사이트로 판단합니다.
 * (npm run check:cities 가 중복 문장을 검사합니다)
 */
import { cityPages } from './city-pages';
import { languageData } from './language-data';
import { countryData } from './country-data';

export type SeoItem = { title: string; body: string };
export type SeoLink = { label: string; href: string; note?: string };

/** 페이지 템플릿(components/SeoLanding.tsx)이 그대로 렌더링하는 형태 */
export type SeoPageData = {
  /** 사이트 내 경로 — /language/english */
  path: string;
  breadcrumb: { label: string; href?: string }[];
  eyebrow: string;
  h1: string;
  lead: string;
  facts: { label: string; value: string }[];
  sections: { eyebrow: string; heading: string; lead?: string; items: SeoItem[] }[];
  notesHeading: string;
  notes: { label: string; body: string }[];
  linkGroups: { heading: string; links: SeoLink[] }[];
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaLabel: string;
  /* 메타 · 구조화 데이터 */
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  serviceName: string;
};

/* ── 언어 ──────────────────────────────────────────── */
export type LanguageData = {
  slug: string;
  /** 영어 · 일본어 … ("통역" "번역" 앞에 붙는 이름) */
  name: string;
  /** 주로 쓰이는 지역 한 줄 */
  region: string;
  /** 이 언어가 쓰이는 국가 — country-data 의 name 과 일치해야 링크됩니다 */
  countries: string[];
  lead: string;
  interpretation: { lead: string; items: SeoItem[] };
  translation: { lead: string; items: SeoItem[] };
  notes: { label: string; body: string }[];
  /** 이 언어만의 질문 2개 */
  faqs: { q: string; a: string }[];
  /** 가용 인력에 대한 정직한 안내 */
  availability: string;
};

/* ── 국가 ──────────────────────────────────────────── */
export type CountryData = {
  slug: string;
  name: string;
  /** 한국 기준 시차 */
  timeDiff: string;
  /** 현지 언어 상황 한 줄 */
  language: string;
  /** language-data 의 slug */
  languages: string[];
  lead: string;
  scenes: SeoItem[];
  notes: { label: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const languages: LanguageData[] = languageData;
export const countries: CountryData[] = countryData;

export const languageBySlug = Object.fromEntries(languages.map((l) => [l.slug, l]));
export const countryBySlug = Object.fromEntries(countries.map((c) => [c.slug, c]));
const countryByName = Object.fromEntries(countries.map((c) => [c.name, c]));

/** 이 나라에 상세 페이지가 있는 도시들 */
export function citiesOf(countryName: string) {
  return cityPages.filter((city) => city.country === countryName);
}

/* ── 조립: 언어 페이지 ──────────────────────────────── */
export function buildLanguagePage(lang: LanguageData): SeoPageData {
  const n = lang.name;
  const countryLinks = lang.countries
    .map((name) => countryByName[name])
    .filter(Boolean)
    .map((c) => ({ label: `${c.name} 통역`, href: `/country/${c.slug}`, note: c.language }));

  return {
    path: `/language/${lang.slug}`,
    breadcrumb: [
      { label: '홈', href: '/' },
      { label: '비즈니스 통역', href: '/interpretation' },
      { label: `${n} 통역` },
    ],
    eyebrow: '언어별 통역 · 번역',
    h1: `${n} 통역과 ${n} 번역`,
    lead: lang.lead,
    facts: [
      { label: '주로 쓰이는 곳', value: lang.region },
      { label: '지원 범위', value: `${n} 통역 · ${n} 번역 · 문서 검수` },
    ],
    sections: [
      {
        eyebrow: '통역',
        heading: `${n} 통역`,
        lead: lang.interpretation.lead,
        items: lang.interpretation.items,
      },
      {
        eyebrow: '번역',
        heading: `${n} 번역`,
        lead: lang.translation.lead,
        items: lang.translation.items,
      },
    ],
    notesHeading: `${n}로 진행하실 때`,
    notes: lang.notes,
    linkGroups: countryLinks.length
      ? [{ heading: `${n}가 쓰이는 나라`, links: countryLinks }]
      : [],
    faqs: [
      ...lang.faqs,
      {
        q: `${n} 통역은 언제 요청해야 하나요?`,
        a: `${lang.availability} 일정과 분야를 알려주시면 가능 여부를 먼저 확인해 안내드립니다.`,
      },
    ],
    ctaTitle: `${n} 통역·번역 일정이 있으신가요?`,
    ctaLabel: `${n} 통역 문의하기`,
    seoTitle: `${n} 통역 · ${n} 번역 | 비즈니스 ${n} 통역사 섭외`,
    seoDescription: `${n} 통역과 ${n} 번역. ${lang.lead}`.slice(0, 150),
    keywords: [
      `${n} 통역`,
      `${n} 번역`,
      `${n} 통역사`,
      `${n} 통역사 섭외`,
      `${n} 계약서 번역`,
      `비즈니스 ${n} 통역`,
      '체르토 에이전시',
    ],
    serviceName: `${n} 통역 · 번역`,
  };
}

/* ── 조립: 국가 페이지 ──────────────────────────────── */
export function buildCountryPage(country: CountryData): SeoPageData {
  const n = country.name;
  const cities = citiesOf(n);
  const langLinks = country.languages
    .map((slug) => languageBySlug[slug])
    .filter(Boolean)
    .map((l) => ({ label: `${l.name} 통역 · 번역`, href: `/language/${l.slug}` }));

  return {
    path: `/country/${country.slug}`,
    breadcrumb: [
      { label: '홈', href: '/' },
      { label: '해외 지원', href: '/global' },
      { label: `${n} 통역` },
    ],
    eyebrow: '국가별 통역',
    h1: `${n} 통역과 ${n} 현지 통역`,
    lead: country.lead,
    facts: [
      { label: '시차', value: country.timeDiff },
      { label: '언어', value: country.language },
    ],
    sections: [
      {
        eyebrow: '현지 통역',
        heading: `${n} 현지 통역이 필요한 자리`,
        items: country.scenes,
      },
    ],
    notesHeading: `${n} 일정을 잡기 전에`,
    notes: country.notes,
    linkGroups: [
      ...(cities.length
        ? [
            {
              heading: `${n} 도시별 현지 통역`,
              links: cities.map((c) => ({
                label: `${c.city} 현지 통역`,
                href: `/global/${c.slug}`,
              })),
            },
          ]
        : []),
      ...(langLinks.length ? [{ heading: `${n}에서 필요한 언어`, links: langLinks }] : []),
    ],
    faqs: country.faqs,
    ctaTitle: `${n} 일정이 정해지셨나요?`,
    ctaLabel: `${n} 통역 문의하기`,
    seoTitle: `${n} 통역 · ${n} 현지 통역 | ${n} 출장 통역사 섭외`,
    seoDescription: `${n} 통역과 ${n} 현지 통역사 매칭. ${country.lead}`.slice(0, 150),
    keywords: [
      `${n} 통역`,
      `${n} 현지 통역`,
      `${n} 통역사`,
      `${n} 출장 통역`,
      `${n} 통역사 섭외`,
      ...cities.map((c) => `${c.city} 현지 통역`),
      '체르토 에이전시',
    ],
    serviceName: `${n} 현지 통역`,
  };
}
