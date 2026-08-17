import Link from 'next/link';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'ghost' | 'invert' | 'invertOutline';

type CtaProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  /**
   * CTA 추적용 식별자.
   * data-cta 속성으로 출력되어 GA4 / GTM 등에서 클릭 이벤트를 구분할 수 있습니다.
   * 예) GTM 트리거: Click Element matches CSS selector `[data-cta]`
   */
  track: string;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'children' | 'className'>;

const base =
  'group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-xs px-7 py-4 text-[0.9375rem] font-medium tracking-tight transition-all duration-500 ease-certo';

const variants: Record<Variant, string> = {
  primary: 'bg-brand text-white hover:bg-brand-deep',
  outline: 'border border-line-strong text-navy hover:border-brand hover:text-brand',
  ghost: 'px-0 py-2 text-navy hover:text-brand',
  invert: 'bg-white text-brand-deep hover:bg-ivory',
  invertOutline: 'border border-line-invert text-white hover:border-white hover:bg-white/10',
};

/** 사이트 전역 CTA 버튼 — 추적 가능한 구조로 통일합니다. */
export default function Cta({
  href,
  children,
  variant = 'primary',
  track,
  className = '',
  ...rest
}: CtaProps) {
  const isInternal = href.startsWith('/') || href.startsWith('#');
  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="translate-x-0 transition-transform duration-500 ease-certo group-hover:translate-x-1"
      >
        →
      </span>
    </>
  );

  if (isInternal) {
    return (
      <Link href={href} data-cta={track} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} data-cta={track} className={classes} rel="noopener noreferrer" {...rest}>
      {content}
    </a>
  );
}
