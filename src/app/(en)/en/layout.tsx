import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import '../../globals.css';
import EnFooter from '@/components/en/EnFooter';
import EnHeader from '@/components/en/EnHeader';
import { enContact, enSite } from '@/data/en/site';
import { postalAddress, site } from '@/data/site';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-cormorant',
});

const title = 'CERTO AGENCY | Business Interpreters & Translators in Korea';
const description =
  'Hire a business interpreter in Seoul or anywhere in Korea. Korean–English, Japanese, Chinese and 36 more languages, matched to your industry. Request a quote.';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: '%s | CERTO AGENCY' },
  description,
  alternates: { canonical: '/en', languages: { en: '/en', ko: '/', 'x-default': '/en' } },
  openGraph: {
    type: 'website',
    locale: enSite.locale,
    url: enSite.url,
    siteName: enSite.name,
    title,
    description,
  },
  twitter: { card: 'summary_large_image', title, description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = { themeColor: '#ffffff' };

/** 영문 조직 구조화 데이터 — 모든 영문 페이지 공통 */
function OrganizationSchema() {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${enSite.url}#organization`,
    name: enSite.name,
    legalName: enSite.legalName,
    url: enSite.url,
    description,
    slogan: enSite.tagline,
    areaServed: { '@type': 'Country', name: 'South Korea' },
    availableLanguage: ['Korean', 'English'],
    knowsLanguage: ['ko', 'en', 'ja', 'zh', 'vi', 'de', 'fr', 'es', 'ar', 'ru', 'id'],
    knowsAbout: [
      'Business interpreting in Korea',
      'Simultaneous interpreting',
      'Consecutive interpreting',
      'Trade show interpreting',
      'Factory audit interpreting',
      'Korean document translation',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '39-26 Gangnam-daero 8-gil, 2F A9',
      addressLocality: 'Seocho-gu',
      addressRegion: 'Seoul',
      addressCountry: postalAddress.addressCountry,
    },
    email: enContact.email,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
  );
}

export default function EnRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xs focus:bg-brand focus:px-5 focus:py-3 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <EnHeader />
        {children}
        <EnFooter />
        <OrganizationSchema />
      </body>
    </html>
  );
}
