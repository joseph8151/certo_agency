import type { Metadata } from 'next';
import Link from 'next/link';
import EnContactForm from '@/components/en/EnContactForm';
import Cta from '@/components/ui/Button';
import Figure from '@/components/ui/Figure';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { enPages, enPath } from '@/data/en/pages';
import { enPricing, enPricingNotes, enSite } from '@/data/en/site';
import { images } from '@/data/images';
import { languages } from '@/data/seo-pages';

export const metadata: Metadata = {
  title: { absolute: 'CERTO AGENCY | Business Interpreters & Translators in Korea' },
  alternates: { canonical: '/en', languages: { en: '/en', ko: '/', 'x-default': '/en' } },
};

const faqs = [
  {
    q: 'How do I hire an interpreter for a business trip to Korea?',
    a: 'Send us your dates, city, languages and what the meeting is about. We check interpreter availability, propose a match for your industry and reply with a quote. For a standard trip, two weeks ahead is comfortable.',
  },
  {
    q: 'Which languages do you interpret with Korean?',
    a: `Korean ↔ English, Japanese and Chinese are the most requested. We support ${languages.length} languages in total, including Vietnamese, German, French, Spanish, Arabic, Russian and Indonesian. For less common languages please book early.`,
  },
  {
    q: 'Where in Korea can you provide interpreters?',
    a: 'Seoul and the capital area are the standard base, with on-site interpreters. We also arrange interpreters for Busan, Daegu, Daejeon, Gwangju, Ulsan, Incheon, Jeju and other cities, depending on language and dates.',
  },
  {
    q: 'How much does an interpreter cost?',
    a: `Guide ranges per day are ${enPricing[0].range} (standard), ${enPricing[1].range} (business premium) and ${enPricing[2].range} (executive). Trips outside Seoul add travel and accommodation, and the final quote depends on the language, subject and preparation.`,
  },
  {
    q: 'Can you translate documents as well?',
    a: 'Yes. We translate contracts, NDAs, proposals, technical documents and meeting minutes between Korean and your language, with proofreading available. Using the same team for interpreting and documents keeps terminology consistent.',
  },
  {
    q: 'Is my information kept confidential?',
    a: 'Yes. Material you share is used only for your assignment. For sensitive documents we sign an NDA before receiving files.',
  },
];

const steps = [
  {
    title: 'Tell us about your visit',
    body: 'Dates, city, languages, topic and who you will meet.',
  },
  {
    title: 'We match an interpreter',
    body: 'We check availability and propose someone with experience in your field.',
  },
  {
    title: 'Preparation',
    body: 'Your interpreter reviews the agenda, slides and glossary before you arrive.',
  },
  {
    title: 'On the day',
    body: 'On-site or online, with one coordinator following up until the work is done.',
  },
];

const why = [
  {
    title: 'Matched to your industry',
    body: 'We ask about your sector and topics first, then choose an interpreter who has handled similar meetings.',
  },
  {
    title: 'Prepared before the meeting',
    body: 'Higher tiers include document review and terminology preparation, not just time in the room.',
  },
  {
    title: 'One coordinator',
    body: 'The same contact follows your request from the first email to the final day.',
  },
  {
    title: 'Confidential by default',
    body: 'Material is used only for your assignment, and we sign an NDA when you need one.',
  },
];

