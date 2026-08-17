import type { ReactNode } from 'react';
import Reveal from './Reveal';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  /** 영문 세리프 헤드라인 — 브랜드 포인트로 제한적으로 사용합니다. */
  serifTitle?: string;
  lead?: ReactNode;
  align?: 'left' | 'center';
  invert?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  serifTitle,
  lead,
  align = 'left',
  invert = false,
  className = '',
}: Props) {
  return (
    <header
      className={`${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}
    >
      {eyebrow ? (
        <Reveal>
          <p className={invert ? 'eyebrow-invert' : 'eyebrow'}>{eyebrow}</p>
        </Reveal>
      ) : null}

      {serifTitle ? (
        <Reveal delay={60}>
          <p
            className={`mt-5 font-serif text-headline italic ${invert ? 'text-white/90' : 'text-brand'}`}
          >
            {serifTitle}
          </p>
        </Reveal>
      ) : null}

      <Reveal delay={serifTitle ? 120 : 80}>
        <h2
          className={`${serifTitle ? 'mt-3' : 'mt-6'} text-headline font-semibold ${
            invert ? 'text-white' : 'text-navy'
          }`}
        >
          {title}
        </h2>
      </Reveal>

      {lead ? (
        <Reveal delay={160}>
          <div
            className={`mt-7 max-w-prose text-[1.0625rem] leading-[1.85] text-pretty ${
              invert ? 'text-white/75' : 'text-navy/70'
            } ${align === 'center' ? 'mx-auto' : ''}`}
          >
            {lead}
          </div>
        </Reveal>
      ) : null}
    </header>
  );
}
