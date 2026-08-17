'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { cta, navigation, site } from '@/data/site';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 모바일 메뉴가 열려 있는 동안 배경 스크롤 잠금
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-certo ${
        scrolled || open
          ? 'border-b border-line bg-white/95 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="shell flex h-[var(--header-height)] items-center justify-between gap-6">
        {/* 로고 */}
        <Link
          href="#top"
          onClick={() => setOpen(false)}
          className="group flex shrink-0 flex-col leading-[1.05]"
          aria-label={`${site.name} 홈으로 이동`}
        >
          <span className="text-[0.95rem] font-semibold tracking-[0.34em] text-navy">CERTO</span>
          <span className="text-[0.6rem] font-medium tracking-[0.42em] text-brand/80">AGENCY</span>
        </Link>

        {/* 데스크톱 네비게이션 */}
        <nav aria-label="주요 메뉴" className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
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
            href={cta.href}
            data-cta="header-primary"
            className="hidden rounded-xs bg-brand px-6 py-3 text-[0.8125rem] font-medium text-white transition-colors duration-500 ease-certo hover:bg-brand-deep md:inline-block"
          >
            {cta.primary}
          </Link>

          {/* 햄버거 */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
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

      {/* 모바일 메뉴 */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-var(--header-height))] overflow-y-auto border-t border-line bg-white lg:hidden"
      >
        <nav aria-label="모바일 메뉴" className="shell flex flex-col py-6">
          {navigation.map((item, i) => (
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
            href={cta.href}
            data-cta="mobile-menu-primary"
            onClick={() => setOpen(false)}
            className="mt-8 rounded-xs bg-brand px-6 py-5 text-center text-base font-medium text-white"
          >
            {cta.primary}
          </Link>

          <p className="mt-6 pb-4 text-center text-xs leading-relaxed tracking-wide text-navy/65">
            Interpretation · Translation
            <br />
            Global Language Support
          </p>
        </nav>
      </div>
    </header>
  );
}
