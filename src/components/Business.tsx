import Cta from './ui/Button';
import Figure from './ui/Figure';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { businessServices } from '@/data/content';
import { images } from '@/data/images';

export default function Business() {
  return (
    <section id="business" aria-labelledby="business-heading" className="bg-ivory py-section">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="CERTO for Business"
              title={
                <span id="business-heading">
                  기업의 글로벌 커뮤니케이션을
                  <br />
                  지원합니다.
                </span>
              }
              lead="한 번의 프로젝트로 끝나지 않습니다. 반복되는 해외 커뮤니케이션을 하나의 창구에서 관리하고, 여러 국가·여러 언어가 동시에 필요한 경우에도 프로젝트 단위로 함께 운영합니다."
            />
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <Reveal delay={120}>
              <p className="font-serif text-title italic leading-[1.35] text-brand">
                One Partner.
                <br />
                Multiple Languages.
                <br />
                One Standard.
              </p>
            </Reveal>
          </div>
        </div>

        {/* 기업 서비스 목록 */}
        <div className="mt-20 grid gap-px border-t border-line bg-line sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {businessServices.map((service, i) => (
            <Reveal key={service} delay={(i % 4) * 80} className="bg-ivory">
              <div className="flex h-full items-start gap-4 px-0 py-7 sm:px-6 lg:py-9">
                <span className="mt-1 font-serif text-sm text-brand/45">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[0.9375rem] font-medium leading-snug text-navy">
                  {service}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 이미지 + CTA */}
        <div className="mt-20 grid items-end gap-10 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-8">
            <Reveal>
              <Figure
                image={images.business}
                tone="blue"
                sizes="(max-width: 1024px) 100vw, 62vw"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={120}>
              <p className="text-[0.9375rem] leading-[1.85] text-navy/70">
                기업 담당자께서 매번 새로 설명하지 않아도 되도록, CERTO가 프로젝트 이력과 용어를
                이어서 관리합니다.
              </p>
              <div className="mt-8">
                <Cta href="#contact" track="business-cta">
                  기업 프로젝트 문의
                </Cta>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
