import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { faqs } from '@/data/content';

/**
 * FAQ 아코디언.
 * 시맨틱한 <details>/<summary> 를 사용해 JS 없이도 동작하고,
 * 검색엔진이 답변 텍스트를 그대로 읽을 수 있습니다. (JSON-LD 는 layout 에서 함께 제공)
 */
export default function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-ivory-light py-section">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-gutter">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="FAQ"
            title={<span id="faq-heading">자주 묻는 질문</span>}
            lead="찾으시는 답변이 없다면 문의 폼으로 알려주세요. 담당자가 직접 안내드립니다."
          />
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <div className="border-t border-line">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={Math.min(i, 4) * 60}>
                <details className="group border-b border-line">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-[1.0625rem] font-medium text-navy transition-colors duration-300 hover:text-brand [&::-webkit-details-marker]:hidden">
                    <span className="flex gap-4">
                      <span className="mt-1 font-serif text-xs text-brand/45">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>{faq.q}</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="relative mt-2 block h-3 w-3 shrink-0"
                    >
                      <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current" />
                      <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-current transition-transform duration-500 ease-certo group-open:rotate-90 group-open:opacity-0" />
                    </span>
                  </summary>
                  <div className="pb-7 pl-0 pr-8 text-[0.9375rem] leading-[1.9] text-pretty text-navy/65 sm:pl-8">
                    {faq.a}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
