import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { clientTypes } from '@/data/content';

/**
 * 고객 유형.
 * 실제 거래처 로고를 확보하기 전까지 가짜 기업 로고는 사용하지 않습니다.
 * 텍스트만으로 신뢰도를 만드는 편집형 구성입니다.
 */
export default function Clients() {
  return (
    <section id="clients" aria-labelledby="clients-heading" className="bg-white py-section">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Our Clients"
              title={<span id="clients-heading">함께해 온 고객</span>}
              lead="기업부터 공공기관, 학계, 행사 주최사까지. 프로젝트의 성격에 따라 대응 방식이 달라집니다."
            />
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="flex flex-wrap gap-x-2.5 gap-y-3">
              {clientTypes.map((client, i) => (
                <Reveal as="li" key={client} delay={i * 40}>
                  <span className="inline-block border border-line-strong px-5 py-3 text-[0.8125rem] tracking-wide text-navy/75">
                    {client}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
