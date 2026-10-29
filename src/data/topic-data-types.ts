/**
 * 주제별 페이지 공용 타입
 * ─────────────────────────────────────────────
 * "동시통역", "반도체 통역", "계약서 번역", "통역사 섭외 비용" 같은 검색어를 받는 주제 페이지입니다.
 * 비슷한 검색어(예: 줌 통역 · Zoom 통역 · Teams 통역)는 한 페이지로 묶고
 * alsoSearched 에 적어 본문에 자연스럽게 노출합니다. 검색어마다 페이지를 따로 만들지 않습니다.
 */
import type { SeoItem } from './seo-pages';

export type TopicGroup = 'mode' | 'situation' | 'field' | 'document' | 'cost';

export type TopicData = {
  slug: string;
  group: TopicGroup;
  /** 페이지의 중심 검색어 — h1 과 title 에 쓰입니다 */
  name: string;
  /** h1 전체. 생략하면 name */
  h1?: string;
  /** 같은 의미로 검색되는 표현들 */
  alsoSearched: string[];
  lead: string;
  /** 이 주제가 쓰이는 자리 · 구성 요소 */
  itemsHeading?: string;
  items: SeoItem[];
  notes: { label: string; body: string }[];
  faqs: { q: string; a: string }[];
  /** 같이 보면 좋은 주제 slug */
  related: string[];
  /** 통역이면 interpretation, 번역·문서면 translation, 비용이면 interpretation */
  parent: 'interpretation' | 'translation';
};
