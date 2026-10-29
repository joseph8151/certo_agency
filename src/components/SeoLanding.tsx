import Link from 'next/link';
import Cta from './ui/Button';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import type { SeoPageData } from '@/data/seo-pages';
import { site } from '@/data/site';

/**
 * 언어별 · 국가별 검색 랜딩 페이지 템플릿.
 * 데이터는 src/data/seo-pages.ts 의 조립 함수가 만들어 줍니다.
 * 디자인은 도시 페이지(CityPage)와 같은 구조 · 같은 토큰을 씁니다.
 */
export default function SeoLanding({ page }: { page: SeoPageData }) {
  const track = page.path.replace(/\//g, '-').replace(/^-/, '');

  return (
    <>
      <StructuredData page={page} />

      {/* ── Hero ──────────────────────────────────── */}
      <section
        aria-labelledby="seo-heading"
        className="bg-white pt-[calc(var(--header-height)+3rem)] lg:pt-[calc(var(--header-height)+5rem)]"
      >
        <div className="shell pb-16 lg:pb-24">
          <Reveal>
            <nav aria-label="현재 위치" className="text-[0.75rem] tracking-wide text-navy/65">
              <ol className="flex flex-wrap items-center gap-2">
                {page.breadcrumb.map((crumb, i) => (
                  <li key={crumb.label} className="flex items-center gap-2">
                    {i > 0 ? <span className="text-navy/40">/</span> : null}
                    {crumb.href ? (
                      <Link href={crumb.href} className="hover:text-brand">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-navy" aria-current="page">
                        {crumb.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>

          <Reveal delay={80}>
            <p className="eyebrow mt-8">{page.eyebrow}</p>
          </Reveal>

          <Reveal delay={140}>
            <h1 id="seo-heading" className="mt-6 text-display font-medium tracking-tight text-navy">
              {page.h1}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-9 max-w-2xl text-[1.0625rem] leading-[1.9] text-pretty text-navy/70">
              {page.lead}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <dl className="mt-12 grid gap-px border-t border-line bg-line sm:grid-cols-2">
              {page.facts.map((fact, i) => (
                <div key={fact.label} className={`bg-white py-6 ${i === 0 ? 'sm:pr-8' : 'sm:pl-8'}`}>
                  <dt className="text-[0.75rem] font-semibold tracking-[0.04em] text-brand">
                    {fact.label}
                  </dt>
                  <dd className="mt-3 text-[0.9375rem] leading-[1.8] text-navy/70">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-11">
              <Cta href="/#contact" track={`${track}-hero`}>
                {page.ctaLabel}
              </Cta>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 본문 섹션 (통역 / 번역 / 현지 통역) ─────── */}
      {page.sections.map((section, index) => (
        <section
          key={section.heading}
          aria-labelledby={`seo-section-${index}`}
          className={`border-y border-line py-section ${index % 2 === 0 ? 'bg-ivory-light' : 'bg-white'}`}
        >
          <div className="shell">
            <SectionHeading
              eyebrow={section.eyebrow}
              title={<span id={`seo-section-${index}`}>{section.heading}</span>}
              lead={section.lead}
            />
            <div className="mt-16 grid gap-px border-t border-line bg-line lg:mt-20 lg:grid-cols-3">
              {section.items.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={(i % 3) * 90}
                  className={index % 2 === 0 ? 'bg-ivory-light' : 'bg-white'}
                >
                  <article className="flex h-full flex-col gap-4 py-9 lg:px-8 lg:py-11">
                    <h3 className="text-[1.0625rem] font-medium text-navy">{item.title}</h3>
                    <p className="text-[0.9375rem] leading-[1.85] text-pretty text-navy/70">
                      {item.body}
                    </p>
                  </article>
                </Reveal>
              ))}
              {Array.from({ length: (3 - (section.items.length % 3)) % 3 }).map((_, i) => (
                <div
                  key={`filler-${i}`}
                  aria-hidden="true"
                  className={`hidden lg:block ${index % 2 === 0 ? 'bg-ivory-light' : 'bg-white'}`}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── 유의사항 + 연결 링크 ─────────────────────── */}
      <section aria-labelledby="seo-notes" className="bg-white py-section">
        <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-7">
            <p className="eyebrow">사전 확인</p>
            <h2 id="seo-notes" className="mt-6 text-title font-medium tracking-tight text-navy">
              {page.notesHeading}
            </h2>
            <dl className="mt-10 border-t border-line">
              {page.notes.map((note) => (
                <div key={note.label} className="border-b border-line py-7">
                  <dt className="text-[1.0625rem] font-medium text-navy">{note.label}</dt>
                  <dd className="mt-3 text-[0.9375rem] leading-[1.85] text-pretty text-navy/70">
                    {note.body}
                  </dd>
                </div>
              ))}
            </dl>

            {page.cityBlock ? (
              <div className="mt-16">
                <h2 className="text-title font-medium tracking-tight text-navy">
                  {page.cityBlock.heading}
                </h2>
                <p className="mt-5 max-w-2xl text-[0.9375rem] leading-[1.9] text-pretty text-navy/70">
                  {page.cityBlock.intro}
                </p>
                {page.cityBlock.groups.map((group) => (
                  <div key={group.label ?? 'all'} className="mt-8">
                    {group.label ? (
                      <h3 className="text-[0.75rem] font-semibold tracking-[0.04em] text-brand">
                        {group.label}
                      </h3>
                    ) : null}
                    <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
                      {group.cities.map((city) => {
                        const href = page.cityBlock?.linked[city];
                        const cls =
                          'inline-block border border-line px-3.5 py-1.5 text-[0.875rem] text-navy/80';
                        return (
                          <li key={city}>
                            {href ? (
                              <Link
                                href={href}
                                className={`${cls} border-brand/40 text-brand transition-colors duration-300 hover:bg-brand hover:text-white`}
                              >
                                {city} 통역
                              </Link>
                            ) : (
                              <span className={cls}>{city} 통역</span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            {page.linkGroups.map((group) => (
              <div key={group.heading} className="mb-12 last:mb-0">
                <h2 className="text-[0.75rem] font-semibold tracking-[0.04em] text-brand">
                  {group.heading}
                </h2>
                <ul className="mt-5 border-t border-line">
                  {group.links.map((link) => (
                    <li key={link.href} className="border-b border-line">
                      <Link
                        href={link.href}
                        className="flex items-baseline justify-between gap-4 py-4 text-[0.9375rem] text-navy transition-colors duration-300 hover:text-brand"
                      >
                        <span>{link.label}</span>
                        {link.note ? (
                          <span className="hidden text-[0.8125rem] text-navy/55 sm:inline">
                            {link.note}
                          </span>
                        ) : (
                          <span aria-hidden="true" className="text-navy/40">
                            →
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────── */}
      <section aria-labelledby="seo-faq" className="bg-ivory-light py-section">
        <div className="shell">
          <SectionHeading
            eyebrow="자주 묻는 질문"
            title={<span id="seo-faq">{page.h1.split('과 ')[0]} 자주 묻는 질문</span>}
          />
          <div className="mt-14 border-t border-line">
            {page.faqs.map((faq) => (
              <details key={faq.q} className="group border-b border-line py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[1.0625rem] font-medium text-navy [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span aria-hidden="true" className="relative mt-2 block h-3 w-3 shrink-0">
                    <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current" />
                    <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-current transition-transform duration-500 ease-certo group-open:rotate-90 group-open:opacity-0" />
                  </span>
                </summary>
                <p className="mt-5 max-w-3xl text-[0.9375rem] leading-[1.9] text-pretty text-navy/70">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────── */}
      <section className="on-dark bg-brand-deep py-section text-white">
        <div className="shell">
          <h2 className="max-w-2xl text-title font-medium tracking-tight">{page.ctaTitle}</h2>
          <p className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.9] text-white/80">
            날짜와 미팅 성격을 알려주시면, 해당 일정 기준으로 배정 가능한 통역사를 확인해
            회신드립니다. 조건이 확정되지 않아도 괜찮습니다.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Cta href="/#contact" variant="invert" track={`${track}-cta`}>
              통역 문의하기
            </Cta>
            <Cta href="/global" variant="invertOutline" track={`${track}-global`}>
              해외 지원 보기
            </Cta>
          </div>
        </div>
      </section>
    </>
  );
}

function StructuredData({ page }: { page: SeoPageData }) {
  const url = `${site.url}${page.path}`;

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.serviceName,
    description: page.lead,
    url,
    provider: { '@id': `${site.url}#organization` },
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: page.breadcrumb.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.label,
      item: crumb.href ? `${site.url}${crumb.href === '/' ? '' : crumb.href}` : url,
    })),
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <>
      {[service, breadcrumb, faqPage].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
