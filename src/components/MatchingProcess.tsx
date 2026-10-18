import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { matchingSteps } from '@/data/content';

/** CERTO의 핵심 차별점 — Premium Matching System */
export default function MatchingProcess() {
  return (
    <section id="matching" aria-labelledby="matching-heading" className="bg-ivory-light py-section">
      <div className="shell">
        <SectionHeading
          eyebrow="배정 기준"
          title={
            <span id="matching-heading">
              프로젝트마다
              <br />
              필요한 전문가는 다릅니다.
            </span>
          }
        />

        {/* 4단계 — 상단 라인으로 연결된 편집형 스텝 */}
        <ol className="mt-16 grid gap-px border-t border-line bg-line lg:mt-24 lg:grid-cols-4">
          {matchingSteps.map((step, i) => (
            <Reveal as="li" key={step.step} delay={i * 110} className="bg-ivory-light">
              <div className="flex h-full flex-col gap-7 py-9 lg:px-7 lg:py-12">
                <div className="flex items-center gap-4">
                  <span className="text-[0.6875rem] font-semibold tracking-[0.2em] text-brand">
                    {step.step}
                  </span>
                  <span aria-hidden="true" className="h-px flex-1 bg-line" />
                </div>
                <h3 className="text-[1.0625rem] font-medium text-navy">{step.title}</h3>
                <p className="text-[0.9375rem] leading-[1.85] text-pretty text-navy/65">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <div className="mt-20 border-t border-line pt-12 lg:mt-28">
            <p className="text-headline font-semibold leading-[1.3] tracking-tight text-navy">
              가능한 사람을 찾는 것이 아니라,
              <br />
              <span className="text-brand">그 자리에 맞는 사람을 찾습니다.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
