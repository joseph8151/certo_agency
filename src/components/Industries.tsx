import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { industries } from '@/data/content';

export default function Industries() {
  return (
    <section id="industries" aria-labelledby="industries-heading" className="bg-white py-section">
      <div className="shell">
        <SectionHeading
          eyebrow="Industry Expertise"
          title={
            <span id="industries-heading">
              전문 분야에 따라
              <br />
              적합한 경험을 가진 전문가를 매칭합니다.
            </span>
          }
        />

        {/* 텍스트 중심 그리드 — 아이콘 없이 */}
        <div className="mt-16 grid gap-px border-t border-line bg-line sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {industries.map((industry, i) => (
            <Reveal key={industry.en} delay={(i % 4) * 70} className="bg-white">
              <div className="group flex h-full flex-col justify-between gap-6 py-7 transition-colors duration-500 ease-certo hover:bg-brand-soft/60 sm:px-6 lg:py-10">
                <span className="text-[0.6875rem] font-medium tracking-[0.18em] text-brand/50">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-lg font-medium tracking-tight text-navy">{industry.en}</h3>
                  <p className="mt-2 text-[0.8125rem] text-navy/70">{industry.ko}</p>
                </div>
              </div>
            </Reveal>
          ))}

          {/*
            항목 수가 4의 배수가 아닐 때 마지막 줄의 빈 칸이 헤어라인 배경(bg-line)으로
            드러나는 것을 막습니다. 2열 레이아웃에서는 필요 없으므로 lg 에서만 렌더링합니다.
          */}
          {Array.from({ length: (4 - (industries.length % 4)) % 4 }).map((_, i) => (
            <div key={`filler-${i}`} aria-hidden="true" className="hidden bg-white lg:block" />
          ))}
        </div>
      </div>
    </section>
  );
}
