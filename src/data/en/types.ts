/** 영문 안내 페이지 공용 타입 — 조립은 src/data/en/build.ts */
export type EnSection = 'services' | 'interpreter' | 'language' | 'guides';

export type EnPage = {
  section: EnSection;
  slug: string;
  /** breadcrumb 과 링크 라벨 */
  name: string;
  h1: string;
  lead: string;
  facts: { label: string; value: string }[];
  itemsHeading: string;
  itemsEyebrow?: string;
  items: { title: string; body: string }[];
  notesHeading: string;
  notes: { label: string; body: string }[];
  faqs: { q: string; a: string }[];
  /** 같이 보면 좋은 페이지 — "section/slug" */
  related: string[];
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
};
