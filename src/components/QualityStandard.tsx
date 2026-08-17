import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { qualityChecks } from '@/data/content';

export default function QualityStandard() {
  return (
    <section id="standard" aria-labelledby="standard-heading" className="bg-white py-section">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-gutter">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="The CERTO Standard"
            title={
              <span id="standard-heading">
                통번역의 품질은
                <br />
                사람을 어떻게 선택하느냐에서
                <br />
                시작됩니다.
              </span>
            }
          />

          <Reveal delay={200}>
            <div className="mt-12 border-l-2 border-brand/25 pl-6">
              <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-brand">
                Confidentiality
              </h3>
              <p className="mt-4 text-[0.9375rem] leading-[1.85] text-pretty text-navy/70">
                프로젝트 과정에서 공유되는 자료, 일정, 기업 정보는 업무 목적 외에 사용하지 않으며,
                필요한 경우 비밀유지 서약을 포함하여 진행합니다.
              </p>
            </div>
          </Reveal>
        </div>

        {/* 체크포인트 */}
        <div className="lg:col-span-6 lg:col-start-7">
          <dl className="border-t border-line">
            {qualityChecks.map((check, i) => (
              <Reveal key={check.label} delay={i * 60}>
                <div className="flex flex-col gap-2 border-b border-line py-6 sm:flex-row sm:items-baseline sm:gap-8">
                  <dt className="flex shrink-0 items-baseline gap-3 sm:w-64">
                    <span className="font-serif text-xs text-brand/45">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[0.9375rem] font-medium text-navy">{check.label}</span>
                  </dt>
                  <dd className="text-[0.875rem] leading-relaxed text-navy/70">{check.body}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
