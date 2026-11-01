import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CityPage from '@/components/CityPage';
import { cityPageBySlug, cityPages } from '@/data/city-pages';

type Params = { params: Promise<{ city: string }> };

/** 도시 목록이 고정되어 있으므로 전부 정적으로 생성합니다. */
export function generateStaticParams() {
  return cityPages.map((page) => ({ city: page.slug }));
}

/** 목록에 없는 도시는 404 — 임의의 주소로 빈 페이지가 생기지 않게 합니다. */
export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city } = await params;
  const page = cityPageBySlug[city];
  if (!page) return {};

  const title = `${page.city} 현지 통역 | ${page.country} 출장 통역사 섭외`;
  const description = `${page.city} 현지 통역사 매칭. ${page.lead}`.slice(0, 155);

  return {
    title,
    description,
    keywords: [
      `${page.city} 현지 통역`,
      `${page.city} 통역`,
      `${page.city} 통역사`,
      `${page.city} 출장 통역`,
      `${page.country} 통역`,
      '현지 통역사 섭외',
      '해외 출장 통역',
      '체르토 에이전시',
    ],
    alternates: { canonical: `/global/${page.slug}` },
    openGraph: {
      type: 'website',
      title: `${title} | CERTO AGENCY`,
      description,
      url: `/global/${page.slug}`,
    },
  };
}

export default async function Page({ params }: Params) {
  const { city } = await params;
  const page = cityPageBySlug[city];
  if (!page) notFound();

  return (
    <main id="main">
      <CityPage page={page} />
    </main>
  );
}
