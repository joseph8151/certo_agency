import Cta from './ui/Button';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { processSteps } from '@/data/content';

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" className="bg-white py-section">
      <div className="shell">
        <SectionHeading
          eyebrow="Simple Process"
          title={
            <span id="process-heading">
              복잡한 절차 없이
              <br />
              필요한 내용을 알려주시면 됩니다.
            </span>
          }
        />

        <ol className="mt-16 grid gap-px border-t border-line bg-line sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.no} delay={(i % 3) * 90} className="bg-white">
              <div className="flex h-full flex-col gap-4 py-8 sm:px-6 lg:py-11">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-3xl leading-none text-brand/45">{step.no}</span>
                  <h3 className="text-[1.0625rem] font-medium text-navy">{step.label}</h3>
                </div>
                <p className="text-[0.875rem] leading-[1.8] text-navy/70 sm:pl-12">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <div className="mt-14 flex justify-start">
            <Cta href="#contact" track="process-cta">
              프로젝트 상담 시작하기
            </Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
