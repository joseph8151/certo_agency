import Link from 'next/link';
import Cta from './ui/Button';
import Figure from './ui/Figure';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { images } from '@/data/images';
import type { ServicePage as ServicePageData } from '@/data/services';
import { site } from '@/data/site';

/**
 * 서비스 상세 페이지 템플릿.
 * src/data/services.ts 의 데이터를 받아 렌더링하므로
 * 새 서비스 페이지는 데이터 추가 + 라우트 파일 생성만으로 만들어집니다.
 */
export default function ServicePage({ page }: { page: ServicePageData }) {
  const titleLines = page.title.split('\n');

  return (
    <>
      <StructuredData page={page} />

      {/* ── Page Hero ─────────────────────────────── */}
      <section
        aria-labelledby="page-heading"
        className="relative overflow-hidden bg-white pt-[calc(var(--header-height)+2.5rem)] lg:pt-[calc(var(--header-height)+4rem)]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 hidden w-[38%] bg-ivory-light lg:block"
        />

        <div className="shell relative grid items-center gap-12 pb-16 lg:grid-cols-12 lg:gap-gutter lg:pb-24">
          <div className="lg:col-span-6">
            <Breadcrumb current={page.navLabel} />

            <Reveal delay={60}>
              <p className="eyebrow mt-8">{page.eyebrow}</p>
            </Reveal>

            {page.titleSerif ? (
              <Reveal delay={100}>
                <p className="mt-5 font-serif text-headline italic text-brand">{page.titleSerif}</p>
              </Reveal>
            ) : null}

            <Reveal delay={140}>
              <h1
                id="page-heading"
                className="mt-3 text-display font-semibold tracking-tight text-navy"
              >
                {titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-8 max-w-xl text-[1.0625rem] leading-[1.9] text-pretty text-navy/70">
                {page.lead}
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Cta
                  href="/#contact"
                  track={`${page.slug}-hero-primary`}
                  className="w-full sm:w-auto"
                >
                  {page.ctaLabel}
                </Cta>
                <Cta
                  href="#flow"
                  variant="outline"
                  track={`${page.slug}-hero-secondary`}
                  className="w-full sm:w-auto"
                >
                  진행 방식 보기
                </Cta>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={120}>
              <Figure
                image={images[page.imageKey]}
                ratio="4 / 5"
                tone="none"
                priority
                zoom={false}
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────── */}
      <section aria-labelledby="intro-heading" className="border-y border-line bg-ivory py-section">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 id="intro-heading" className="text-title font-semibold text-navy">
                {page.intro.heading}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            {page.intro.paragraphs.map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 12)} delay={i * 100}>
                <p
                  className={`text-[1.0625rem] leading-[1.95] text-pretty ${
                    i === 0 ? 'text-navy/70' : 'mt-7 text-navy'
                  }`}
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Offerings ─────────────────────────────── */}
      <section id="offerings" aria-labelledby="offerings-heading" className="bg-white py-section">
        <div className="shell">
          <SectionHeading
            eyebrow="What We Do"
            title={<span id="offerings-heading">{page.offeringsHeading}</span>}
            lead={page.offeringsLead}
          />

          <div className="mt-16 grid gap-px border-t border-line bg-line lg:mt-20 lg:grid-cols-3">
            {page.offerings.map((offering, i) => (
              <Reveal key={offering.en} delay={(i % 3) * 90} className="bg-white">
                <article className="flex h-full flex-col gap-5 py-9 lg:px-8 lg:py-11">
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-brand">
                    {offering.en}
                  </p>
                  <h3 className="text-[1.125rem] font-medium text-navy">{offering.title}</h3>
                  <p className="text-[0.9375rem] leading-[1.85] text-pretty text-navy/70">
                    {offering.body}
                  </p>
                  <p className="mt-auto border-t border-line pt-5 text-[0.8125rem] leading-relaxed text-navy/65">
                    {offering.fit}
                  </p>
                </article>
              </Reveal>
            ))}

            {/* 3열 그리드의 빈 칸이 헤어라인 배경으로 드러나지 않도록 */}
            {Array.from({ length: (3 - (page.offerings.length % 3)) % 3 }).map((_, i) => (
              <div key={`filler-${i}`} aria-hidden="true" className="hidden bg-white lg:block" />
            ))}
          </div>
        </div>
      </section>

      {/* ── Flow ──────────────────────────────────── */}
      <section
        id="flow"
        aria-labelledby="flow-heading"
        className="scroll-mt-28 bg-ivory-light py-section"
      >
        <div className="shell">
          <SectionHeading
            eyebrow="Process"
            title={<span id="flow-heading">{page.flowHeading}</span>}
          />

          <ol className="mt-16 border-t border-line lg:mt-20">
            {page.flow.map((step, i) => (
              <Reveal as="li" key={step.no} delay={i * 70}>
                <div className="grid items-baseline gap-3 border-b border-line py-7 sm:grid-cols-12 sm:gap-8">
                  <span className="font-serif text-2xl leading-none text-brand/50 sm:col-span-1">
                    {step.no}
                  </span>
                  <h3 className="text-[1.0625rem] font-medium text-navy sm:col-span-3">
                    {step.label}
                  </h3>
                  <p className="text-[0.9375rem] leading-[1.85] text-navy/70 sm:col-span-8">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Brief & Factors ──────────────────────── */}
      <section aria-labelledby="brief-heading" className="bg-white py-section">
        <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Project Brief"
              title={<span id="brief-heading">{page.briefHeading}</span>}
              lead={page.briefLead}
            />

            <dl className="mt-12 grid gap-px border-t border-line bg-line sm:grid-cols-2">
              {page.brief.map((item, i) => (
                <Reveal key={item.label} delay={(i % 2) * 80} className="bg-white">
                  <div className="h-full py-6 sm:px-6">
                    <dt className="text-[0.9375rem] font-medium text-navy">{item.label}</dt>
                    <dd className="mt-2 text-[0.875rem] leading-relaxed text-navy/65">
                      {item.body}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal>
              <div className="border-l-2 border-brand/25 pl-6">
                <p className="eyebrow">Pricing</p>
                <h2 className="mt-5 text-[1.25rem] font-semibold leading-snug text-navy">
                  {page.factorsHeading}
                </h2>
                <p className="mt-4 text-[0.9375rem] leading-[1.85] text-navy/65">
                  {page.factorsLead}
                </p>
              </div>
            </Reveal>

            <ul className="mt-9 border-t border-line">
              {page.factors.map((factor, i) => (
                <Reveal as="li" key={factor} delay={i * 60}>
                  <div className="border-b border-line py-4 text-[0.875rem] leading-relaxed text-navy/75">
                    {factor}
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────── */}
      <section aria-labelledby="page-faq-heading" className="bg-ivory py-section">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title={<span id="page-faq-heading">자주 묻는 질문</span>}
              lead="더 알고 싶은 내용이 있으시면 문의 폼으로 남겨주세요. 담당자가 직접 안내드립니다."
            />
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="border-t border-line">
              {page.faqs.map((faq, i) => (
                <Reveal key={faq.q} delay={i * 60}>
                  <details className="group border-b border-line">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-[1.0625rem] font-medium text-navy transition-colors duration-300 hover:text-brand [&::-webkit-details-marker]:hidden">
                      <span className="flex gap-4">
                        <span className="mt-1 font-serif text-xs text-brand/50">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span>{faq.q}</span>
                      </span>
                      <span aria-hidden="true" className="relative mt-2 block h-3 w-3 shrink-0">
                        <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current" />
                        <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-current transition-transform duration-500 ease-certo group-open:rotate-90 group-open:opacity-0" />
                      </span>
                    </summary>
                    <div className="pb-7 pr-8 text-[0.9375rem] leading-[1.9] text-pretty text-navy/65 sm:pl-8">
                      {faq.a}
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────── */}
      <section
        aria-labelledby="page-cta-heading"
        className="on-dark bg-brand-deep py-section text-white"
      >
        <div className="shell max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow-invert">Start Your Project</p>
          </Reveal>
          <Reveal delay={90}>
            <h2 id="page-cta-heading" className="mt-7 text-headline font-semibold text-white">
              {page.ctaTitle}
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-6 max-w-xl text-[1.0625rem] leading-[1.9] text-white/70">
              {page.ctaBody}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-10 flex justify-center">
              <Cta href="/#contact" variant="invert" track={`${page.slug}-cta`}>
                {page.ctaLabel}
              </Cta>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Related ───────────────────────────────── */}
      <section aria-labelledby="related-heading" className="bg-white py-section">
        <div className="shell">
          <Reveal>
            <h2 id="related-heading" className="eyebrow">
              Other Services
            </h2>
          </Reveal>

          <ul className="mt-10 grid gap-px border-t border-line bg-line lg:grid-cols-3">
            {page.related.map((item, i) => (
              <Reveal as="li" key={item.href} delay={i * 90} className="bg-white">
                <Link
                  href={item.href}
                  data-cta={`${page.slug}-related-${item.href.replace('/', '')}`}
                  className="group flex h-full flex-col gap-3 py-8 transition-colors duration-500 ease-certo hover:bg-ivory-light lg:px-8 lg:py-10"
                >
                  <span className="flex items-center justify-between gap-4">
                    <span className="text-[1.0625rem] font-medium text-navy">{item.label}</span>
                    <span
                      aria-hidden="true"
                      className="text-navy/30 transition-all duration-500 ease-certo group-hover:translate-x-1 group-hover:text-brand"
                    >
                      →
                    </span>
                  </span>
                  <span className="text-[0.875rem] leading-relaxed text-navy/65">
                    {item.description}
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function Breadcrumb({ current }: { current: string }) {
  return (
    <nav aria-label="현재 위치">
      <ol className="flex items-center gap-2 text-[0.75rem] tracking-wide text-navy/65">
        <li>
          <Link href="/" className="link-underline">
            Home
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li className="text-navy" aria-current="page">
          {current}
        </li>
      </ol>
    </nav>
  );
}

/** Service + BreadcrumbList + FAQPage 구조화 데이터 */
function StructuredData({ page }: { page: ServicePageData }) {
  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.serviceName,
    description: page.seo.description,
    url: `${site.url}/${page.slug}`,
    provider: { '@id': `${site.url}#organization` },
    areaServed: ['KR', 'North America', 'Europe', 'Asia', 'Middle East', 'Oceania'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: page.offeringsHeading,
      itemListElement: page.offerings.map((offering) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: offering.title, description: offering.body },
      })),
    },
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      {
        '@type': 'ListItem',
        position: 2,
        name: page.serviceName,
        item: `${site.url}/${page.slug}`,
      },
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
