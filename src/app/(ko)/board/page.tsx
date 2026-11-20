import type { Metadata } from 'next';
import Link from 'next/link';
import Cta from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import { getDb, listPosts, PAGE_SIZE } from '@/lib/board/db';
import { site } from '@/data/site';

export const dynamic = 'force-dynamic';

type Props = { searchParams: Promise<{ page?: string }> };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const page = Math.max(Number((await searchParams).page) || 1, 1);
  return {
    title:
      page > 1
        ? `통역 실적 ${page}페이지 | 해외 · 국내 통역 업무 기록`
        : '통역 실적 | 해외 · 국내 통역 업무 기록',
    description:
      '체르토 에이전시가 진행한 해외 현지 통역, 국내 통역, 번역 업무 기록입니다. 국가와 도시, 언어, 업무 내용을 확인하세요.',
    alternates: { canonical: page > 1 ? `/board?page=${page}` : '/board' },
  };
}

export default async function BoardPage({ searchParams }: Props) {
  const page = Math.max(Number((await searchParams).page) || 1, 1);
  const { posts, total } = await listPosts(page);
  const pages = Math.max(Math.ceil(total / PAGE_SIZE), 1);
  const dbReady = Boolean(getDb());

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: '통역 실적',
    url: `${site.url}/board`,
    isPartOf: { '@id': `${site.url}#organization` },
  };

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="hero-glow bg-white pt-[calc(var(--header-height)+3rem)] lg:pt-[calc(var(--header-height)+5rem)]">
        <div className="shell pb-section">
          <Reveal>
            <nav aria-label="현재 위치" className="text-[0.75rem] tracking-wide text-navy/65">
              <Link href="/" className="hover:text-brand">
                홈
              </Link>
              <span className="mx-2 text-navy/40">/</span>
              <span className="text-navy" aria-current="page">
                통역 실적
              </span>
            </nav>
            <p className="eyebrow mt-8">통역 실적</p>
            <h1 className="mt-6 text-display font-medium tracking-tight text-navy">
              진행한 통역 업무 기록
            </h1>
            <p className="mt-9 max-w-2xl text-[1.0625rem] leading-[1.9] text-pretty text-navy/70">
              해외 현지 통역과 국내 통역, 번역 업무를 마칠 때마다 남기는 기록입니다. 국가, 도시,
              언어, 업무 내용을 함께 적습니다.
            </p>
          </Reveal>

          <div className="mt-14 border-t border-navy/80">
            {!dbReady ? (
              <p className="py-16 text-center text-[0.9375rem] text-navy/60">
                게시판을 준비 중입니다.
              </p>
            ) : posts.length === 0 ? (
              <p className="py-16 text-center text-[0.9375rem] text-navy/60">
                아직 등록된 실적이 없습니다.
              </p>
            ) : (
              <ul>
                {posts.map((p, i) => (
                  <li key={p.id} className="border-b border-line">
                    <Link
                      href={`/board/${p.id}`}
                      className="row-link items-center gap-4 py-5 sm:gap-8"
                    >
                      <span className="hidden w-12 shrink-0 text-center text-[0.875rem] tabular-nums text-navy/45 sm:block">
                        {total - (page - 1) * PAGE_SIZE - i}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[0.75rem] text-brand">{p.category}</span>
                        <span className="mt-1 block text-[1rem] leading-[1.6] text-navy sm:text-[1.0625rem]">
                          {p.title}
                        </span>
                      </span>
                      <span className="w-24 shrink-0 text-right text-[0.8125rem] tabular-nums text-navy/55">
                        {p.published_at}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {pages > 1 ? (
            <nav
              aria-label="페이지"
              className="mt-10 flex flex-wrap items-center justify-center gap-2 text-[0.875rem]"
            >
              {page > 1 ? (
                <Link
                  href={page === 2 ? '/board' : `/board?page=${page - 1}`}
                  rel="prev"
                  className="border border-line-strong px-4 py-2 hover:border-brand hover:text-brand"
                >
                  이전
                </Link>
              ) : null}
              {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
                <Link
                  key={n}
                  href={n === 1 ? '/board' : `/board?page=${n}`}
                  aria-current={n === page ? 'page' : undefined}
                  className={`border px-4 py-2 ${n === page ? 'border-brand bg-brand text-white' : 'border-line-strong hover:border-brand hover:text-brand'}`}
                >
                  {n}
                </Link>
              ))}
              {page < pages ? (
                <Link
                  href={`/board?page=${page + 1}`}
                  rel="next"
                  className="border border-line-strong px-4 py-2 hover:border-brand hover:text-brand"
                >
                  다음
                </Link>
              ) : null}
            </nav>
          ) : null}
        </div>
      </section>

      <section className="on-dark bg-brand-deep py-section text-white">
        <div className="shell">
          <h2 className="max-w-2xl text-title font-medium tracking-tight">
            비슷한 일정이 있으신가요?
          </h2>
          <p className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.9] text-white/80">
            일정과 언어, 분야를 알려주시면 배정 가능한 통역사를 확인해 회신드립니다.
          </p>
          <div className="mt-10">
            <Cta href="/#contact" variant="invert" track="board-cta">
              통역 문의하기
            </Cta>
          </div>
        </div>
      </section>
    </main>
  );
}
