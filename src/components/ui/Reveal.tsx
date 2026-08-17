'use client';

import { useEffect, useRef, type ElementType, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  /** 지연 시간(ms) — 목록 항목을 순차적으로 등장시킬 때 사용합니다. */
  delay?: number;
  as?: ElementType;
  className?: string;
};

/**
 * 스크롤 진입 시 Fade Up.
 * 과한 움직임 없이, 느긋하게 한 번만 재생됩니다.
 * prefers-reduced-motion 사용자에게는 애니메이션이 적용되지 않습니다. (globals.css)
 */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // JS 비활성 환경 대비: 관찰 전에는 CSS가 숨기고 있으므로 즉시 보정 가능하도록 처리
    if (typeof IntersectionObserver === 'undefined') {
      node.dataset.reveal = 'shown';
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.reveal = 'shown';
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
}
