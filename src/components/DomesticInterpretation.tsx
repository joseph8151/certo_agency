import Cta from './ui/Button';
import Figure from './ui/Figure';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { domesticServices } from '@/data/content';
import { images } from '@/data/images';

export default function DomesticInterpretation() {
  return (
    <section id="domestic" aria-labelledby="domestic-heading" className="bg-white py-section">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-gutter">
        <div className="lg:col-span-5">
          <Reveal>
            <Figure
              image={images.domestic}
              tone="none"
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="hidden lg:block"
            />
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <SectionHeading
            eyebrow="Domestic Interpretation"
            title={
              <span id="domestic-heading">
                국내에서 진행되는
                <br />
                글로벌 비즈니스를 지원합니다.
              </span>
            }
            lead="서울을 중심으로 기업 미팅, 국제회의, 해외 바이어 방문, 전시회, 비즈니스 행사 등 다양한 현장의 전문 통역 서비스를 제공합니다."
          />

          <Reveal delay={120}>
            <ul className="mt-12 grid grid-cols-2 gap-px border-t border-line bg-line">
              {domesticServices.map((item) => (
                <li
                  key={item}
                  className="bg-white px-4 py-5 text-[0.875rem] text-navy/80 sm:px-5 sm:py-6"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-11">
              <Cta href="/interpretation" track="domestic-cta">
                국내 통역 문의하기
              </Cta>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
