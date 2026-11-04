import Link from 'next/link';
import { enContact, enNavigation, enSite } from '@/data/en/site';

export default function EnFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ivory-light">
      <div className="shell py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-5">
            <p className="text-[1.0625rem] font-semibold tracking-[0.3em] text-navy">CERTO</p>
            <p className="mt-1 text-[0.6875rem] font-medium tracking-[0.42em] text-brand/80">
              AGENCY
            </p>
            <p className="mt-5 max-w-sm text-[0.9375rem] font-medium leading-relaxed text-brand">
              {enSite.tagline}
            </p>
            <p className="mt-4 max-w-sm text-[0.875rem] leading-relaxed text-navy/70">
              Business interpreters and translators in Seoul and across Korea, matched to your
              industry and your meeting.
            </p>
          </div>

          <nav aria-label="Footer menu" className="lg:col-span-3">
            <h2 className="text-[0.75rem] font-semibold tracking-[0.04em] text-navy/65">Explore</h2>
            <ul className="mt-5 space-y-3">
              {enNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-[0.875rem] text-navy/75 transition-colors duration-300 hover:text-navy"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/"
                  hrefLang="ko"
                  lang="ko"
                  className="link-underline text-[0.875rem] text-navy/75 transition-colors duration-300 hover:text-navy"
                >
                  한국어
                </Link>
              </li>
            </ul>
          </nav>

          <div className="lg:col-span-3 lg:col-start-10">
            <h2 className="text-[0.75rem] font-semibold tracking-[0.04em] text-navy/65">Contact</h2>
            <ul className="mt-5 space-y-3 text-[0.875rem] text-navy/75">
              <li>
                <a
                  href={`mailto:${enContact.email}`}
                  data-cta="en-footer-email"
                  className="link-underline"
                >
                  {enContact.email}
                </a>
              </li>
              <li className="leading-relaxed">{enContact.address}</li>
            </ul>
            <Link
              href="/en/contact"
              data-cta="en-footer-primary"
              className="mt-7 inline-block border-b border-brand pb-1 text-[0.875rem] font-medium text-brand"
            >
              Request a quote
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.75rem] tracking-wide text-navy/65">
            {enSite.name} · operated by {enSite.legalName} · Seoul, Republic of Korea
          </p>
          <p className="text-[0.75rem] tracking-wide text-navy/65">
            © {year} CERTO AGENCY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
