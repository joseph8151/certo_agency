/**
 * 영문 페이지 → SeoLanding 이 렌더링하는 형태로 조립합니다.
 * 한국어 페이지와 같은 템플릿을 쓰되, ui 로 모든 고정 문구를 영어로 바꿉니다.
 */
import type { SeoPageData, SeoUi } from '../seo-pages';
import { enPageByKey, enPath, enSectionLabels } from './pages';
import { enSite } from './site';
import type { EnPage } from './types';

export const enUi: SeoUi = {
  lang: 'en',
  breadcrumbAria: 'Breadcrumb',
  notesEyebrow: 'Good to know',
  regionsEyebrow: (n) => `${n} areas`,
  chip: (name) => name,
  faqEyebrow: 'FAQ',
  faqTitle: () => 'Frequently asked questions',
  ctaBody:
    'Tell us your dates, city, languages and what the meeting is about. We confirm interpreter availability and reply with a quote. You do not need to have everything fixed.',
  ctaPrimary: 'Request a quote',
  ctaSecondary: { label: 'Back to home', href: '/en' },
  contactHref: '/en/contact',
  orgId: `${enSite.url}#organization`,
};

export function buildEnPage(page: EnPage): SeoPageData {
  const related = page.related.map((k) => enPageByKey[k]).filter(Boolean);

  return {
    path: enPath(page),
    breadcrumb: [
      { label: 'Home', href: '/en' },
      {
        label: enSectionLabels[page.section],
        href: `/en#${page.section === 'interpreter' ? 'cities' : page.section}`,
      },
      { label: page.name },
    ],
    eyebrow: enSectionLabels[page.section],
    h1: page.h1,
    lead: page.lead,
    facts: page.facts,
    sections: [
      {
        eyebrow: page.itemsEyebrow ?? 'Overview',
        heading: page.itemsHeading,
        items: page.items,
      },
    ],
    notesHeading: page.notesHeading,
    notes: page.notes,
    linkGroups: related.length
      ? [
          {
            heading: 'Related',
            links: related.map((r) => ({ label: r.name, href: enPath(r) })),
          },
          {
            heading: 'Get started',
            links: [
              { label: 'Request a quote', href: '/en/contact' },
              { label: 'Pricing', href: '/en#pricing' },
            ],
          },
        ]
      : [],
    faqs: page.faqs,
    ctaTitle: 'Planning a visit to Korea?',
    ctaLabel: 'Request a quote',
    ui: enUi,
    seoTitle: page.seoTitle,
    seoDescription: page.seoDescription,
    keywords: page.keywords,
    serviceName: page.name,
  };
}
