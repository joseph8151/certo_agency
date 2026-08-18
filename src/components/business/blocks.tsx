import type { ReactNode } from 'react';
import Reveal from '../ui/Reveal';

/**
 * 기업 페이지 전용 레이아웃 블록
 * ─────────────────────────────────────────────
 * 섹션 수가 많은 페이지라 같은 형태가 반복되면 금방 단조로워집니다.
 * 배경과 배치를 바꿔 끼울 수 있도록 공통 블록으로 분리했습니다.
 */

export type Tone = 'white' | 'ivory' | 'ivoryLight' | 'soft' | 'deep';

const TONE_CLASS: Record<Tone, string> = {
  white: 'bg-white',
  ivory: 'bg-ivory',
  ivoryLight: 'bg-ivory-light',
  soft: 'bg-brand-soft/50',
  deep: 'on-dark bg-brand-deep text-white',
};

export function Section({
  id,
  tone = 'white',
  labelledBy,
  className = '',
  children,
}: {
  id?: string;
  tone?: Tone;
  labelledBy?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${TONE_CLASS[tone]} scroll-mt-28 py-section ${className}`}
    >
      <div className="shell">{children}</div>
    </section>
  );
}

/** 줄바꿈(\n)을 살려 렌더링합니다. */
export function MultilineHeading({
  id,
  text,
  invert = false,
  className = '',
}: {
  id?: string;
  text: string;
  invert?: boolean;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={`text-headline font-semibold ${invert ? 'text-white' : 'text-navy'} ${className}`}
    >
      {text.split('\n').map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </h2>
  );
}

export function Eyebrow({ children, invert = false }: { children: ReactNode; invert?: boolean }) {
  return <p className={invert ? 'eyebrow-invert' : 'eyebrow'}>{children}</p>;
}

/** 좌: 제목 / 우: 본문 — 이 페이지의 기본 리듬 */
export function SplitIntro({
  eyebrow,
  heading,
  headingId,
  paragraphs,
  invert = false,
  aside,
}: {
  eyebrow: string;
  heading: string;
  headingId?: string;
  paragraphs: readonly string[];
  invert?: boolean;
  aside?: ReactNode;
}) {
  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-gutter">
      <div className="lg:col-span-5">
        <Reveal>
          <Eyebrow invert={invert}>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <MultilineHeading id={headingId} text={heading} invert={invert} className="mt-6" />
        </Reveal>
      </div>

      <div className="lg:col-span-6 lg:col-start-7">
        {paragraphs.map((paragraph, i) => (
          <Reveal key={paragraph.slice(0, 14)} delay={i * 90}>
            <p
              className={`text-[1.0625rem] leading-[1.95] text-pretty ${i > 0 ? 'mt-6' : ''} ${
                invert ? 'text-white/75' : 'text-navy/70'
              }`}
            >
              {paragraph}
            </p>
          </Reveal>
        ))}
        {aside}
      </div>
    </div>
  );
}

/** 헤어라인 그리드 — 항목 수가 열 수의 배수가 아니어도 배경이 비치지 않습니다. */
export function HairlineGrid({
  columns,
  tone = 'white',
  children,
  count,
  className = '',
}: {
  columns: 2 | 3 | 4;
  tone?: Exclude<Tone, 'deep'>;
  count: number;
  children: ReactNode;
  className?: string;
}) {
  const cols = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  }[columns];

  const fillerBg = {
    white: 'bg-white',
    ivory: 'bg-ivory',
    ivoryLight: 'bg-ivory-light',
    soft: 'bg-[#F4F8FC]',
  }[tone];

  const fillers = (columns - (count % columns)) % columns;

  return (
    <div className={`grid gap-px border-t border-line bg-line ${cols} ${className}`}>
      {children}
      {Array.from({ length: fillers }).map((_, i) => (
        <div
          key={`filler-${i}`}
          aria-hidden="true"
          className={`hidden ${fillerBg} ${columns === 2 ? 'sm:block' : 'lg:block'}`}
        />
      ))}
    </div>
  );
}

/** 영문 라벨 + 국문 설명 카드 */
export function LabelCard({
  en,
  ko,
  index = 0,
  tone = 'white',
}: {
  en: string;
  ko: string;
  index?: number;
  tone?: Exclude<Tone, 'deep'>;
}) {
  const bg = {
    white: 'bg-white',
    ivory: 'bg-ivory',
    ivoryLight: 'bg-ivory-light',
    soft: 'bg-[#F4F8FC]',
  }[tone];

  return (
    <Reveal delay={(index % 3) * 80} className={bg}>
      <div className="flex h-full flex-col gap-3 py-8 sm:px-6 lg:py-10">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-brand">
          {en}
        </p>
        <p className="text-[0.9375rem] leading-[1.8] text-pretty text-navy/70">{ko}</p>
      </div>
    </Reveal>
  );
}

/** 단순 체크 목록 — 기업 지원 항목 등 */
export function CheckList({
  items,
  columns = 3,
  tone = 'white',
}: {
  items: readonly string[];
  columns?: 2 | 3 | 4;
  tone?: Exclude<Tone, 'deep'>;
}) {
  const bg = {
    white: 'bg-white',
    ivory: 'bg-ivory',
    ivoryLight: 'bg-ivory-light',
    soft: 'bg-[#F4F8FC]',
  }[tone];

  return (
    <HairlineGrid columns={columns} tone={tone} count={items.length}>
      {items.map((item, i) => (
        <Reveal as="li" key={item} delay={(i % columns) * 70} className={`${bg} list-none`}>
          <div className="flex h-full items-start gap-3 py-5 sm:px-5">
            <span aria-hidden="true" className="mt-[0.4rem] block h-px w-3 shrink-0 bg-brand/45" />
            <span className="text-[0.9375rem] leading-snug text-navy/80">{item}</span>
          </div>
        </Reveal>
      ))}
    </HairlineGrid>
  );
}

/** 반전 섹션용 목록 */
export function InvertList({ items, columns = 2 }: { items: readonly string[]; columns?: 1 | 2 }) {
  return (
    <ul className={`grid gap-x-gutter ${columns === 2 ? 'sm:grid-cols-2' : ''}`}>
      {items.map((item, i) => (
        <Reveal as="li" key={item} delay={(i % 4) * 70}>
          <div className="flex items-start gap-3 border-b border-line-invert py-4">
            <span aria-hidden="true" className="mt-[0.45rem] block h-px w-3 shrink-0 bg-white/40" />
            <span className="text-[0.9375rem] leading-snug text-white/85">{item}</span>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

/** 영문 대문자 태그 줄 */
export function TagRow({ items, invert = false }: { items: readonly string[]; invert?: boolean }) {
  return (
    <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {items.map((item, i) => (
        <li key={item} className="flex items-center gap-5">
          {i > 0 ? (
            <span
              aria-hidden="true"
              className={`hidden h-3 w-px sm:block ${invert ? 'bg-white/25' : 'bg-line-strong'}`}
            />
          ) : null}
          <span
            className={`text-[0.6875rem] font-semibold uppercase tracking-[0.2em] ${
              invert ? 'text-white/70' : 'text-brand'
            }`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** 영문 세리프 카피 */
export function SerifCopy({
  text,
  invert = false,
  className = '',
}: {
  text: string;
  invert?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`font-serif text-title italic leading-[1.35] ${
        invert ? 'text-white/95' : 'text-brand'
      } ${className}`}
    >
      {text.split('\n').map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </p>
  );
}
