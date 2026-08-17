import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePage';
import { servicePages } from '@/data/services';

const page = servicePages.business;

export const metadata: Metadata = {
  title: page.seo.title,
  description: page.seo.description,
  keywords: page.seo.keywords,
  alternates: { canonical: `/${page.slug}` },
  openGraph: {
    type: 'website',
    title: `${page.seo.title} | CERTO AGENCY`,
    description: page.seo.description,
    url: `/${page.slug}`,
  },
};

export default function Page() {
  return (
    <main id="main">
      <ServicePageTemplate page={page} />
    </main>
  );
}
