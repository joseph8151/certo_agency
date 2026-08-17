import Business from '@/components/Business';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import DomesticInterpretation from '@/components/DomesticInterpretation';
import FAQ from '@/components/FAQ';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import GlobalInterpretation from '@/components/GlobalInterpretation';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Industries from '@/components/Industries';
import MatchingProcess from '@/components/MatchingProcess';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import QualityStandard from '@/components/QualityStandard';
import Services from '@/components/Services';
import StickyCta from '@/components/StickyCta';
import TrustBar from '@/components/TrustBar';
import UseCases from '@/components/UseCases';
import WhyCerto from '@/components/WhyCerto';

export default function HomePage() {
  return (
    <>
      <Header />

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
      </main>

      <Footer />
      <StickyCta />
    </>
  );
}
