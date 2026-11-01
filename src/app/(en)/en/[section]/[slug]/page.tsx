import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SeoLanding from '@/components/SeoLanding';
import { buildEnPage } from '@/data/en/build';
import { enPages } from '@/data/en/pages';
import type { EnSection } from '@/data/en/types';

type Params = { params: Promise<{ section: string; slug: string }> };

export function generateStaticParams() {
  return enPages.map((p) => ({ section: p.section, slug: p.slug }));
}
export const dynamicParams = false;

const find = (section: string, slug: string) =>
  enPages.find((p) => p.section === (section as EnSection) && p.slug === slug);

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { section, slug } = await params;
  const data = find(section, slug);
  if (!data) return {};
  const page = buildEnPage(data);

  // 검색 결과에서 잘리지 않도록 60자를 넘으면 앞부분 + 브랜드로 줄입니다.
  const title =
    page.seoTitle.length <= 60
      ? { absolute: page.seoTitle }
      : { absolute: `${page.seoTitle.split(' | ')[0]} | CERTO AGENCY` };

  return {
    title,
    description: page.seoDescription,
    keywords: page.keywords,
    alternates: { canonical: page.path, languages: { en: page.path } },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      title: page.seoTitle,
      description: page.seoDescription,
      url: page.path,
    },
  };
}

export default async function Page({ params }: Params) {
  const { section, slug } = await params;
  const data = find(section, slug);
  if (!data) notFound();

  return (
    <main id="main">
      <SeoLanding page={buildEnPage(data)} />
    </main>
  );
}
