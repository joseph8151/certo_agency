/**
 * 게시글 속 나라 · 도시 · 지역 · 언어 이름을 찾아 사이트의 안내 페이지로 연결합니다.
 * 직원이 링크를 직접 걸지 않아도 글마다 관련 페이지로 이어져 검색엔진이 사이트를 따라 내려갈 수 있습니다.
 */
import { cityPages } from '@/data/city-pages';
import { countries, languages, regions } from '@/data/seo-pages';

export type RelatedLink = { label: string; href: string };

type Entry = { needle: string; link: RelatedLink; pattern?: RegExp };

const entries: Entry[] = [
  ...cityPages.map((c) => ({
    needle: c.city,
    link: { label: `${c.city} 현지 통역`, href: `/global/${c.slug}` },
  })),
  ...countries.map((c) => ({
    needle: c.name,
    link: { label: `${c.name} 통역 · 현지 통역`, href: `/country/${c.slug}` },
  })),
  ...languages.map((l) => ({
    needle: l.name,
    link: { label: `${l.name} 통역 · 번역`, href: `/language/${l.slug}` },
  })),
  ...regions.flatMap((r) => [
    {
      needle: r.name,
      // "경기장" 처럼 다른 낱말과 겹치지 않도록 시 · 도 표기나 낱말 끝에서만 인정합니다.
      pattern: new RegExp(
        `${r.name}(?![가-힣])|${r.name}(?:특별자치시|특별자치도|특별시|광역시|시청|시|도)`,
      ),
      link: { label: `${r.name} 통역`, href: `/korea/${r.slug}` },
    },
    ...r.places
      .flatMap((g) => g.names)
      .filter((n) => n.length >= 3)
      .map((n) => ({ needle: n, link: { label: `${r.name} 통역`, href: `/korea/${r.slug}` } })),
  ]),
].sort((a, b) => b.needle.length - a.needle.length); // 긴 이름부터: "인도네시아" 가 "인도" 로 잘못 잡히지 않게

export function relatedLinks(text: string, limit = 4): RelatedLink[] {
  let rest = text;
  const found: RelatedLink[] = [];
  for (const e of entries) {
    const hit = e.pattern
      ? e.pattern.exec(rest)
      : rest.includes(e.needle)
        ? { 0: e.needle, index: rest.indexOf(e.needle) }
        : null;
    if (!hit) continue;
    rest = rest.slice(0, hit.index) + ' ' + rest.slice(hit.index + hit[0].length);
    if (!found.some((f) => f.href === e.link.href)) found.push(e.link);
    if (found.length >= limit) break;
  }
  return found;
}
