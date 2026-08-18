import type { Metadata } from 'next';
import BusinessPage from '@/components/business/BusinessPage';
import { businessPage } from '@/data/business';

export const metadata: Metadata = {
  title: businessPage.seo.title,
  description: businessPage.seo.description,
  keywords: [...businessPage.seo.keywords],
  alternates: { canonical: `/${businessPage.slug}` },
  openGraph: {
    type: 'website',
    title: `${businessPage.seo.title} | CERTO AGENCY`,
    description: businessPage.seo.description,
    url: `/${businessPage.slug}`,
  },
};

export default function Page() {
  return (
    <main id="main">
      <BusinessPage />
    </main>
  );
}
