import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Cta from '@/components/ui/Button';
import { site } from '@/data/site';
import { getNeighbors, getPost } from '@/lib/board/db';
import { relatedLinks } from '@/lib/board/related';

export const dynamic = 'force-dynamic';

type Props = { params: Promise<{ id: string }> };

const excerpt = (text: string, max = 140) => {
  const t = text.replace(/\s+/g, ' ').trim();
  return t.length > max ? `${t.slice(0, max - 1)}…` : t;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(Number((await params).id));
  if (!post) return { title: '게시글을 찾을 수 없습니다', robots: { index: false } };
  return {
    title: post.title,
    description: excerpt(post.body),
    alternates: { canonical: `/board/${post.id}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: excerpt(post.body),
      url: `/board/${post.id}`,
      publishedTime: post.published_at,
    },
  };
}

export default async function BoardPost({ params }: Props) {
  const post = await getPost(Number((await params).id));
  if (!post) notFound();

  const [{ newer, older }] = await Promise.all([getNeighbors(post)]);
  const related = relatedLinks(`${post.title} ${post.body}`);

  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: excerpt(post.body),
    datePublished: post.published_at,
    dateModified: post.updated_at.slice(0, 10),
    inLanguage: 'ko',
    mainEntityOfPage: `${site.url}/board/${post.id}`,
    author: { '@id': `${site.url}#organization` },
    publisher: { '@id': `${site.url}#organization` },
  };
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '홈', item: site.url },
      { '@type': 'ListItem', position: 2, name: '통역 실적', item: `${site.url}/board` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${site.url}/board/${post.id}` },
    ],
  };

  return (
    <main id="main">
      {[article, breadcrumb].map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      <article className="hero-glow bg-white pt-[calc(var(--header-height)+3rem)] lg:pt-[calc(var(--header-height)+5rem)]">
        <div className="shell pb-section">
          <nav aria-label="현재 위치" className="text-[0.75rem] tracking-wide text-navy/65">
            <Link href="/" className="hover:text-brand">
              홈
            </Link>
            <span className="mx-2 text-navy/40">/</span>
            <Link href="/board" className="hover:text-brand">
              통역 실적
            </Link>
          </nav>

          <div className="mt-10 max-w-3xl">
            <p className="eyebrow">{post.category}</p>
            <h1 className="mt-6 text-[1.75rem] font-medium leading-[1.4] tracking-tight text-navy lg:text-[2.25rem]">
              {post.title}
            </h1>
            <p className="mt-5 text-[0.875rem] text-navy/55">
              <time dateTime={post.published_at}>{post.published_at}</time>
            </p>

            <div className="mt-10 border-t border-line pt-10 text-[1rem] leading-[2] text-navy/85 whitespace-pre-line">
              {post.body}
            </div>

            {related.length > 0 ? (
              <div className="mt-14 border-t border-line pt-8">
                <h2 className="text-[0.75rem] font-semibold tracking-[0.04em] text-brand">
                  관련 안내
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {related.map((r) => (
                    <li key={r.href}>
                      <Link
                        href={r.href}
                        className="inline-block border border-brand/40 px-4 py-2 text-[0.875rem] text-brand transition-colors duration-300 hover:bg-brand hover:text-white"
                      >
                        {r.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <nav
              aria-label="이전 · 다음 글"
              className="mt-14 divide-y divide-line border-y border-line text-[0.9375rem]"
            >
              {newer ? (
                <Link href={`/board/${newer.id}`} className="row-link py-4">
                  <span className="min-w-0">
                    <span className="mr-4 text-navy/50">다음 글</span>
                    {newer.title}
                  </span>
                </Link>
              ) : null}
              {older ? (
                <Link href={`/board/${older.id}`} className="row-link py-4">
                  <span className="min-w-0">
                    <span className="mr-4 text-navy/50">이전 글</span>
                    {older.title}
                  </span>
                </Link>
              ) : null}
            </nav>

            <div className="mt-10 flex flex-wrap gap-3">
              <Cta href="/board" variant="outline" track="board-post-list">
                목록으로
              </Cta>
              <Cta href="/#contact" track="board-post-contact">
                통역 문의하기
              </Cta>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
