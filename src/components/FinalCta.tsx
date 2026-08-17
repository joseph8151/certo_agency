import Cta from './ui/Button';
import Reveal from './ui/Reveal';

export default function FinalCta() {
  return (
    <section aria-labelledby="final-cta-heading" className="on-dark bg-brand-deep py-section text-white">
      <div className="shell max-w-4xl text-center">
        <Reveal>
          <p className="eyebrow-invert">Start Your Project</p>
        </Reveal>

        <Reveal delay={90}>
          <h2 id="final-cta-heading" className="mt-7 text-headline font-semibold text-white">
            통번역이 필요하신가요?
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="mx-auto mt-7 max-w-xl text-[1.0625rem] leading-[1.9] text-pretty text-white/70">
            프로젝트 내용을 알려주시면
            <br className="hidden sm:block" /> 적합한 전문가를 찾아드립니다.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-11 flex justify-center">
            <Cta href="#contact" variant="invert" track="final-cta">
              프로젝트 문의하기
            </Cta>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <p className="mt-8 text-[0.8125rem] tracking-wide text-white/60">
            국내 · 해외 · 기업 · 개인 프로젝트 상담 가능
          </p>
        </Reveal>
      </div>
    </section>
  );
}
