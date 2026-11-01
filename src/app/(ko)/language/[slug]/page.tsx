import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SeoLanding from '@/components/SeoLanding';
import { buildLanguagePage, languageBySlug, languages } from '@/data/seo-pages';

type Params = { params: Promise<{ slug: string }> };

/** 목록이 고정되어 있으므로 전부 정적으로 생성하고, 목록에 없는 주소는 404 입니다. */
export function generateStaticParams() {
  return languages.map((item) => ({ slug: item.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const data = languageBySlug[slug];
  if (!data) return {};
  const page = buildLanguagePage(data);

  return {
    title: page.seoTitle,
    description: page.seoDescription,
    keywords: page.keywords,
    alternates: { canonical: page.path },
    openGraph: {
      type: 'website',
      title: `${page.seoTitle} | CERTO AGENCY`,
      description: page.seoDescription,
      url: page.path,
    },
  };
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const data = languageBySlug[slug];
  if (!data) notFound();

  return (
    <main id="main">
      <SeoLanding page={buildLanguagePage(data)} />
    </main>
  );
}
