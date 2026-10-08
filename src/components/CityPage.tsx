import Link from 'next/link';
import Cta from './ui/Button';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import type { CityPage as CityPageData } from '@/data/city-pages';
import { site } from '@/data/site';

/**
 * 도시별 현지 통역 페이지 템플릿.
 * src/data/city-pages.ts 의 데이터만 추가하면 페이지가 생깁니다.
 */
export default function CityPage({ page }: { page: CityPageData }) {
  return (
    <>
      <StructuredData page={page} />

      {/* ── Hero ──────────────────────────────────── */}
      <section
        aria-labelledby="city-heading"
        className="bg-white pt-[calc(var(--header-height)+3rem)] lg:pt-[calc(var(--header-height)+5rem)]"
      >
        <div className="shell pb-16 lg:pb-24">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-[0.75rem] tracking-wide text-navy/65">
              <Link href="/" className="hover:text-brand">
                Home
              </Link>
              <span className="mx-2 text-navy/40">/</span>
              <Link href="/global" className="hover:text-brand">
                해외 통역
              </Link>
              <span className="mx-2 text-navy/40">/</span>
              <span className="text-navy">{page.city}</span>
            </nav>
          </Reveal>

          <Reveal delay={80}>
            <p className="eyebrow mt-8">
              {page.country} · {page.city}
            </p>
          </Reveal>

          <Reveal delay={140}>
            <h1 id="city-heading" className="mt-6 text-display font-semibold tracking-tight text-navy">
              {page.city} 현지 통역
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-9 max-w-2xl text-[1.0625rem] leading-[1.9] text-pretty text-navy/70">
              {page.lead}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <dl className="mt-12 grid gap-px border-t border-line bg-line sm:grid-cols-2">
              <div className="bg-white py-6 sm:pr-8">
                <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-brand">
                  Time Difference
                </dt>
                <dd className="mt-3 text-[0.9375rem] leading-[1.8] text-navy/70">{page.timeDiff}</dd>
              </div>
              <div className="bg-white py-6 sm:pl-8">
                <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-brand">
                  Language
                </dt>
                <dd className="mt-3 text-[0.9375rem] leading-[1.8] text-navy/70">{page.language}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-11">
              <Cta href="/#contact" track={`city-${page.slug}-hero`}>
                {page.city} 통역 문의하기
              </Cta>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 어떤 자리가 많은가 ────────────────────── */}
      <section aria-labelledby="scenes-heading" className="border-y border-line bg-ivory py-section">
        <div className="shell">
          <SectionHeading
            eyebrow="On Site"
            title={<span id="scenes-heading">{page.city}에서 많은 자리</span>}
          />
          <div className="mt-16 grid gap-px border-t border-line bg-line lg:mt-20 lg:grid-cols-3">
            {page.scenes.map((scene, i) => (
              <Reveal key={scene.title} delay={(i % 3) * 90} className="bg-ivory">
                <article className="flex h-full flex-col gap-4 py-9 lg:px-8 lg:py-11">
                  <h2 className="text-[1.0625rem] font-medium text-navy">{scene.title}</h2>
                  <p className="text-[0.9375rem] leading-[1.85] text-pretty text-navy/70">
                    {scene.body}
                  </p>
                </article>
              </Reveal>
            ))}
            {Array.from({ length: (3 - (page.scenes.length % 3)) % 3 }).map((_, i) => (
              <div key={`filler-${i}`} aria-hidden="true" className="hidden bg-ivory lg:block" />
            ))}
          </div>
        </div>
      </section>

      {/* ── 전시장 · 현장 메모 ────────────────────── */}
      <section aria-labelledby="notes-heading" className="bg-white py-section">
        <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Venues"
              title={<span id="notes-heading">주요 전시장 · 행사장</span>}
            />
            <ul className="mt-10 border-t border-line">
              {page.venues.map((venue) => (
                <li key={venue} className="border-b border-line py-4 text-[0.9375rem] text-navy">
                  {venue}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <p className="eyebrow">Before You Go</p>
            <h2 className="mt-6 text-title font-semibold tracking-tight text-navy">
              일정을 잡기 전에
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
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────── */}
      <section aria-labelledby="city-faq-heading" className="bg-ivory py-section">
        <div className="shell">
          <SectionHeading
            eyebrow="FAQ"
            title={<span id="city-faq-heading">{page.city} 통역, 자주 묻는 질문</span>}
          />
          <div className="mt-14 border-t border-line">
            {page.faqs.map((faq) => (
              <details key={faq.q} className="group border-b border-line py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[1.0625rem] font-medium text-navy">
                  {faq.q}
                  <span
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-brand transition-transform group-open:rotate-45"
                  >
                    +
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
      <section className="bg-brand-deep py-section text-white">
        <div className="shell">
          <h2 className="max-w-2xl text-title font-semibold tracking-tight">
            {page.city} 일정이 정해지셨나요?
          </h2>
          <p className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.9] text-white/80">
            날짜와 미팅 성격을 알려주시면, 해당 날짜 기준으로 배정 가능한 통역사를 확인해
            회신드립니다. 조건이 확정되지 않아도 괜찮습니다.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Cta href="/#contact" variant="invert" track={`city-${page.slug}-cta`}>
              통역 문의하기
            </Cta>
            <Cta href="/global" variant="invertOutline" track={`city-${page.slug}-global`}>
              해외 통역 서비스 보기
            </Cta>
          </div>
        </div>
      </section>
    </>
  );
}

function StructuredData({ page }: { page: CityPageData }) {
  const url = `${site.url}/global/${page.slug}`;

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${page.city} 현지 통역`,
    serviceType: '현지 통역',
    description: page.lead,
    url,
    provider: { '@id': `${site.url}#organization` },
    areaServed: { '@type': 'City', name: page.city, containedInPlace: page.country },
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: '해외 통역', item: `${site.url}/global` },
      { '@type': 'ListItem', position: 3, name: `${page.city} 현지 통역`, item: url },
    ],
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
