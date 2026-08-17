'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { cta } from '@/data/site';

/**
 * 모바일 하단 고정 상담 버튼.
 * Hero를 지난 뒤 등장하고, 문의 폼에 도달하면 스스로 사라집니다.
 */
export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const contact = document.getElementById('contact');

    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.85;
      const atContact = contact
        ? contact.getBoundingClientRect().top < window.innerHeight * 0.9
        : false;
      setVisible(pastHero && !atContact);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md transition-all duration-500 ease-certo md:hidden ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0'
      }`}
      aria-hidden={!visible}
    >
      <Link
        href={cta.href}
        data-cta="sticky-mobile"
        tabIndex={visible ? 0 : -1}
        className="flex w-full items-center justify-center gap-2 rounded-xs bg-brand px-6 py-4 text-[0.9375rem] font-medium text-white"
      >
        {cta.primary}
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
