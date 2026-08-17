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
      {/* 배경: 아이보리 필드 — 오른쪽 이미지를 감싸는 편집 레이아웃 */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 hidden w-[42%] bg-ivory-light lg:block"
      />

      <div className="shell relative grid items-center gap-14 pb-16 lg:grid-cols-12 lg:gap-gutter lg:pb-24">
        {/* 좌: 카피 */}
        <div className="lg:col-span-6 lg:pr-8 xl:col-span-6">
          <Reveal>
            <p className="eyebrow">Global Language Partner</p>
          </Reveal>

          <Reveal delay={90}>
            <h1
              id="hero-heading"
              className="mt-7 text-display font-semibold tracking-tight text-navy"
            >
              언어가 필요한 순간,
              <br />
              <span className="text-brand">가장 적합한 전문가</span>를
              <br />
              연결합니다.
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-9 max-w-xl text-[1.0625rem] leading-[1.9] text-pretty text-navy/70">
              국내부터 해외까지. 기업 미팅, 국제회의, 전시회, 비즈니스 협상, 전문 문서까지 CERTO
              AGENCY가 프로젝트에 맞는 통역사와 번역가를 선별하여 연결합니다.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Cta href="#contact" track="hero-primary" className="w-full sm:w-auto">
                통번역 문의하기
              </Cta>
              <Cta
                href="#about"
                variant="outline"
                track="hero-secondary"
                className="w-full sm:w-auto"
              >
                서비스 알아보기
              </Cta>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-14 lg:mt-20">
              <div className="rule" />
              <p className="mt-5 text-[0.6875rem] font-medium uppercase leading-relaxed tracking-[0.16em] text-navy/65">
                Interpretation · Translation · Global Projects · Corporate Language Support
              </p>
            </div>
          </Reveal>
        </div>

        {/* 우: 이미지 */}
        <div className="lg:col-span-6 xl:col-span-6">
          <Reveal delay={140} className="relative">
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
              <p className="font-serif text-2xl italic leading-snug text-white sm:text-[1.75rem]">
                Beyond Language.
                <br />
                The Right Professional.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
