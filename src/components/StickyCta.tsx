'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { contactInfo, cta } from '@/data/site';
import { enCta, enContact } from '@/data/en/site';
import { smsHref, telHref } from '@/lib/phone';
import { MessageIcon, PhoneIcon } from './ui/CallButton';

const copy = {
  ko: {
    call: '전화',
    sms: '문자',
    callAria: `전화 상담 ${contactInfo.phone}`,
    inquiry: '상담 신청',
    href: cta.href,
    phone: contactInfo.phone,
    hours: contactInfo.phoneHours,
  },
  en: {
    call: 'Call',
    sms: 'Text',
    callAria: `Call CERTO AGENCY ${enContact.phone}`,
    inquiry: 'Get a quote',
    href: enCta.href,
    phone: enContact.phone,
    hours: '',
  },
} as const;

/**
 * 하단 고정 상담 바.
 * - 모바일: [전화] [상담 신청] 두 버튼. 전화는 탭하면 바로 걸립니다.
 * - PC: 우측 하단의 전화 버튼 한 개.
 * Hero를 지난 뒤 등장하고, 문의 폼에 도달하면 스스로 사라집니다.
 */
export default function StickyCta({ locale = 'ko' }: { locale?: 'ko' | 'en' }) {
  const t = copy[locale];
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const tel = telHref(t.phone);
  const sms = smsHref(t.phone);
  const onEnContact = locale === 'en' && pathname.startsWith('/en/contact');

  useEffect(() => {
    const contact = document.getElementById('contact');

    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.6;
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
  }, [pathname]);

  if (onEnContact) return null;

  return (
    <>
      {/* 모바일 하단 바 */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-line bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md transition-all duration-500 ease-certo md:hidden ${
          visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0'
        }`}
        aria-hidden={!visible}
      >
        {tel ? (
          <a
            href={tel}
            data-cta="sticky-phone-mobile"
            aria-label={t.callAria}
            tabIndex={visible ? 0 : -1}
            className="flex flex-1 items-center justify-center gap-2 rounded-xs border border-brand/40 bg-white px-4 py-4 text-[0.9375rem] font-semibold text-brand-deep"
          >
            <PhoneIcon />
            {t.call}
          </a>
        ) : null}
        {sms ? (
          <a
            href={sms}
            data-cta="sticky-sms-mobile"
            aria-label={`${t.sms} ${t.phone}`}
            tabIndex={visible ? 0 : -1}
            className="flex flex-1 items-center justify-center gap-2 rounded-xs border border-brand/40 bg-white px-4 py-4 text-[0.9375rem] font-semibold text-brand-deep"
          >
            <MessageIcon />
            {t.sms}
          </a>
        ) : null}
        <Link
          href={t.href}
          data-cta="sticky-mobile"
          tabIndex={visible ? 0 : -1}
          className="flex flex-[1.8] items-center justify-center gap-2 rounded-xs bg-brand-deep px-4 py-4 text-[0.9375rem] font-medium text-white"
        >
          {t.inquiry}
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      {/* PC 플로팅 전화 버튼 */}
      {tel ? (
        <a
          href={tel}
          data-cta="sticky-phone-desktop"
          aria-label={t.callAria}
          tabIndex={visible ? 0 : -1}
          aria-hidden={!visible}
          className={`fixed bottom-8 right-8 z-40 hidden items-center gap-3 rounded-full bg-brand-deep py-3 pl-4 pr-6 text-white shadow-[0_10px_30px_-12px_rgba(10,25,60,0.55)] transition-all duration-500 ease-certo hover:bg-brand md:flex ${
            visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
          }`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
            <PhoneIcon className="h-[1.1rem] w-[1.1rem]" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[0.6875rem] opacity-75">
              {locale === 'en' ? 'Call us' : '전화 상담'}
            </span>
            <span className="text-[0.9375rem] font-semibold tabular-nums tracking-wide">
              {t.phone}
            </span>
          </span>
        </a>
      ) : null}
    </>
  );
}
