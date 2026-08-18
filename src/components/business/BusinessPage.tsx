import Link from 'next/link';
import Cta from '../ui/Button';
import Figure from '../ui/Figure';
import Reveal from '../ui/Reveal';
import {
  CheckList,
  Eyebrow,
  HairlineGrid,
  InvertList,
  LabelCard,
  MultilineHeading,
  Section,
  SerifCopy,
  SplitIntro,
  TagRow,
} from './blocks';
import { businessPage as page } from '@/data/business';
import { images } from '@/data/images';
import { site } from '@/data/site';

/**
 * CERTO FOR BUSINESS 페이지.
 * 콘텐츠는 전부 src/data/business.ts 에 있고, 여기서는 배치만 담당합니다.
 * 섹션을 빼거나 순서를 바꾸려면 아래 블록을 옮기면 됩니다.
 */
export default function BusinessPage() {
  return (
    <>
      <StructuredData />

      {/* ── Hero ─────────────────────────────── */}
      <section
        aria-labelledby="business-heading"
        className="relative overflow-hidden bg-white pt-[calc(var(--header-height)+2.5rem)] lg:pt-[calc(var(--header-height)+4rem)]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 hidden w-[38%] bg-ivory-light lg:block"
        />

        <div className="shell relative grid items-center gap-12 pb-16 lg:grid-cols-12 lg:gap-gutter lg:pb-24">
          <div className="lg:col-span-6">
            <Breadcrumb />

            <Reveal delay={60}>
              <p className="eyebrow mt-8">{page.hero.eyebrow}</p>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-5 font-serif text-headline italic text-brand">
                {page.hero.titleSerif}
              </p>
            </Reveal>
            <Reveal delay={140}>
              <h1
                id="business-heading"
                className="mt-3 text-display font-semibold tracking-tight text-navy"
              >
                {page.hero.title.split('\n').map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-xl text-[1.0625rem] leading-[1.9] text-pretty text-navy/70">
                {page.hero.lead}
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Cta href="/#contact" track="business-hero-primary" className="w-full sm:w-auto">
                  {page.hero.ctaLabel}
                </Cta>
                <Cta
                  href="#corporate-standard"
                  variant="outline"
                  track="business-hero-secondary"
                  className="w-full sm:w-auto"
                >
                  기업 서비스 살펴보기
                </Cta>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={120}>
              <Figure
                image={images.business}
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

      {/* ── 포지셔닝 ─────────────────────────── */}
      <Section tone="ivory" labelledBy="positioning-heading" className="border-y border-line">
        <Reveal>
          <TagRow items={page.positioning.tags} />
        </Reveal>
        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-6">
            <Reveal delay={80}>
              <MultilineHeading id="positioning-heading" text={page.positioning.heading} />
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:self-end">
            {page.positioning.paragraphs.map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 14)} delay={120 + i * 90}>
                <p
                  className={`text-[1.0625rem] leading-[1.95] text-pretty text-navy/70 ${i > 0 ? 'mt-6' : ''}`}
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CERTO CORPORATE STANDARD ─────────── */}
      <Section id="corporate-standard" labelledBy="standard-heading">
        <Reveal>
          <Eyebrow>{page.standard.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <MultilineHeading id="standard-heading" text={page.standard.heading} className="mt-6" />
        </Reveal>

        <div className="mt-16 border-t border-line lg:mt-20">
          {page.standard.items.map((item, i) => (
            <Reveal key={item.no} delay={Math.min(i, 3) * 70}>
              <article className="grid gap-4 border-b border-line py-9 lg:grid-cols-12 lg:gap-gutter lg:py-11">
                <div className="flex items-baseline gap-4 lg:col-span-4">
                  <span className="font-serif text-3xl leading-none text-brand/40">{item.no}</span>
                  <div>
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-brand">
                      {item.en}
                    </p>
                    <h3 className="mt-2 text-[1.0625rem] font-medium text-navy">{item.title}</h3>
                  </div>
                </div>
                <p className="text-[0.9375rem] leading-[1.9] text-pretty text-navy/70 lg:col-span-7 lg:col-start-6">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── 기업 발주 운영 환경 ──────────────── */}
      <Section tone="ivoryLight" labelledBy="operations-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>{page.operations.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <MultilineHeading
                id="operations-heading"
                text={page.operations.heading}
                className="mt-6"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <Reveal delay={120}>
              <p className="text-[1.0625rem] leading-[1.95] text-pretty text-navy/70">
                {page.operations.lead}
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={100}>
          <p className="mt-14 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-navy/55">
            {page.operations.listHeading}
          </p>
        </Reveal>
        <div className="mt-6">
          <CheckList items={page.operations.items} columns={3} tone="ivoryLight" />
        </div>

        <Reveal delay={120}>
          <p className="mt-12 max-w-xl text-[1.0625rem] leading-[1.9] text-navy">
            {page.operations.closing.split('\n').map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </Reveal>
      </Section>

      {/* ── 지속 파트너십 ────────────────────── */}
      <Section labelledBy="retention-heading">
        <SplitIntro
          eyebrow={page.retention.eyebrow}
          heading={page.retention.heading}
          headingId="retention-heading"
          paragraphs={page.retention.paragraphs}
        />
      </Section>

      {/* ── 기업별 맞춤 운영 ─────────────────── */}
      <Section tone="soft" labelledBy="account-heading">
        <SplitIntro
          eyebrow={page.accountManagement.eyebrow}
          heading={page.accountManagement.heading}
          headingId="account-heading"
          paragraphs={page.accountManagement.paragraphs}
        />

        <Reveal delay={100}>
          <p className="mt-14 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-navy/55">
            {page.accountManagement.listHeading}
          </p>
        </Reveal>
        <div className="mt-6">
          <CheckList items={page.accountManagement.items} columns={2} tone="soft" />
        </div>

        <Reveal delay={120}>
          <SerifCopy text={page.accountManagement.tagline} className="mt-12" />
        </Reveal>
      </Section>

      {/* ── 산업 전문성 ──────────────────────── */}
      <Section labelledBy="industries-heading">
        <SplitIntro
          eyebrow={page.industries.eyebrow}
          heading={page.industries.heading}
          headingId="industries-heading"
          paragraphs={page.industries.paragraphs}
        />

        <div className="mt-16 lg:mt-20">
          <HairlineGrid columns={3} count={page.industries.items.length}>
            {page.industries.items.map((item, i) => (
              <LabelCard key={item.en} en={item.en} ko={item.ko} index={i} />
            ))}
          </HairlineGrid>
        </div>
      </Section>

      {/* ── 임원 · VIP 통역 ──────────────────── */}
      <Section tone="deep" labelledBy="executive-heading">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow invert>{page.executive.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <MultilineHeading
                id="executive-heading"
                text={page.executive.heading}
                invert
                className="mt-6"
              />
            </Reveal>
            {page.executive.paragraphs.map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 14)} delay={140 + i * 90}>
                <p className="mt-6 max-w-md text-[1.0625rem] leading-[1.95] text-pretty text-white/75">
                  {paragraph}
                </p>
              </Reveal>
            ))}
            <Reveal delay={320}>
              <SerifCopy text={page.executive.tagline} invert className="mt-10" />
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="eyebrow-invert">{page.executive.listHeading}</p>
            </Reveal>
            <div className="mt-6">
              <InvertList items={page.executive.items} />
            </div>
          </div>
        </div>
      </Section>

      {/* ── 해외 전시회 ──────────────────────── */}
      <Section tone="ivory" labelledBy="exhibition-heading">
        <SplitIntro
          eyebrow={page.exhibition.eyebrow}
          heading={page.exhibition.heading}
          headingId="exhibition-heading"
          paragraphs={page.exhibition.paragraphs}
        />

        <Reveal delay={100}>
          <p className="mt-14 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-navy/55">
            {page.exhibition.listHeading}
          </p>
        </Reveal>
        <div className="mt-6">
          <CheckList items={page.exhibition.items} columns={4} tone="ivory" />
        </div>

        <Reveal delay={120}>
          <p className="mt-14 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-navy/55">
            {page.exhibition.regionsHeading}
          </p>
        </Reveal>
        <Reveal delay={160}>
          <ul className="mt-6 flex flex-wrap gap-x-2.5 gap-y-3">
            {page.exhibition.regions.map((region) => (
              <li key={region}>
                <span className="inline-block border border-line-strong px-5 py-2.5 text-[0.8125rem] tracking-wide text-navy/75">
                  {region}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={180}>
          <SerifCopy text={page.exhibition.tagline} className="mt-12" />
        </Reveal>
      </Section>

      {/* ── 해외 출장 ────────────────────────── */}
      <Section labelledBy="trip-heading">
        <SplitIntro
          eyebrow={page.businessTrip.eyebrow}
          heading={page.businessTrip.heading}
          headingId="trip-heading"
          paragraphs={page.businessTrip.paragraphs}
        />

        <Reveal delay={100}>
          <p className="mt-14 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-navy/55">
            {page.businessTrip.itineraryHeading}
          </p>
        </Reveal>

        <ol className="mt-6 border-t border-line">
          {page.businessTrip.itinerary.map((item, i) => (
            <Reveal as="li" key={item.day} delay={i * 80}>
              <div className="flex flex-col gap-1 border-b border-line py-6 sm:flex-row sm:items-baseline sm:gap-10">
                <span className="w-24 shrink-0 text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-brand">
                  {item.day}
                </span>
                <span className="text-[1.0625rem] text-navy/80">{item.body}</span>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <SerifCopy text={page.businessTrip.tagline} className="mt-12" />
        </Reveal>
      </Section>

      {/* ── 기밀 프로젝트 ────────────────────── */}
      <Section tone="ivoryLight" labelledBy="confidential-heading">
        <SplitIntro
          eyebrow={page.confidential.eyebrow}
          heading={page.confidential.heading}
          headingId="confidential-heading"
          paragraphs={page.confidential.paragraphs}
        />

        <Reveal delay={100}>
          <p className="mt-14 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-navy/55">
            {page.confidential.listHeading}
          </p>
        </Reveal>
        <div className="mt-6">
          <CheckList items={page.confidential.items} columns={3} tone="ivoryLight" />
        </div>

        <Reveal delay={120}>
          <p className="mt-12 max-w-2xl border-l-2 border-brand/25 pl-6 text-[0.9375rem] leading-[1.9] text-navy/75">
            {page.confidential.closing}
          </p>
        </Reveal>
      </Section>

      {/* ── 기업 번역 ────────────────────────── */}
      <Section labelledBy="translation-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>{page.translation.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <MultilineHeading
                id="translation-heading"
                text={page.translation.heading}
                className="mt-6"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <Reveal delay={120}>
              <p className="text-[1.0625rem] leading-[1.95] text-pretty text-navy/70">
                {page.translation.lead}
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={100}>
          <p className="mt-14 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-navy/55">
            {page.translation.listHeading}
          </p>
        </Reveal>
        <div className="mt-6">
          <CheckList items={page.translation.items} columns={4} />
        </div>

        <Reveal delay={120}>
          <p className="mt-16 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-brand">
            {page.translation.workflowHeading}
          </p>
        </Reveal>
        <ol className="mt-6 grid gap-px border-t border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {page.translation.workflow.map((step, i) => (
            <Reveal as="li" key={step.no} delay={(i % 3) * 80} className="bg-white">
              <div className="flex h-full flex-col gap-3 py-8 sm:px-6 lg:py-10">
                <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-brand/70">
                  {step.no}
                </span>
                <h3 className="text-[1.0625rem] font-medium text-navy">{step.en}</h3>
                <p className="text-[0.9375rem] leading-[1.85] text-pretty text-navy/70">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* ── 인력 선별 기준 ───────────────────── */}
      <Section tone="ivory" labelledBy="quality-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>{page.quality.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <MultilineHeading
                id="quality-heading"
                text={page.quality.heading}
                className="mt-6"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <Reveal delay={120}>
              <p className="text-[1.0625rem] leading-[1.95] text-pretty text-navy/70">
                {page.quality.lead}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14">
          <HairlineGrid columns={4} tone="ivory" count={page.quality.items.length}>
            {page.quality.items.map((item, i) => (
              <LabelCard key={item.en} en={item.en} ko={item.ko} index={i} tone="ivory" />
            ))}
          </HairlineGrid>
        </div>
      </Section>

      {/* ── 프로젝트 운영 과정 ───────────────── */}
      <Section labelledBy="process-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>{page.process.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <MultilineHeading id="process-heading" text={page.process.heading} className="mt-6" />
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <Reveal delay={120}>
              <p className="text-[1.0625rem] leading-[1.95] text-navy/70">{page.process.lead}</p>
            </Reveal>
          </div>
        </div>

        <ol className="mt-16 border-t border-line lg:mt-20">
          {page.process.steps.map((step, i) => (
            <Reveal as="li" key={step.no} delay={Math.min(i, 3) * 70}>
              <div className="grid gap-3 border-b border-line py-7 lg:grid-cols-12 lg:gap-gutter">
                <div className="flex items-baseline gap-4 lg:col-span-4">
                  <span className="font-serif text-2xl leading-none text-brand/40">{step.no}</span>
                  <div>
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-brand">
                      {step.en}
                    </p>
                    <h3 className="mt-1.5 text-[1.0625rem] font-medium text-navy">{step.title}</h3>
                  </div>
                </div>
                <p className="text-[0.9375rem] leading-[1.85] text-pretty text-navy/70 lg:col-span-7 lg:col-start-6">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* ── 전문가 네트워크 ──────────────────── */}
      <Section tone="ivoryLight" labelledBy="network-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>{page.network.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <MultilineHeading id="network-heading" text={page.network.heading} className="mt-6" />
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <Reveal delay={120}>
              <p className="text-[1.0625rem] leading-[1.95] text-navy/70">{page.network.lead}</p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14">
          <HairlineGrid columns={4} tone="ivoryLight" count={page.network.items.length}>
            {page.network.items.map((item, i) => (
              <LabelCard key={item.en} en={item.en} ko={item.ko} index={i} tone="ivoryLight" />
            ))}
          </HairlineGrid>
        </div>

        <Reveal delay={120}>
          <SerifCopy text={page.network.tagline} className="mt-12" />
        </Reveal>
      </Section>

      {/* ── 하나의 창구 ──────────────────────── */}
      <Section labelledBy="onecontact-heading">
        <SplitIntro
          eyebrow={page.oneContact.eyebrow}
          heading={page.oneContact.heading}
          headingId="onecontact-heading"
          paragraphs={page.oneContact.paragraphs}
        />

        <div className="mt-14">
          <HairlineGrid columns={3} count={page.oneContact.items.length}>
            {page.oneContact.items.map((item, i) => (
              <LabelCard key={item.en} en={item.en} ko={item.ko} index={i} />
            ))}
          </HairlineGrid>
        </div>
      </Section>

      {/* ── 구매·실무 담당자 지원 ────────────── */}
      <Section tone="soft" labelledBy="procurement-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>{page.procurement.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <MultilineHeading
                id="procurement-heading"
                text={page.procurement.heading}
                className="mt-6"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <Reveal delay={120}>
              <p className="text-[1.0625rem] leading-[1.95] text-navy/70">
                {page.procurement.lead}
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={100}>
          <p className="mt-14 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-navy/55">
            {page.procurement.listHeading}
          </p>
        </Reveal>
        <dl className="mt-6 border-t border-line">
          {page.procurement.items.map((item, i) => (
            <Reveal key={item.label} delay={i * 70}>
              <div className="flex flex-col gap-2 border-b border-line py-6 sm:flex-row sm:items-baseline sm:gap-10">
                <dt className="w-36 shrink-0 text-[0.9375rem] font-medium text-navy">
                  {item.label}
                </dt>
                <dd className="text-[0.9375rem] leading-relaxed text-navy/70">{item.body}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Section>

      {/* ── Corporate Partnership ────────────── */}
      <Section tone="deep" labelledBy="partnership-heading">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow invert>{page.partnership.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <MultilineHeading
                id="partnership-heading"
                text={page.partnership.heading}
                invert
                className="mt-6"
              />
            </Reveal>
            {page.partnership.paragraphs.map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 14)} delay={140 + i * 90}>
                <p className="mt-6 max-w-md text-[1.0625rem] leading-[1.95] text-pretty text-white/75">
                  {paragraph}
                </p>
              </Reveal>
            ))}
            <Reveal delay={340}>
              <SerifCopy text={page.partnership.tagline} invert className="mt-10" />
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10">
                <Cta href="/#contact" variant="invert" track="business-partnership-cta">
                  {page.partnership.ctaLabel}
                </Cta>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="eyebrow-invert">{page.partnership.listHeading}</p>
            </Reveal>
            <div className="mt-6">
              <InvertList items={page.partnership.items} columns={1} />
            </div>
          </div>
        </div>
      </Section>

      {/* ── 프로젝트 사례 ────────────────────── */}
      <Section labelledBy="cases-heading">
        <Reveal>
          <Eyebrow>{page.cases.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <MultilineHeading id="cases-heading" text={page.cases.heading} className="mt-6" />
        </Reveal>

        <div className="mt-14">
          <HairlineGrid columns={3} count={page.cases.items.length}>
            {page.cases.items.map((item, i) => (
              <Reveal key={item.en} delay={(i % 3) * 80} className="bg-white">
                <article className="flex h-full flex-col gap-4 py-9 sm:px-6 lg:py-11">
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-brand">
                    {item.en}
                  </p>
                  <h3 className="text-[1.0625rem] font-medium text-navy">{item.title}</h3>
                  <p className="text-[0.9375rem] leading-[1.85] text-pretty text-navy/70">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </HairlineGrid>
        </div>
      </Section>

      {/* ── 긴급 프로젝트 ────────────────────── */}
      <Section tone="ivory" labelledBy="urgent-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>{page.urgent.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <MultilineHeading id="urgent-heading" text={page.urgent.heading} className="mt-6" />
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="border-t border-line">
              {page.urgent.situations.map((situation, i) => (
                <Reveal as="li" key={situation} delay={i * 80}>
                  <p className="border-b border-line py-4 text-[1.0625rem] text-navy/80">
                    {situation}
                  </p>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={200}>
              <p className="mt-8 text-[0.9375rem] leading-[1.9] text-pretty text-navy/70">
                {page.urgent.body}
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-9">
                <Cta href="/#contact" track="business-urgent-cta">
                  {page.urgent.ctaLabel}
                </Cta>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ── 기업 담당자 경험 ─────────────────── */}
      <Section labelledBy="experience-heading">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>{page.experience.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <MultilineHeading
                id="experience-heading"
                text={page.experience.heading}
                className="mt-6"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ul>
              {page.experience.points.map((point, i) => (
                <Reveal as="li" key={point} delay={i * 80}>
                  <div className="flex items-start gap-5 border-b border-line py-5">
                    <span className="mt-1 font-serif text-xs text-brand/50">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[1.0625rem] leading-relaxed text-pretty text-navy/80">
                      {point}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={420}>
              <p className="mt-9 text-[1.0625rem] font-medium text-navy">
                {page.experience.closing}
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ── 첫 의뢰 안내 ─────────────────────── */}
      <Section tone="ivoryLight" labelledBy="first-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>{page.firstProject.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <MultilineHeading
                id="first-heading"
                text={page.firstProject.heading}
                className="mt-6"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <Reveal delay={120}>
              <p className="text-[1.0625rem] leading-[1.95] text-navy/70">
                {page.firstProject.lead}
              </p>
            </Reveal>
          </div>
        </div>

        <ol className="mt-14 border-t border-line">
          {page.firstProject.items.map((item, i) => (
            <Reveal as="li" key={item} delay={i * 60}>
              <div className="flex items-baseline gap-6 border-b border-line py-5">
                <span className="font-serif text-lg text-brand/45">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[1.0625rem] text-navy/80">{item}</span>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <p className="mt-10 text-[0.9375rem] leading-relaxed text-navy/70">
            {page.firstProject.closing}
          </p>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-8">
            <Cta href="/#contact" track="business-first-project-cta">
              {page.firstProject.ctaLabel}
            </Cta>
          </div>
        </Reveal>
      </Section>

      {/* ── Corporate FAQ ────────────────────── */}
      <Section labelledBy="business-faq-heading">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>Corporate FAQ</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <MultilineHeading
                id="business-faq-heading"
                text={'기업 고객이\n자주 묻는 질문'}
                className="mt-6"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="border-t border-line">
              {page.faqs.map((faq, i) => (
                <Reveal key={faq.q} delay={Math.min(i, 4) * 60}>
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
                    <div className="pb-7 pr-8 text-[0.9375rem] leading-[1.9] text-pretty text-navy/70 sm:pl-8">
                      {faq.a}
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── 마지막 CTA ───────────────────────── */}
      <Section tone="deep" labelledBy="business-cta-heading">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow invert>{page.finalCta.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <MultilineHeading
                id="business-cta-heading"
                text={page.finalCta.heading}
                invert
                className="mt-6"
              />
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-md text-[1.0625rem] leading-[1.9] text-white/75">
                {page.finalCta.lead}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <ul>
              {page.finalCta.points.map((point, i) => (
                <Reveal as="li" key={point} delay={i * 80}>
                  <div className="border-b border-line-invert py-4 text-[1.0625rem] text-white/85">
                    {point}
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        <Reveal delay={160}>
          <div className="mt-16 border-t border-line-invert pt-12">
            <SerifCopy text={page.finalCta.tagline} invert />
            <p className="mt-6 text-[0.8125rem] uppercase tracking-[0.16em] text-white/55">
              {page.finalCta.scope}
            </p>
            <div className="mt-10">
              <Cta href="/#contact" variant="invert" track="business-final-cta">
                {page.finalCta.ctaLabel}
              </Cta>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── 다른 서비스 ──────────────────────── */}
      <Section labelledBy="business-related-heading">
        <Reveal>
          <h2 id="business-related-heading" className="eyebrow">
            Other Services
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-px border-t border-line bg-line lg:grid-cols-3">
          {page.related.map((item, i) => (
            <Reveal as="li" key={item.href} delay={i * 90} className="bg-white">
              <Link
                href={item.href}
                data-cta={`business-related-${item.href.replace('/', '')}`}
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
      </Section>
    </>
  );
}

function Breadcrumb() {
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
          {page.navLabel}
        </li>
      </ol>
    </nav>
  );
}

/** Service + BreadcrumbList + FAQPage 구조화 데이터 */
function StructuredData() {
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
      name: page.cases.heading,
      itemListElement: page.cases.items.map((item) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: item.title, description: item.body },
      })),
    },
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: page.serviceName, item: `${site.url}/${page.slug}` },
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
