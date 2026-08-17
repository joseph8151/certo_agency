import Link from 'next/link';
import { businessInfo, contactInfo, footerNavigation, site } from '@/data/site';

export default function Footer() {
  const year = new Date().getFullYear();
  const filledBusinessInfo = businessInfo.filter((item) => item.value);

  return (
    <footer className="border-t border-line bg-ivory-light">
      <div className="shell py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-gutter">
          {/* 브랜드 */}
          <div className="lg:col-span-5">
            <p className="text-[1.0625rem] font-semibold tracking-[0.3em] text-navy">CERTO</p>
            <p className="mt-1 text-[0.6875rem] font-medium tracking-[0.42em] text-brand/80">
              AGENCY
            </p>
            <p className="mt-6 max-w-sm text-[0.875rem] leading-relaxed text-navy/70">
              {site.tagline}
            </p>
            <p className="mt-4 max-w-sm font-serif text-[0.9375rem] italic leading-relaxed text-brand">
              {site.promise}
            </p>
          </div>

          {/* 메뉴 */}
          <nav aria-label="푸터 메뉴" className="lg:col-span-3">
            <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-navy/65">
              Menu
            </h2>
            <ul className="mt-5 space-y-3">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-[0.875rem] text-navy/75 transition-colors duration-300 hover:text-navy"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 연락처 */}
          <div className="lg:col-span-3 lg:col-start-10">
            <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-navy/65">
              Contact
            </h2>
            <ul className="mt-5 space-y-3 text-[0.875rem] text-navy/75">
              {contactInfo.email ? (
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    data-cta="footer-email"
                    className="link-underline"
                  >
                    {contactInfo.email}
                  </a>
                </li>
              ) : null}
              {contactInfo.phone ? (
                <li>
                  <a
                    href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`}
                    data-cta="footer-phone"
                    className="link-underline"
                  >
                    {contactInfo.phone}
                  </a>
                </li>
              ) : null}
              {contactInfo.address ? <li className="leading-relaxed">{contactInfo.address}</li> : null}
            </ul>

            <Link
              href="#contact"
              data-cta="footer-primary"
              className="mt-7 inline-block border-b border-brand pb-1 text-[0.875rem] font-medium text-brand"
            >
              프로젝트 문의하기
            </Link>
          </div>
        </div>

        {/* 사업자 정보 — src/data/site.ts 의 businessInfo 를 채우면 노출됩니다. */}
        {filledBusinessInfo.length > 0 ? (
          <dl className="mt-14 flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-8 text-[0.75rem] text-navy/65">
            {filledBusinessInfo.map((item) => (
              <div key={item.label} className="flex gap-2">
                <dt>{item.label}</dt>
                <dd className="text-navy/70">{item.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.75rem] tracking-wide text-navy/65">
            CERTO AGENCY · Interpretation · Translation · Global Language Support
          </p>
          <p className="text-[0.75rem] tracking-wide text-navy/65">
            © {year} CERTO AGENCY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
