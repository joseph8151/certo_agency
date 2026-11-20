import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const metadata: Metadata = {
  title: '게시판 관리 | CERTO AGENCY',
  robots: { index: false, follow: false, nocache: true },
};

/** 관리자 화면 전용 root layout — 사이트 헤더 · 푸터 없이 간단하게 둡니다. */
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-screen bg-ivory-light font-sans text-navy">{children}</body>
    </html>
  );
}
