import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { valuePillars } from '@/data/content';

export default function WhyCerto() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-white py-section">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="More Than Translation"
              serifTitle="Why CERTO"
              title={
                <span id="about-heading">
                  단순한 통번역을 넘어,
                  <br />
                  프로젝트에 맞는 전문가를 찾습니다.
                </span>
              }
            />
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="text-[1.0625rem] leading-[1.95] text-pretty text-navy/75">
                언어가 같다고 모든 통역사가 같은 것은 아닙니다. 국제회의, 기업 협상, 의료, 법률,
                금융, 기술, 전시회 등 프로젝트의 성격에 따라 필요한 전문성과 경험은 달라집니다.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-7 text-[1.0625rem] leading-[1.95] text-pretty text-navy">
                CERTO AGENCY는 단순히 가능한 통역사를 연결하는 것이 아니라, 고객의 프로젝트를 먼저
                이해하고 적합한 전문가를 선별합니다.
              </p>
            </Reveal>
          </div>
        </div>

        {/* 3가지 핵심 가치 — 카드가 아닌 편집형 컬럼 */}
        <div className="mt-20 grid gap-px border-t border-line bg-line lg:mt-28 lg:grid-cols-3">
          {valuePillars.map((pillar, i) => (
            <Reveal key={pillar.no} delay={i * 110} className="bg-white">
              <article className="flex h-full flex-col gap-6 py-10 lg:px-8 lg:py-14 lg:first:pl-0">
                <span className="font-serif text-4xl leading-none text-brand/50">{pillar.no}</span>
                <h3 className="text-[0.8125rem] font-semibold uppercase tracking-[0.2em] text-navy">
                  {pillar.titleEn}
                </h3>
                <p className="max-w-sm text-[0.9375rem] leading-[1.85] text-pretty text-navy/65">
                  {pillar.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
