/**
 * AI 검색 · 답변 엔진용 사이트 안내 (llms.txt)
 * ─────────────────────────────────────────────
 * ChatGPT · Perplexity · Claude · Gemini 같은 생성형 검색은 페이지를 통째로 읽기보다
 * "이 회사가 무엇을 하고, 무엇을 근거로 말할 수 있는가" 를 짧게 파악합니다.
 * 이 파일은 그 요약본을 데이터 파일에서 자동으로 만들어, 사이트 내용과 어긋나지 않게 합니다.
 *
 *   /llms.txt        핵심 요약 + 주요 페이지 목록
 *   /llms-full.txt   모든 안내 페이지의 첫 문단까지 포함한 전체본
 *
 * llms.txt 는 표준으로 확정된 규격이 아니고 모든 엔진이 읽는 것도 아닙니다.
 * 효과를 보장하는 장치가 아니라, 읽는 쪽이 있을 때 정확한 정보를 건네기 위한 안내문입니다.
 */
import { cityPages } from '@/data/city-pages';
import { pricingNotes, pricingPlans, retainerPlans } from '@/data/pricing';
import {
  buildCountryPage,
  buildKoreaPage,
  buildLanguagePage,
  buildTopicPage,
  countries,
  languages,
  regions,
  topics,
  topicGroupLabels,
} from '@/data/seo-pages';
import { allServicePages } from '@/data/services';
import { businessInfo, contactInfo, site } from '@/data/site';
import type { TopicGroup } from '@/data/topic-data-types';

const abs = (path: string) => `${site.url}${path}`;
const link = (title: string, path: string, note?: string) =>
  `- [${title}](${abs(path)})${note ? `: ${note}` : ''}`;
const oneLine = (text: string, max = 140) => {
  const t = text.replace(/\s+/g, ' ').trim();
  return t.length > max ? `${t.slice(0, max - 1)}…` : t;
};

/** 회사 개요 — 두 파일이 같은 문장을 씁니다. */
function overview(): string[] {
  const biz = Object.fromEntries(businessInfo.map((b) => [b.label, b.value]));
  return [
    `# ${site.name} (${site.nameKo})`,
    '',
    `> ${site.nameKo}는 비즈니스 통역업체이자 통번역업체입니다. 통역사 섭외와 파견, 해외 통역사 섭외, 국제회의·전시회·기업 미팅 통역, 계약서·기술문서 번역을 한 곳에서 지원합니다. 통역사는 일정과 분야를 먼저 확인한 뒤 해당 업종 경험이 있는 사람으로 배정합니다.`,
    '',
    '## 회사 정보',
    `- 브랜드: ${site.name} (${site.nameKo}) / 등록 상호: ${biz['상호'] ?? ''}`,
    `- 소재지: ${biz['주소'] ?? ''}`,
    `- 문의: ${contactInfo.email}${contactInfo.phone ? ` · ${contactInfo.phone} (${contactInfo.phoneHours})` : ''}`,
    `- 웹사이트: ${site.url}`,
    `- 서비스 언어: 한국어 (한국어 ↔ ${languages.length}개 언어)`,
    '',
    '## 서비스',
    ...allServicePages.map((p) => link(p.serviceName, `/${p.slug}`)),
    '',
    '## 요금 안내 (공개 기준)',
    ...pricingPlans.map((p) => `- ${p.name}: ${p.price}${p.unit} — ${oneLine(p.description, 100)}`),
    ...retainerPlans.map((p) => `- 기업 전담 통역 ${p.name}: ${p.price}${p.unit} 시작 — ${p.fit}`),
    ...pricingNotes.map((n) => `- ${n}`),
    '',
    '## 대응 범위',
    `- 해외 ${countries.length}개국, 도시별 안내 ${cityPages.length}곳, ${languages.length}개 언어, 국내 ${regions.length}개 광역 지역`,
    '- 서울·수도권은 현장 동행 통역이 기본이며, 그 밖의 지역과 해외는 일정·언어·분야에 따라 배정 가능 여부를 확인해 안내합니다.',
    '- 정세나 제재로 방문이 제한되는 지역(예: 러시아, 이란, 이라크, 우크라이나, 미얀마)은 안전과 규제 확인을 먼저 안내하며, 화상 통역으로 대체하는 방안을 함께 검토합니다.',
    '',
    '## 알아둘 점',
    '- 통역과 번역은 말과 문서의 내용을 옮기는 일이며 법률·의료·규제 자문이 아닙니다.',
    '- 법정 통역과 병원 진료 통역은 별도 규정과 자격 확인이 필요해 사전 상담 후 가능 여부를 안내합니다.',
    '- 비밀 유지가 필요한 자료는 NDA를 체결한 뒤 받습니다.',
  ];
}

const groupOrder: TopicGroup[] = ['mode', 'situation', 'field', 'document', 'cost', 'guide'];

/** /llms.txt — 요약과 주요 페이지 */
export function buildLlmsTxt(): string {
  const lines = overview();

  for (const group of groupOrder) {
    const list = topics.filter((t) => t.group === group);
    if (!list.length) continue;
    lines.push('', `## ${topicGroupLabels[group]}`);
    list.forEach((t) => lines.push(link(t.name, `/topic/${t.slug}`, oneLine(t.lead, 90))));
  }

  lines.push('', '## Optional');
  lines.push('', '### 국내 지역별 통역');
  regions.forEach((r) => lines.push(link(`${r.name} 통역`, `/korea/${r.slug}`)));
  lines.push('', '### 언어별 통역 · 번역');
  languages.forEach((l) => lines.push(link(`${l.name} 통역 · 번역`, `/language/${l.slug}`)));
  lines.push('', '### 국가별 현지 통역');
  countries.forEach((c) => lines.push(link(`${c.name} 통역`, `/country/${c.slug}`)));
  lines.push('', '### 도시별 현지 통역');
  cityPages.forEach((c) => lines.push(link(`${c.city} 현지 통역`, `/global/${c.slug}`)));

  return `${lines.join('\n')}\n`;
}

/** /llms-full.txt — 모든 안내 페이지의 첫 문단까지 */
export function buildLlmsFullTxt(): string {
  const lines = overview();
  const block = (title: string, path: string, lead: string) => {
    lines.push('', `### ${title}`, `URL: ${abs(path)}`, lead.replace(/\s+/g, ' ').trim());
  };

  lines.push('', '## 주제별 안내');
  topics.forEach((t) => {
    const page = buildTopicPage(t);
    block(`${t.name} (${topicGroupLabels[t.group]})`, page.path, page.lead);
    t.faqs.forEach((f) => lines.push(`- Q. ${f.q} A. ${f.a}`));
  });

  lines.push('', '## 국내 지역별 통역');
  regions.forEach((r) => {
    const page = buildKoreaPage(r);
    block(`${r.name} 통역 · 통역사 · 통번역`, page.path, page.lead);
  });

  lines.push('', '## 언어별 통역 · 번역');
  languages.forEach((l) => {
    const page = buildLanguagePage(l);
    block(`${l.name} 통역 · 번역`, page.path, page.lead);
  });

  lines.push('', '## 국가별 현지 통역');
  countries.forEach((c) => {
    const page = buildCountryPage(c);
    block(`${c.name} 통역`, page.path, page.lead);
  });

  lines.push('', '## 도시별 현지 통역');
  cityPages.forEach((c) =>
    block(`${c.city} 현지 통역 (${c.country})`, `/global/${c.slug}`, c.lead),
  );

  return `${lines.join('\n')}\n`;
}
