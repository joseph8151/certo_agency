import Cta from './ui/Button';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { pricingCta, pricingFaqs, pricingIntro, pricingNotes, pricingPlans } from '@/data/pricing';

/**
 * 프리미엄 통역 서비스 — 업무 범위별 요금 안내.
 *
 * 금액은 전부 src/data/pricing.ts 에 있습니다. 이 파일에는 숫자가 없습니다.
 *
 * 강조 카드에 대해 — "추천", "인기" 같은 판매 문구 대신
 * 테두리와 배경 톤만으로 구분합니다. B2B 에서는 그 편이 신뢰를 줍니다.
 */
export default function PremiumService() {
  return (
    <section
      id="premium"
      aria-labelledby="premium-heading"
      className="scroll-mt-28 border-y border-line bg-ivory-light py-section"
    >
      <div className="shell">
        <SectionHeading
          eyebrow={pricingIntro.eyebrow}
          title={<span id="premium-heading">{pricingIntro.title}</span>}
          lead={pricingIntro.lead}
        />

        {/* ── 요금 카드 3개 — PC 3열 / 모바일 1열 ── */}
        <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 90}>
              <article
                className={`flex h-full flex-col p-8 lg:p-10 ${
                  plan.highlight
                    ? 'border border-brand/30 border-t-2 border-t-brand bg-white'
                    : 'border border-line bg-transparent'
                }`}
              >
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-brand">
                  {plan.en}
                </p>

                <h3 className="mt-4 text-title font-semibold tracking-tight text-navy">
                  {plan.name}
                </h3>

                {/*
                  금액과 단위를 각각 한 줄에 둡니다.
                  한 줄로 붙이면 단위가 긴 플랜만 줄바꿈되어 카드 높이가 어긋나고,
                  아래 '포함 범위' 구분선이 카드마다 다른 위치에 생깁니다.
                */}
                <p className="mt-7">
                  <span className="block text-[1.875rem] font-semibold tracking-tight text-navy lg:text-[2.125rem]">
                    {plan.price}
                  </span>
                  <span className="mt-1.5 block text-[0.875rem] text-navy/65">{plan.unit}</span>
                </p>

                {/*
                  3열로 놓이는 데스크톱에서만 높이를 맞춥니다.
                  설명이 3줄인 플랜이 하나 있어 그냥 두면 그 카드만 아래 구분선이
                  한 줄 내려갑니다. 모바일은 세로로 쌓이므로 제한하지 않습니다.
                */}
                <p className="mt-6 text-[0.9375rem] leading-[1.85] text-pretty text-navy/70 lg:min-h-[5.25rem]">
                  {plan.description}
                </p>

                <div className="mt-8 border-t border-line pt-7">
                  <h4 className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-navy/65">
                    포함 범위
                  </h4>
                  <ul className="mt-5 flex flex-col gap-3.5">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed">
                        <span
                          aria-hidden="true"
                          className="mt-[0.6em] h-px w-3 shrink-0 bg-brand/55"
                        />
                        <span className="text-navy/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* ── 고지 ── */}
        <Reveal delay={120}>
          <ul className="mt-10 flex flex-col gap-2.5 border-t border-line pt-8">
            {pricingNotes.map((note) => (
              <li
                key={note}
                className="flex gap-3 text-[0.875rem] leading-[1.85] text-pretty text-navy/65"
              >
                <span aria-hidden="true" className="text-navy/40">
                  ·
                </span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* ── 설명 + CTA ── */}
        <div className="mt-20 grid gap-14 lg:mt-24 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-7">
            <h3 className="text-title font-semibold tracking-tight text-navy">
              비용이 달라지는 이유
            </h3>

            <div className="mt-10 border-t border-line">
              {pricingFaqs.map((faq, i) => (
                <Reveal key={faq.q} delay={i * 70}>
                  <details className="group border-b border-line">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-[1.0625rem] font-medium text-navy transition-colors duration-300 hover:text-brand [&::-webkit-details-marker]:hidden">
                      <span>{faq.q}</span>
                      <span aria-hidden="true" className="relative mt-2 block h-3 w-3 shrink-0">
                        <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current" />
                        <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-current transition-transform duration-500 ease-certo group-open:rotate-90 group-open:opacity-0" />
                      </span>
                    </summary>
                    <div className="pb-7 pr-8 text-[0.9375rem] leading-[1.9] text-pretty text-navy/65">
                      {faq.a}
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={120}>
              <div className="border-l-2 border-brand/25 pl-7">
                <h3 className="text-title font-semibold tracking-tight text-navy">
                  {pricingCta.title}
                </h3>
                <p className="mt-6 text-[0.9375rem] leading-[1.9] text-pretty text-navy/70">
                  {pricingCta.body}
                </p>
                <div className="mt-9">
                  <Cta href={pricingCta.href} track="premium-cta" className="w-full sm:w-auto">
                    {pricingCta.label}
                  </Cta>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
