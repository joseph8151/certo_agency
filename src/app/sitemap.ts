import type { MetadataRoute } from 'next';
import { cityPages } from '@/data/city-pages';
import { countries, languages, regions, topics } from '@/data/seo-pages';
import { allServicePages } from '@/data/services';
import { site } from '@/data/site';

/**
 * 사이트맵
 * ─────────────────────────────────────────────
 * lastModified 는 일부러 넣지 않습니다. 빌드할 때마다 "지금" 으로 찍으면
 * 모든 페이지가 항상 방금 수정된 것처럼 보여 검색엔진이 이 값을 무시하게 됩니다.
 * 실제 수정일을 관리할 수 있게 되면 그때 페이지별로 넣으세요.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: 'monthly', priority: 1 },
    ...allServicePages.map((page) => ({
      url: `${site.url}/${page.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // 언어별 · 국가별 · 도시별 검색 랜딩 페이지
    ...languages.map((l) => ({
      url: `${site.url}/language/${l.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...countries.map((c) => ({
      url: `${site.url}/country/${c.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...regions.map((r) => ({
      url: `${site.url}/korea/${r.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...topics.map((t) => ({
      url: `${site.url}/topic/${t.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...cityPages.map((page) => ({
      url: `${site.url}/global/${page.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
