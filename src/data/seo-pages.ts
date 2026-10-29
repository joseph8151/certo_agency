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
import { countryCities, type CityGroup } from './country-cities';
import { koreaRegions, type KoreaRegion } from './korea-regions';

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
  /** 국가 페이지의 주요 도시 목록 — 도시별 페이지를 만들지 않고 한 장에서 안내합니다 */
  cityBlock?: { heading: string; intro: string; groups: CityGroup[]; linked: Record<string, string> };
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
  /** 같은 언어를 부르는 다른 이름 — 타갈로그어, 터키어, 크메르어, 버마어 */
  aliases?: string[];
  /** aliases 가 있을 때 FAQ 맨 앞에 넣는 질문 */
  aliasFaq?: { q: string; a: string };
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
export const regions: KoreaRegion[] = koreaRegions;
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
      { label: '지원 범위', value: `${n} 통역 · ${n} 통역사 섭외 · ${n} 번역 · 문서 검수` },
      ...(lang.aliases?.length
        ? [
            {
              label: '함께 찾으시는 표현',
              value: lang.aliases
                .map((a) => (a.includes(' ') ? a : `${a} 통역 · ${a} 번역`))
                .join(' · '),
            },
          ]
        : []),
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
      ...(lang.aliasFaq ? [lang.aliasFaq] : []),
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
      ...(lang.aliases ?? []).map((a) => (a.includes(' ') ? a : `${a} 통역`)),
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
  const groups = (countryCities[n] ?? []).filter((g) => g.cities.length);
  const allCities = groups.flatMap((g) => g.cities);
  const [c1, c2] = allCities;
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
    cityBlock: allCities.length
      ? {
          heading: `${n} 도시별 통역 · 현지 통역사`,
          intro: c2
            ? `${n}에서는 ${c1} 통역, ${c2} 현지 통역사처럼 도시를 지정해 문의하시는 경우가 많습니다. 아래 도시는 일정과 분야를 알려주시면 현지 통역사 섭외 가능 여부를 확인해 안내드립니다. 목록에 없는 도시도 문의해 주세요.`
            : `${n}에서는 ${c1} 통역과 ${c1} 현지 통역사 섭외 문의를 받습니다. 일정과 분야를 알려주시면 가능 여부를 확인해 안내드립니다.`,
          groups,
          linked: Object.fromEntries(cities.map((c) => [c.city, `/global/${c.slug}`])),
        }
      : undefined,
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
      ...allCities.slice(0, 8).map((c) => `${c} 통역`),
      '체르토 에이전시',
    ],
    serviceName: `${n} 현지 통역`,
  };
}

/* ── 조립: 국내 지역 페이지 ──────────────────────────── */
const inPersonRegions = ['seoul', 'gyeonggi', 'incheon'];

export function buildKoreaPage(region: KoreaRegion): SeoPageData {
  const n = region.name;
  const groups = region.places.map((g) => ({ label: g.group, cities: g.names }));
  const all = groups.flatMap((g) => g.cities);
  const [p1, p2] = all.length > 2 ? [all[1], all[2]] : [all[0], all[0]];
  const inPerson = inPersonRegions.includes(region.slug);

  return {
    path: `/korea/${region.slug}`,
    breadcrumb: [
      { label: '홈', href: '/' },
      { label: '비즈니스 통역', href: '/interpretation' },
      { label: `${n} 통역` },
    ],
    eyebrow: '국내 지역별 통역',
    h1: `${n} 통역과 ${n} 통역사`,
    lead: region.lead,
    facts: [
      { label: '지역', value: region.formal },
      {
        label: '진행 방식',
        value: inPerson
          ? '현장 동행 통역 · 문서 번역 · 회의록 정리'
          : '지역과 일정에 따라 가능 여부와 이동 조건을 확인해 안내',
      },
    ],
    sections: [
      {
        eyebrow: '지역별 통역 수요',
        heading: `${n} 통역이 필요한 자리`,
        items: region.areas.map((a) => ({ title: a.title, body: a.body })),
      },
    ],
    notesHeading: `${n} 일정을 잡기 전에`,
    notes: region.notes,
    cityBlock: {
      heading: `${n} 지역별 통역 · 통번역`,
      intro: `${n}에서는 ${p1} 통역사, ${p2} 통번역처럼 지역을 지정해 문의하시는 경우가 많습니다. 아래 지역은 언어와 분야, 날짜를 알려주시면 통역사 섭외 가능 여부를 확인해 안내드립니다. 목록에 없는 지역도 문의해 주세요.`,
      groups,
      linked: {},
    },
    linkGroups: [
      {
        heading: '함께 보실 서비스',
        links: [
          { label: '비즈니스 통역', href: '/interpretation' },
          { label: '비즈니스 문서 지원', href: '/translation' },
          { label: '해외 출장 · 비즈니스 지원', href: '/global' },
        ],
      },
      {
        heading: '다른 지역',
        links: koreaRegions
          .filter((r) => r.slug !== region.slug)
          .map((r) => ({ label: `${r.name} 통역`, href: `/korea/${r.slug}` })),
      },
    ],
    faqs: region.faqs,
    ctaTitle: `${n} 일정이 정해지셨나요?`,
    ctaLabel: `${n} 통역 문의하기`,
    seoTitle: `${n} 통역 · ${n} 통역사 · 통번역 | ${n} 통역사 섭외`,
    seoDescription: `${n} 통역과 ${n} 통역사 섭외, 통번역. ${region.lead}`.slice(0, 150),
    keywords: [
      `${n} 통역`,
      `${n} 통역사`,
      `${n} 통번역`,
      `${n} 통역사 섭외`,
      ...all.slice(0, 6).map((c) => `${c} 통역`),
      '체르토 에이전시',
    ],
    serviceName: `${n} 통역 · 통번역`,
  };
}
