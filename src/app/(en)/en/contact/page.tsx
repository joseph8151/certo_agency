import type { Metadata } from 'next';
import EnContactForm from '@/components/en/EnContactForm';
import Reveal from '@/components/ui/Reveal';
import { enContact } from '@/data/en/site';

export const metadata: Metadata = {
  title: 'Request a quote | Interpreters in Korea',
  description:
    'Tell us your dates, city, languages and topic. We confirm interpreter availability in Korea and reply with a quote. CERTO AGENCY, Seoul.',
  alternates: { canonical: '/en/contact', languages: { en: '/en/contact' } },
};

export default function ContactPage() {
  return (
    <main id="main">
      <section className="hero-glow bg-white pt-[calc(var(--header-height)+3rem)] lg:pt-[calc(var(--header-height)+5rem)]">
        <div className="shell pb-section">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-gutter">
            <div className="lg:sticky lg:top-[calc(var(--header-height)+2rem)] lg:col-span-4 lg:self-start">
              <Reveal>
                <p className="eyebrow">Contact</p>
                <h1 className="mt-6 text-headline font-medium tracking-tight text-navy">
                  Request a quote
                </h1>
                <p className="mt-6 text-[1rem] leading-[1.9] text-pretty text-navy/70">
                  Tell us about your visit. We check interpreter availability for your dates and
                  reply with a quote.
                </p>
              </Reveal>
              <dl className="mt-10 space-y-6 border-t border-line pt-8 text-[0.9375rem] text-navy/80">
                <div>
                  <dt className="text-[0.75rem] font-semibold tracking-[0.04em] text-brand">
                    Email
                  </dt>
                  <dd className="mt-2">
                    <a href={`mailto:${enContact.email}`} className="link-underline">
                      {enContact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.75rem] font-semibold tracking-[0.04em] text-brand">
                    Phone
                  </dt>
                  <dd className="mt-2">
                    {enContact.phone}
                    <span className="mt-1 block text-[0.8125rem] text-navy/60">
                      {enContact.hours}
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.75rem] font-semibold tracking-[0.04em] text-brand">
                    Office
                  </dt>
                  <dd className="mt-2 leading-relaxed">{enContact.address}</dd>
                </div>
              </dl>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <EnContactForm source="en-contact-page" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
