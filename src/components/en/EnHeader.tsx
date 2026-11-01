'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { enCta, enNavigation } from '@/data/en/site';

export default function EnHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-line bg-white/95 backdrop-blur-md transition-all duration-500 ease-certo ${
        scrolled || open ? '' : 'bg-white/80'
      }`}
    >
      <div className="shell flex h-[var(--header-height)] items-center justify-between gap-6">
        <Link
          href="/en"
          onClick={() => setOpen(false)}
          className="flex shrink-0 flex-col leading-[1.05]"
          aria-label="CERTO AGENCY home"
        >
          <span className="text-[0.95rem] font-semibold tracking-[0.34em] text-navy">CERTO</span>
          <span className="text-[0.6rem] font-medium tracking-[0.42em] text-brand/80">AGENCY</span>
        </Link>

        <nav aria-label="Main menu" className="hidden items-center gap-8 lg:flex">
          {enNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-underline text-[0.8125rem] font-medium tracking-wide text-navy/75 transition-colors duration-300 hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            hrefLang="ko"
            lang="ko"
            data-cta="en-header-lang"
            className="hidden text-[0.8125rem] font-medium tracking-wide text-navy/60 transition-colors duration-300 hover:text-navy md:inline-block"
          >
            한국어
          </Link>
          <Link
            href={enCta.href}
            data-cta="en-header-primary"
            className="hidden rounded-xs bg-brand-deep px-6 py-3 text-[0.8125rem] font-medium text-white transition-colors duration-500 ease-certo hover:bg-brand md:inline-block"
          >
            {enCta.label}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="en-mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span
              className={`block h-px w-6 bg-navy transition-transform duration-300 ease-certo ${open ? 'translate-y-[6px] rotate-45' : ''}`}
            />
            <span
              className={`block h-px w-6 bg-navy transition-opacity duration-300 ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-px w-6 bg-navy transition-transform duration-300 ease-certo ${open ? '-translate-y-[6px] -rotate-45' : ''}`}
            />
          </button>
        </div>
      </div>

      <div
        id="en-mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-var(--header-height))] overflow-y-auto border-t border-line bg-white lg:hidden"
      >
        <nav aria-label="Mobile menu" className="shell flex flex-col py-6">
          {enNavigation.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between border-b border-line py-5 text-xl font-medium text-navy"
            >
              <span>{item.label}</span>
              <span className="text-[0.6875rem] tracking-[0.2em] text-brand/50">
                {String(i + 1).padStart(2, '0')}
              </span>
            </Link>
          ))}
          <Link
            href={enCta.href}
            data-cta="en-mobile-menu-primary"
            onClick={() => setOpen(false)}
            className="mt-8 rounded-xs bg-brand-deep px-6 py-5 text-center text-base font-medium text-white"
          >
            {enCta.label}
          </Link>
          <Link
            href="/"
            hrefLang="ko"
            lang="ko"
            onClick={() => setOpen(false)}
            className="mt-5 py-3 text-center text-sm text-navy/60"
          >
            한국어
          </Link>
        </nav>
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-1px] h-px origin-left bg-brand"
        style={{ transform: `scaleX(${progress})`, opacity: scrolled ? 1 : 0 }}
      />
    </header>
  );
}
