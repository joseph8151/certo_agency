import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { projects } from '@/data/content';

/**
 * 프로젝트 예시.
 * 고객사명을 공개하지 않고 프로젝트 형식으로만 보여줍니다.
 * 실제 프로젝트가 쌓이면 src/data/content.ts 의 `projects` 배열에 추가하세요.
 */
export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="bg-ivory py-section">
      <div className="shell">
        <SectionHeading
          eyebrow="Selected Projects"
          title={<span id="projects-heading">진행 사례</span>}
          lead="고객사 정보는 공개하지 않으며, 프로젝트 유형으로만 안내드립니다."
        />

        {/* 모바일: 가로 스와이프 / 데스크톱: 편집형 리스트 */}
        <ul className="swipe-row mt-16 lg:mt-20 lg:block lg:overflow-visible lg:border-t lg:border-line">
          {projects.map((project, i) => (
            <Reveal
              as="li"
              key={project.titleEn}
              delay={i * 90}
              className="swipe-item w-[80vw] max-w-sm lg:w-auto lg:max-w-none"
            >
              <article className="flex h-full flex-col gap-6 border border-line bg-white p-7 lg:grid lg:grid-cols-12 lg:items-baseline lg:gap-8 lg:border-x-0 lg:border-t-0 lg:bg-transparent lg:p-0 lg:py-9">
                <div className="flex items-center gap-4 lg:col-span-1">
                  <span className="font-serif text-2xl text-brand/50">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-[0.9375rem] font-semibold uppercase tracking-[0.14em] text-navy lg:col-span-4">
                  {project.titleEn}
                </h3>

                <p className="text-[0.875rem] text-brand lg:col-span-3">{project.languagePair}</p>

                <p className="text-[0.8125rem] uppercase tracking-[0.14em] text-navy/65 lg:col-span-2">
                  {project.location}
                </p>

                <p className="mt-auto text-[0.875rem] leading-relaxed text-navy/70 lg:col-span-2 lg:mt-0 lg:text-right">
                  {project.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
