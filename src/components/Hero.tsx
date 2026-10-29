import Cta from './ui/Button';
import Figure from './ui/Figure';
import Reveal from './ui/Reveal';
import { images } from '@/data/images';

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-white pt-[calc(var(--header-height)+2.5rem)] lg:pt-[calc(var(--header-height)+4.5rem)]"
    >
      <div className="shell relative grid items-center gap-14 pb-16 lg:grid-cols-12 lg:gap-gutter lg:pb-24">
        {/* 좌: 카피 */}
        <div className="lg:col-span-6 lg:pr-8 xl:col-span-6">
          <Reveal>
            <p className="eyebrow">해외 비즈니스 지원 에이전시</p>
          </Reveal>

          <Reveal delay={90}>
            <h1
              id="hero-heading"
              className="mt-7 text-display font-medium tracking-tight text-navy"
            >
              해외 비즈니스 현장을
              <br />
              <span className="text-brand">함께 준비</span>합니다
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-9 max-w-xl text-[1.0625rem] leading-[1.9] text-pretty text-navy/70">
              통역부터 계약서 검토, 회의록, 해외 출장 지원까지. 중요한 비즈니스 일정에 필요한
              업무를 한 곳에서 연결합니다.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Cta href="#contact" track="hero-primary" className="w-full sm:w-auto">
                서비스 상담하기
              </Cta>
              <Cta
                href="#contact"
                variant="outline"
                track="hero-quote"
                className="w-full sm:w-auto"
              >
                견적 문의하기
              </Cta>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-14 lg:mt-20">
              <div className="rule" />
              <p className="mt-5 text-[0.75rem] font-medium leading-relaxed tracking-[0.04em] text-navy/65">
                비즈니스 통역 · 문서 번역 · 해외 출장 지원 · 기업 전담 서비스
              </p>
            </div>
          </Reveal>
        </div>

        {/* 우: 이미지 */}
        <div className="lg:col-span-6 xl:col-span-6">
          <Reveal delay={140} className="relative">
            {/* 사진 뒤로 살짝 어긋난 헤어라인 프레임 — 면 대신 선으로 깊이를 줍니다 */}
            <div
              aria-hidden="true"
              className="absolute inset-0 hidden translate-x-5 translate-y-9 border border-line-strong lg:block"
            />
            <Figure
              image={images.hero}
              tone="blue"
              priority
              zoom={false}
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="lg:translate-y-4"
            />

            {/* 이미지 위 캡션 — editorial 디테일 */}
            <div className="pointer-events-none absolute bottom-0 left-0 z-10 p-6 sm:p-8 lg:translate-y-4">
              <p className="text-[1.0625rem] font-medium leading-snug text-white sm:text-xl">
                언어가 아니라
                <br />
                비즈니스를 준비합니다
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
