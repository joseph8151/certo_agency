import Link from 'next/link';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { useCases } from '@/data/content';

/** 고객이 자신의 상황을 바로 발견하고 상담으로 연결되도록 하는 섹션 */
export default function UseCases() {
  return (
    <section id="usecases" aria-labelledby="usecases-heading" className="bg-brand-soft/50 py-section">
      <div className="shell">
        <SectionHeading
          eyebrow="Use Cases"
          title={<span id="usecases-heading">What Can We Help You With?</span>}
          lead="아래와 같은 상황이라면, 프로젝트 내용을 알려주시는 것만으로 충분합니다."
        />

        <ul className="mt-16 grid gap-px border-t border-line bg-line lg:mt-20 lg:grid-cols-2">
          {useCases.map((useCase, i) => (
            <Reveal as="li" key={useCase.situation} delay={(i % 2) * 90} className="bg-white">
              <Link
                href="#contact"
                data-cta={`usecase-${i + 1}`}
                className="group flex h-full items-center justify-between gap-6 px-6 py-8 transition-colors duration-500 ease-certo hover:bg-ivory-light sm:px-9 sm:py-10"
              >
                <div>
                  <p className="text-[1.0625rem] font-medium leading-snug text-navy">
                    “{useCase.situation}”
                  </p>
                  <p className="mt-3 flex items-center gap-2 text-[0.875rem] text-brand">
                    <span aria-hidden="true">→</span>
                    <span>{useCase.solution}</span>
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-navy/25 transition-all duration-500 ease-certo group-hover:translate-x-1 group-hover:text-brand"
                >
                  ↗
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
