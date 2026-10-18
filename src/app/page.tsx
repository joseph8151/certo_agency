import Business from '@/components/Business';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import CorporateRetainer from '@/components/CorporateRetainer';
import DomesticInterpretation from '@/components/DomesticInterpretation';
import FAQ from '@/components/FAQ';
import FinalCta from '@/components/FinalCta';
import GlobalInterpretation from '@/components/GlobalInterpretation';
import Hero from '@/components/Hero';
import Industries from '@/components/Industries';
import MatchingProcess from '@/components/MatchingProcess';
import PremiumService from '@/components/PremiumService';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import QualityStandard from '@/components/QualityStandard';
import Services from '@/components/Services';
import TrustBar from '@/components/TrustBar';
import UseCases from '@/components/UseCases';
import WhyCerto from '@/components/WhyCerto';
import { faqs } from '@/data/content';
import { pricingFaqs, pricingIntro, pricingPlans } from '@/data/pricing';
import { site } from '@/data/site';

/**
 * FAQ 가 실제로 존재하는 홈에서만 FAQPage 구조화 데이터를 출력합니다.
 * 한 페이지에 FAQPage 는 하나여야 하므로, 프리미엄 섹션의 문답도 여기에 합칩니다.
 */
function FaqSchema() {
  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...faqs, ...pricingFaqs].map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
    />
  );
}

/**
 * 요금 구조화 데이터.
 * 금액은 src/data/pricing.ts 의 priceMin / priceMax 를 그대로 씁니다.
 * 화면 표기와 어긋나면 검색 결과에 잘못된 가격이 노출되므로 한 곳에서만 관리합니다.
 */
function PricingSchema() {
  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: pricingIntro.title,
    serviceType: '프리미엄 통역',
    description: pricingIntro.lead,
    url: `${site.url}/#premium`,
    provider: { '@id': `${site.url}#organization` },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: pricingIntro.title,
      itemListElement: pricingPlans.map((plan) => ({
        '@type': 'Offer',
        name: plan.name,
        description: plan.description,
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'KRW',
          minPrice: plan.priceMin,
          // 상한이 없는 플랜은 maxPrice 를 싣지 않습니다. (…이상)
          ...(plan.priceMax ? { maxPrice: plan.priceMax } : {}),
          unitText: '1일',
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
    />
  );
}

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <TrustBar />
      <WhyCerto />
      <Services />
      <DomesticInterpretation />
      <GlobalInterpretation />
      <Business />
      <Industries />
      <MatchingProcess />
      <QualityStandard />
      <PremiumService />
      <CorporateRetainer />
      <UseCases />
      <Clients />
      <Projects />
      <Process />
      <FAQ />
      <FinalCta />
      <Contact />
      <FaqSchema />
      <PricingSchema />
    </main>
  );
}
