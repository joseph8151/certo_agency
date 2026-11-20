'use client';

import type { ReactNode } from 'react';

/** 눌렀을 때 한 번 더 확인하는 버튼 — 삭제처럼 되돌릴 수 없는 동작에 씁니다. */
export default function ConfirmButton({
  message,
  className,
  children,
}: {
  message: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="submit"
      className={className}
      onClick={(e) => {
        if (!window.confirm(message)) e.preventDefault();
      }}
    >
      {children}
    </button>
  );
}
