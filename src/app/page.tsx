import Business from '@/components/Business';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import DomesticInterpretation from '@/components/DomesticInterpretation';
import FAQ from '@/components/FAQ';
import FinalCta from '@/components/FinalCta';
import GlobalInterpretation from '@/components/GlobalInterpretation';
import Hero from '@/components/Hero';
import Industries from '@/components/Industries';
import MatchingProcess from '@/components/MatchingProcess';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import QualityStandard from '@/components/QualityStandard';
import Services from '@/components/Services';
import TrustBar from '@/components/TrustBar';
import UseCases from '@/components/UseCases';
import WhyCerto from '@/components/WhyCerto';
import { faqs } from '@/data/content';

/** FAQ 가 실제로 존재하는 홈에서만 FAQPage 구조화 데이터를 출력합니다. */
function FaqSchema() {
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
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
      <UseCases />
      <Clients />
      <Projects />
      <Process />
      <FAQ />
      <FinalCta />
      <Contact />
      <FaqSchema />
    </main>
  );
}
