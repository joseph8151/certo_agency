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
              eyebrow="체르토 에이전시"
              title={
                <span id="about-heading">
                  왜 체르토
                  <br />
                  에이전시인가요?
                </span>
              }
            />
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="text-[1.0625rem] leading-[1.95] text-pretty text-navy/75">
                같은 언어라도 어떤 자리냐에 따라 필요한 사람이 다릅니다. 바이어 상담과 기술 미팅,
                계약 협의는 요구되는 배경지식과 준비 범위가 전혀 다릅니다.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-7 text-[1.0625rem] leading-[1.95] text-pretty text-navy">
                CERTO AGENCY는 가능한 통역사를 연결하는 것이 아니라, 미팅의 목적과 업종을 먼저
                확인한 뒤 그 자리에 맞는 사람을 배정합니다.
              </p>
            </Reveal>
          </div>
        </div>

        {/* 6가지 — 카드가 아닌 편집형 컬럼 (PC 3열 × 2행, 모바일 1열) */}
        <div className="mt-20 grid gap-px border-t border-line bg-line lg:mt-28 lg:grid-cols-3">
          {valuePillars.map((pillar, i) => (
            <Reveal key={pillar.no} delay={i * 110} className="bg-white">
              <article className="flex h-full flex-col gap-6 py-10 lg:px-8 lg:py-14">
                <span className="font-serif text-4xl leading-none text-brand/50">{pillar.no}</span>
                <h3 className="text-[1.0625rem] font-medium text-navy">{pillar.title}</h3>
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
