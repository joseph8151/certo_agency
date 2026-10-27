import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { industries } from '@/data/content';

export default function Industries() {
  return (
    <section id="industries" aria-labelledby="industries-heading" className="bg-white py-section">
      <div className="shell">
        <SectionHeading
          eyebrow="대응 산업"
          title={
            <span id="industries-heading">
              전문 분야에 따라
              <br />
              적합한 경험을 가진 전문가를 매칭합니다.
            </span>
          }
        />

        {/* 텍스트 중심 그리드 — 아이콘 없이 */}
        <div className="mt-16 grid grid-cols-2 gap-px border-t border-line bg-line lg:mt-20 lg:grid-cols-4">
          {industries.map((industry, i) => (
            <Reveal key={industry.en} delay={(i % 4) * 70} className="bg-white">
              <div className="group flex h-full flex-col justify-between gap-6 px-4 py-6 transition-colors duration-500 ease-certo hover:bg-brand-soft/60 sm:px-6 sm:py-7 lg:py-10">
                <span className="text-[0.6875rem] font-medium tracking-[0.18em] text-brand/50">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-[1.0625rem] font-medium tracking-tight text-navy">
                    {industry.ko}
                  </h3>
                </div>
              </div>
            </Reveal>
          ))}

          {/*
            항목 수가 4의 배수가 아닐 때 마지막 줄의 빈 칸이 생깁니다.
            빈 칸 대신 남은 칸 전체를 하나로 합쳐 안내 문구를 둡니다. (lg 4열에서만 필요)
          */}
          {industries.length % 4 !== 0 ? (
            <div
              className="hidden flex-col justify-end gap-3 bg-white py-10 pl-6 lg:flex"
              style={{
                gridColumn: `span ${4 - (industries.length % 4)} / span ${4 - (industries.length % 4)}`,
              }}
            >
              <p className="text-[0.9375rem] leading-[1.8] text-navy/65">
                목록에 없는 분야도 먼저 문의해 주세요.
                <br />
                해당 경험이 있는 담당자를 확인해 안내드립니다.
              </p>
              <a
                href="#contact"
                data-cta="industries-contact"
                className="link-underline w-fit text-[0.875rem] font-medium text-brand"
              >
                분야 문의하기
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
