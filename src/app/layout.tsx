import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { faqs } from '@/data/content';
import { contactInfo, site } from '@/data/site';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-cormorant',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'CERTO AGENCY | 국내·해외 전문 통역 번역 에이전시',
    template: '%s | CERTO AGENCY',
  },
  description:
    '국내 통역부터 해외 출장, 국제회의, 기업 미팅, 전문 번역까지. CERTO AGENCY가 프로젝트에 적합한 전문 통역사와 번역가를 선별하여 매칭합니다.',
  keywords: [
    '전문 통역',
    '통역 에이전시',
    '기업 통역',
    '영어 통역',
    '해외 통역',
    '출장 통역',
    '수행 통역',
    '비즈니스 통역',
    '국제회의 통역',
    '전시회 통역',
    '전문 번역',
    '기업 번역',
    '영어 번역',
    '통역사 섭외',
    '통역사 매칭',
    '해외 통역사',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: 'CERTO AGENCY | 국내·해외 전문 통역 번역 에이전시',
    description:
      '국내 통역부터 해외 출장, 국제회의, 기업 미팅, 전문 번역까지. 프로젝트에 적합한 전문 통역사와 번역가를 선별하여 매칭합니다.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CERTO AGENCY | 국내·해외 전문 통역 번역 에이전시',
    description:
      '프로젝트에 적합한 전문 통역사와 번역가를 선별하여 매칭하는 글로벌 랭귀지 에이전시.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

/** 구조화 데이터 — 검색 결과에서 조직/서비스/FAQ 를 인식하도록 합니다. */
function StructuredData() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${site.url}#organization`,
    name: site.name,
    alternateName: site.nameKo,
    url: site.url,
    description:
      '국내·해외 통역과 전문 번역을 제공하는 글로벌 랭귀지 에이전시. 프로젝트에 적합한 통역사와 번역가를 선별하여 매칭합니다.',
    slogan: site.promise,
    areaServed: ['KR', 'North America', 'Europe', 'Asia', 'Middle East', 'Oceania'],
    knowsLanguage: ['ko', 'en', 'ja', 'zh'],
    ...(contactInfo.email ? { email: contactInfo.email } : {}),
    ...(contactInfo.phone ? { telephone: contactInfo.phone } : {}),
    makesOffer: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '국내 통역 서비스' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '해외 통역 서비스' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '기업 전문 통번역' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '전문 문서 번역' } },
    ],
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        {/*
          Pretendard — 한글 본문 서체. dynamic subset 이라 실제로 사용된 글자만 내려받습니다.
          폐쇄망/오프라인 배포 시에는 아래 두 줄을 지우고 폰트를 self-host 하세요.
        */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xs focus:bg-brand focus:px-5 focus:py-3 focus:text-sm focus:text-white"
        >
          본문 바로가기
        </a>
        {children}
        <StructuredData />
      </body>
    </html>
  );
}
