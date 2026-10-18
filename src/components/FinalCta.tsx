import Cta from './ui/Button';
import Reveal from './ui/Reveal';

export default function FinalCta() {
  return (
    <section aria-labelledby="final-cta-heading" className="on-dark bg-brand-deep py-section text-white">
      <div className="shell max-w-4xl text-center">
        <Reveal>
          <p className="eyebrow-invert">상담 안내</p>
        </Reveal>

        <Reveal delay={90}>
          <h2 id="final-cta-heading" className="mt-7 text-headline font-semibold text-white">
            중요한 미팅일수록 준비부터 다르게
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="mx-auto mt-7 max-w-xl text-[1.0625rem] leading-[1.9] text-pretty text-white/70">
            날짜, 언어, 국가, 미팅 목적만 보내주셔도
            <br className="hidden sm:block" /> 필요한 통역과 지원 범위를 안내드립니다.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-11 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Cta href="#contact" variant="invert" track="final-cta-interpretation">
              통역 상담하기
            </Cta>
            <Cta href="#contact" variant="invertOutline" track="final-cta-business">
              비즈니스 지원 문의하기
            </Cta>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <p className="mt-8 text-[0.8125rem] tracking-wide text-white/60">
            통역 · 문서 지원 · 해외 출장 · 기업 전담 서비스 상담 가능
          </p>
        </Reveal>
      </div>
    </section>
  );
}