function Schema() {
  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${enSite.url}#website`,
    url: enSite.url,
    name: enSite.name,
    inLanguage: 'en',
    publisher: { '@id': `${enSite.url}#organization` },
  };
  const offers = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Business interpreting and translation in Korea',
    provider: { '@id': `${enSite.url}#organization` },
    areaServed: { '@type': 'Country', name: 'South Korea' },
    inLanguage: 'en',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Interpreter day rates',
      itemListElement: enPricing.map((p) => ({
        '@type': 'Offer',
        name: p.name,
        description: p.fit,
        priceCurrency: 'KRW',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          priceCurrency: 'KRW',
          unitText: 'DAY',
        },
      })),
    },
  };
  return (
    <>
      {[website, offers, faqPage].map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}

/** 홈 카드에 쓰는 한 줄 요약 — 서비스 페이지의 lead 는 길어서 잘라 쓰면 문장이 끊깁니다. */
const blurbs: Record<string, string> = {
  'business-interpreter-korea':
    'Buyer meetings, negotiations and partner talks in Seoul and across Korea, with an interpreter who knows your industry.',
  'trade-show-interpreter-korea':
    'Booth and buyer-meeting interpreting at COEX, KINTEX, BEXCO and other Korean shows.',
  'factory-audit-interpreter-korea':
    'Supplier audits, plant tours and production meetings, with site access and safety procedures handled.',
  'conference-interpreter-korea':
    'Simultaneous and consecutive interpreting for conferences, with booth, receivers and team planned together.',
  'escort-interpreter-korea':
    'A personal interpreter for executives and delegations through meetings, visits, transfers and dinners.',
  'remote-interpreter-korea':
    'A Korean interpreter on your Zoom or Teams call, ideal for recurring meetings with Korean partners.',
  'document-translation-korea':
    'Contracts, NDAs, proposals, manuals and meeting minutes between Korean and your language, with review.',
};

const byKey = (section: string) => enPages.filter((p) => p.section === section);

export default function EnHome() {
  const heroImage = {
    ...images.hero,
    alt: 'A business meeting with an interpreter in a conference room overlooking Seoul',
  };

  return (
    <main id="main">
      <Schema />

      {/* Hero */}
      <section
        aria-labelledby="en-hero"
        className="hero-glow relative overflow-hidden bg-white pt-[calc(var(--header-height)+2.5rem)] lg:pt-[calc(var(--header-height)+4.5rem)]"
      >
        <div className="shell grid items-center gap-14 pb-16 lg:grid-cols-12 lg:gap-gutter lg:pb-24">
          <div className="lg:col-span-6 lg:pr-8">
            <Reveal>
              <p className="eyebrow">Interpreters & translators in Korea</p>
            </Reveal>
            <Reveal delay={90}>
              <h1 id="en-hero" className="mt-7 text-display font-medium tracking-tight text-navy">
                The right interpreter
                <br />
                for your <span className="text-brand">business in Korea</span>
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-9 max-w-xl text-[1.0625rem] leading-[1.9] text-pretty text-navy/70">
                Business interpreters in Seoul and across Korea for meetings, trade shows, factory
                visits and negotiations. Matched to your industry, prepared in advance, and backed
                by document translation.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Cta href="/en/contact" track="en-hero-primary" className="w-full sm:w-auto">
                  Request a quote
                </Cta>
                <Cta
                  href="/en#pricing"
                  variant="outline"
                  track="en-hero-pricing"
                  className="w-full sm:w-auto"
                >
                  See pricing
                </Cta>
              </div>
            </Reveal>
            <Reveal delay={340}>
              <div className="mt-14 lg:mt-20">
                <div className="rule" />
                <p className="mt-5 text-[0.75rem] font-medium leading-relaxed tracking-[0.04em] text-navy/65">
                  Business meetings · Trade shows · Factory audits · Conferences · Document
                  translation
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={140} className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 hidden translate-x-5 translate-y-9 border border-line-strong lg:block"
              />
              <Figure
                image={heroImage}
                tone="blue"
                priority
                zoom={false}
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="lg:translate-y-4"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section
        aria-label="At a glance"
        className="on-dark relative overflow-hidden bg-brand-deep py-16 text-white lg:py-20"
      >
        <div className="shell">
          <ul className="grid grid-cols-2 gap-px bg-white/15 lg:grid-cols-4">
            {[
              { v: String(languages.length), l: 'languages with Korean' },
              { v: String(byKey('services').length), l: 'interpreting & translation services' },
              { v: String(byKey('interpreter').length), l: 'Korean cities with dedicated guides' },
              { v: 'KST', l: 'UTC+9, no daylight saving' },
            ].map((s) => (
              <li key={s.l} className="bg-brand-deep px-4 py-8 sm:px-8">
                <span className="font-serif text-[2.25rem] leading-none lining-nums text-white sm:text-[3rem]">
                  {s.v}
                </span>
                <span className="mt-4 block text-[0.9375rem] text-white/70">{s.l}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        aria-labelledby="en-services"
        className="scroll-mt-24 bg-white py-section"
      >
        <div className="shell">
          <SectionHeading
            eyebrow="Services"
            title={
              <span id="en-services">Interpreting and translation for every kind of meeting</span>
            }
            lead="Choose the setting that matches your visit. If you are unsure, tell us about the meeting and we will recommend one."
          />
          <ul className="mt-14 grid gap-px border-y border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {byKey('services').map((p, i) => (
              <Reveal as="li" key={p.slug} delay={(i % 3) * 80} className="list-none bg-white">
                <Link
                  href={enPath(p)}
                  className="card-line group flex h-full flex-col gap-4 px-1 py-9 sm:px-8 lg:py-11"
                >
                  <span className="font-serif text-[1.75rem] leading-none lining-nums text-brand/45">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-[1.0625rem] font-medium text-navy transition-colors duration-300 group-hover:text-brand">
                    {p.name}
                  </h3>
                  <p className="text-[0.9375rem] leading-[1.85] text-pretty text-navy/70">
                    {blurbs[p.slug] ?? p.lead}
                  </p>
                </Link>
              </Reveal>
            ))}
            {Array.from({ length: (3 - (byKey('services').length % 3)) % 3 }).map((_, i) => (
              <li key={`filler-${i}`} aria-hidden="true" className="hidden bg-white lg:block" />
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section
        aria-labelledby="en-process"
        className="border-y border-line bg-ivory-light py-section"
      >
        <div className="shell">
          <SectionHeading
            eyebrow="How it works"
            title={<span id="en-process">From first message to the day itself</span>}
          />
          <ol className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 90} className="list-none bg-ivory-light">
                <div className="px-1 py-9 sm:px-8 lg:py-11">
                  <span className="font-serif text-[1.75rem] leading-none lining-nums text-brand/45">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-5 text-[1.0625rem] font-medium text-navy">{s.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-[1.85] text-pretty text-navy/70">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Cities */}
      <section id="cities" aria-labelledby="en-cities" className="scroll-mt-24 bg-white py-section">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Cities"
              title={<span id="en-cities">Interpreters in Seoul and across Korea</span>}
              lead="Seoul and the capital area are our standard base. For other cities we confirm availability for your dates and language."
            />
          </div>
          <ul className="grid gap-px border-y border-line bg-line sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {byKey('interpreter').map((p) => (
              <li key={p.slug} className="bg-white">
                <Link
                  href={enPath(p)}
                  className="row-link px-1 py-5 text-[0.9375rem] text-navy sm:px-5"
                >
                  <span>{p.h1}</span>
                  <span aria-hidden="true" className="row-arrow">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Languages */}
      <section
        id="languages"
        aria-labelledby="en-languages"
        className="scroll-mt-24 border-y border-line bg-ivory-light py-section"
      >
        <div className="shell">
          <SectionHeading
            eyebrow="Languages"
            title={<span id="en-languages">Korean with {languages.length} languages</span>}
            lead="The pairs below have their own guides. If your language is not listed, ask us. We support many more, though availability varies."
          />
          <ul className="mt-14 grid grid-cols-1 gap-x-8 border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {byKey('language').map((p) => (
              <li key={p.slug} className="border-b border-line">
                <Link href={enPath(p)} className="row-link py-4 text-[0.9375rem] text-navy">
                  <span>{p.h1}</span>
                  <span aria-hidden="true" className="row-arrow">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        aria-labelledby="en-pricing"
        className="scroll-mt-24 bg-white py-section"
      >
        <div className="shell">
          <SectionHeading
            eyebrow="Pricing"
            title={<span id="en-pricing">Guide rates by level of preparation</span>}
            lead="Important meetings are not priced by the hour alone. The level depends on the preparation, the subject and the stakes."
          />
          <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">
            {enPricing.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 90}>
                <article
                  className={`flex h-full flex-col p-8 lg:p-10 ${
                    plan.highlight
                      ? 'border border-brand/30 border-t-2 border-t-brand-deep bg-white shadow-[0_28px_60px_-34px_rgba(23,59,94,0.38)]'
                      : 'border border-line bg-ivory-light'
                  }`}
                >
                  <h3 className="text-title font-medium tracking-tight text-navy">{plan.name}</h3>
                  <p className="mt-7">
                    <span className="block text-[1.5rem] font-semibold tracking-tight text-navy lg:text-[1.625rem]">
                      {plan.range}
                    </span>
                    <span className="mt-1.5 block text-[0.875rem] text-navy/65">
                      KRW {plan.unit}
                    </span>
                  </p>
                  <p className="mt-6 text-[0.9375rem] leading-[1.85] text-pretty text-navy/70">
                    {plan.fit}
                  </p>
                  <ul className="mt-8 flex flex-col gap-3.5 border-t border-line pt-7">
                    {plan.includes.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-[0.9375rem] leading-relaxed text-navy/80"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.6em] h-px w-3 shrink-0 bg-brand/55"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
          <ul className="mt-10 flex flex-col gap-2.5 border-t border-line pt-8">
            {enPricingNotes.map((n) => (
              <li
                key={n}
                className="flex gap-3 text-[0.875rem] leading-[1.85] text-pretty text-navy/65"
              >
                <span aria-hidden="true" className="text-navy/40">
                  ·
                </span>
                {n}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why */}
      <section aria-labelledby="en-why" className="border-y border-line bg-ivory-light py-section">
        <div className="shell">
          <SectionHeading
            eyebrow="Why CERTO AGENCY"
            title={<span id="en-why">What you can expect</span>}
          />
          <ul className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w, i) => (
              <Reveal as="li" key={w.title} delay={i * 90} className="list-none bg-ivory-light">
                <div className="px-1 py-9 sm:px-8 lg:py-11">
                  <h3 className="text-[1.0625rem] font-medium text-navy">{w.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-[1.85] text-pretty text-navy/70">
                    {w.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Guides */}
      <section id="guides" aria-labelledby="en-guides" className="scroll-mt-24 bg-white py-section">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Guides"
              title={<span id="en-guides">Planning an interpreted meeting in Korea</span>}
            />
          </div>
          <ul className="border-t border-line lg:col-span-7 lg:col-start-6">
            {byKey('guides').map((p) => (
              <li key={p.slug} className="border-b border-line">
                <Link href={enPath(p)} className="row-link py-5 text-[1rem] text-navy">
                  <span>{p.h1}</span>
                  <span aria-hidden="true" className="row-arrow">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="en-faq" className="border-y border-line bg-ivory-light py-section">
        <div className="shell">
          <SectionHeading
            eyebrow="FAQ"
            title={<span id="en-faq">Frequently asked questions</span>}
          />
          <div className="mt-14 border-t border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-line py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[1.0625rem] font-medium text-navy [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden="true" className="relative mt-2 block h-3 w-3 shrink-0">
                    <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current" />
                    <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-current transition-transform duration-500 ease-certo group-open:rotate-90 group-open:opacity-0" />
                  </span>
                </summary>
                <p className="mt-5 max-w-3xl text-[0.9375rem] leading-[1.9] text-pretty text-navy/70">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        aria-labelledby="en-contact"
        className="scroll-mt-24 bg-white py-section"
      >
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:sticky lg:top-[calc(var(--header-height)+2rem)] lg:col-span-4 lg:self-start">
            <SectionHeading
              eyebrow="Contact"
              title={<span id="en-contact">Request a quote</span>}
              lead="Tell us about your visit. We check interpreter availability for your dates and reply with a quote."
            />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <EnContactForm source="en-home" />
          </div>
        </div>
      </section>
    </main>
  );
}
