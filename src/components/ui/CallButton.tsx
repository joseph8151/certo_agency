import { telHref } from '@/lib/phone';

type Variant = 'solid' | 'outline' | 'invert' | 'invertOutline' | 'icon';

type CallButtonProps = {
  phone: string;
  /** 버튼 앞 문구. 예) 전화 상담 */
  label?: string;
  /** 번호 아래 작은 안내. 예) 평일 09:00 – 18:00 */
  hours?: string;
  variant?: Variant;
  /** GA4 / GTM 클릭 추적용 data-cta */
  track: string;
  ariaLabel?: string;
  className?: string;
};

const base =
  'inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-xs font-medium tracking-tight transition-all duration-500 ease-certo';

const variants: Record<Variant, string> = {
  solid: 'bg-brand-deep px-7 py-4 text-[0.9375rem] text-white hover:bg-brand',
  outline:
    'border border-brand/40 px-7 py-4 text-[0.9375rem] text-brand-deep hover:border-brand hover:bg-brand/5',
  invert: 'bg-white px-7 py-4 text-[0.9375rem] text-brand-deep hover:bg-ivory',
  invertOutline:
    'border border-line-invert px-7 py-4 text-[0.9375rem] text-white hover:border-white hover:bg-white/10',
  icon: 'h-11 w-11 bg-brand-deep text-white hover:bg-brand',
};

export function PhoneIcon({ className = 'h-[1.05em] w-[1.05em]' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

/**
 * 탭하면 바로 전화가 걸리는 버튼 (tel: 링크).
 * 모바일에서는 전화 앱이 열리고, PC 에서는 설치된 전화 · 메신저 앱으로 연결됩니다.
 */
export default function CallButton({
  phone,
  label,
  hours,
  variant = 'solid',
  track,
  ariaLabel,
  className = '',
}: CallButtonProps) {
  const href = telHref(phone);
  if (!href) return null;

  return (
    <a
      href={href}
      data-cta={track}
      aria-label={ariaLabel ?? `${label ? `${label} ` : ''}${phone}`}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <PhoneIcon className={variant === 'icon' ? 'h-5 w-5' : undefined} />
      {variant === 'icon' ? null : (
        <span className="flex flex-col items-start leading-tight">
          <span className="tabular-nums">
            {label ? <span className="mr-2 opacity-80">{label}</span> : null}
            {phone}
          </span>
          {hours ? <span className="mt-0.5 text-[0.6875rem] font-normal opacity-70">{hours}</span> : null}
        </span>
      )}
    </a>
  );
}
