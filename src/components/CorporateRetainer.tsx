import Cta from './ui/Button';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { retainerIncludes, retainerIntro, retainerNote, retainerPlans } from '@/data/pricing';

/**
 * 기업 전담 통역 서비스 — 월 단위 정기 지원.
 *
 * 금액은 전부 src/data/pricing.ts 에 있습니다.
 * 구간마다 포함 구성이 같고 업무량만 다르므로, 포함 항목은 카드마다 반복하지 않고
 * 왼쪽에 한 번만 두었습니다. (카드가 길어지면 비교가 어려워집니다)
 */
export default function CorporateRetainer() {
  return (
    <section
      id="retainer"
      aria-labelledby="retainer-heading"
      className="scroll-mt-28 bg-white py-section"
    >
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-gutter">
        {/* 좌: 설명 + 공통 구성 */}
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow={retainerIntro.eyebrow}
            title={<span id="retainer-heading">{retainerIntro.title}</span>}
            lead={retainerIntro.lead}
          />

          <Reveal delay={180}>
            <div className="mt-12 border-t border-line pt-8">
              <h3 className="text-[0.75rem] font-semibold tracking-[0.04em] text-navy/65">
                공통 구성
              </h3>
              <ul className="mt-6 flex flex-col gap-3.5">
                {retainerIncludes.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed">
                    <span aria-hidden="true" className="mt-[0.6em] h-px w-3 shrink-0 bg-brand/55" />
                    <span className="text-navy/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* 우: 구간별 시작가 */}
        <div className="lg:col-span-6 lg:col-start-7">
          <dl className="border-t border-line">
            {retainerPlans.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 80}>
                <div className="grid gap-3 border-b border-line py-8 sm:grid-cols-12 sm:items-baseline sm:gap-8">
                  <dt className="sm:col-span-5">
                    <span className="block text-[1.5rem] font-semibold tracking-tight text-navy">
                      {plan.price}
                    </span>
                    <span className="mt-1 block text-[0.8125rem] text-navy/65">{plan.unit}</span>
                  </dt>
                  <dd className="sm:col-span-7">
                    <p className="text-[1.0625rem] font-medium text-navy">{plan.name}</p>
                    <p className="mt-2.5 text-[0.9375rem] leading-[1.85] text-pretty text-navy/65">
                      {plan.fit}
                    </p>
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>

          <Reveal delay={240}>
            <p className="mt-8 text-[0.875rem] leading-[1.9] text-pretty text-navy/65">
              {retainerNote}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10">
              <Cta href="#contact" variant="outline" track="retainer-cta">
                기업 전담 서비스 문의하기
              </Cta>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
