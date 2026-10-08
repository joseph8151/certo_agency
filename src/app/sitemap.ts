import type { MetadataRoute } from 'next';
import { cityPages } from '@/data/city-pages';
import { allServicePages } from '@/data/services';
import { site } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...allServicePages.map((page) => ({
      url: `${site.url}/${page.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // 도시별 현지 통역 페이지
    ...cityPages.map((page) => ({
      url: `${site.url}/global/${page.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
