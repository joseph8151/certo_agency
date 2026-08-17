import Cta from './ui/Button';
import LineMap from './ui/LineMap';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { globalRegions } from '@/data/content';

export default function GlobalInterpretation() {
  return (
    <section
      id="global"
      aria-labelledby="global-heading"
      className="on-dark relative overflow-hidden bg-brand-deep py-section text-white"
    >
      {/* 배경 그래티큘 — 라벨 없이 아주 낮은 대비로만 깔아 공간감을 만듭니다. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.13]"
      >
        <LineMap showLabels={false} className="h-auto w-[150%] max-w-none text-white" />
      </div>

      <div className="shell relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-6">
            <SectionHeading
              invert
              eyebrow="Global Interpretation"
              title={
                <span id="global-heading">
                  해외에서도
                  <br />
                  CERTO의 매칭은 계속됩니다.
                </span>
              }
              lead="해외 출장, 현지 미팅, 전시회, 기업 방문, 바이어 상담 등 해외에서 통역이 필요한 프로젝트도 CERTO AGENCY가 지원합니다."
            />

            <Reveal delay={200}>
              <div className="mt-12">
                <Cta href="#contact" variant="invert" track="global-cta">
                  해외 통역 문의
                </Cta>
              </div>
            </Reveal>
          </div>

          {/* 권역 리스트 */}
          <div className="lg:col-span-5 lg:col-start-8">
            <ul>
              {globalRegions.map((region, i) => (
                <Reveal as="li" key={region.name} delay={i * 90}>
                  <div className="flex items-baseline justify-between gap-6 border-b border-line-invert py-6">
                    <span className="text-lg font-medium tracking-tight text-white">
                      {region.name}
                    </span>
                    <span className="text-right text-[0.8125rem] leading-relaxed text-white/55">
                      {region.note}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        {/* 하단: 카피 + Line Map */}
        <div className="mt-20 grid items-center gap-12 border-t border-line-invert pt-14 lg:mt-28 lg:grid-cols-12 lg:gap-gutter">
          <Reveal className="lg:col-span-4">
            <p className="font-serif text-headline italic leading-[1.3] text-white/95">
              Where Business Takes You,
              <br />
              CERTO Connects You.
            </p>
            <p className="mt-7 max-w-sm text-[0.875rem] leading-relaxed text-white/55">
              현지 전문가 매칭과 동행 통역 중 프로젝트에 적합한 방식을 제안드립니다.
            </p>
          </Reveal>

          <Reveal delay={140} className="lg:col-span-7 lg:col-start-6">
            <LineMap className="h-auto w-full text-white/85" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
