import Cta from './ui/Button';
import Figure from './ui/Figure';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { serviceAreas } from '@/data/content';
import { images } from '@/data/images';

export default function Services() {
  return (
    <section aria-labelledby="services-heading" className="bg-ivory-light py-section">
      <div className="shell">
        <SectionHeading
          eyebrow="Services"
          title={<span id="services-heading">Interpretation &amp; Translation</span>}
          lead={
            <>
              국내 프로젝트부터 해외 현장까지
              <br className="hidden sm:block" /> 다양한 환경에 대응합니다.
            </>
          }
        />

        <div className="mt-20 flex flex-col gap-24 lg:mt-28 lg:gap-32">
          {serviceAreas.map((area, index) => {
            const reversed = index % 2 === 1;
            return (
              <article
                key={area.id}
                id={area.id}
                className="grid scroll-mt-32 items-center gap-10 lg:grid-cols-12 lg:gap-gutter"
              >
                <div
                  className={`lg:col-span-6 ${reversed ? 'lg:order-2 lg:col-start-7' : 'lg:order-1'}`}
                >
                  <Reveal>
                    <Figure
                      image={images[area.imageKey]}
                      tone="none"
                      sizes="(max-width: 1024px) 100vw, 46vw"
                    />
                  </Reveal>
                </div>

                <div
                  className={`lg:col-span-5 ${reversed ? 'lg:order-1 lg:col-start-1' : 'lg:order-2 lg:col-start-8'}`}
                >
                  <Reveal>
                    <p className="eyebrow">{area.eyebrow}</p>
                  </Reveal>
                  <Reveal delay={80}>
                    <h3 className="mt-5 text-title font-semibold text-navy">{area.title}</h3>
                  </Reveal>
                  <Reveal delay={130}>
                    <p className="mt-5 text-[0.9375rem] leading-[1.85] text-pretty text-navy/65">
                      {area.subtitle}
                    </p>
                  </Reveal>

                  <Reveal delay={180}>
                    <ul className="mt-9 grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2">
                      {area.items.map((item) => (
                        <li
                          key={item}
                          className="border-b border-line py-3 text-[0.875rem] text-navy/80"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Reveal>

                  <Reveal delay={240}>
                    <div className="mt-10">
                      <Cta href={`/${area.id}`} variant="outline" track={`service-${area.id}`}>
                        {area.cta}
                      </Cta>
                    </div>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
