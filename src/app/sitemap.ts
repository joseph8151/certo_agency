import type { MetadataRoute } from 'next';
import { servicePageList } from '@/data/services';
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
    ...servicePageList.map((page) => ({
      url: `${site.url}/${page.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
