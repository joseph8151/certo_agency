import Link from 'next/link';
import Reveal from './ui/Reveal';
import { cityPages } from '@/data/city-pages';
import { countries, languages, regions } from '@/data/seo-pages';

/**
 * 대응 범위 — 기업 담당자가 "우리 일정이 가능한가" 를 가장 먼저 확인하는 자리.
 * 숫자는 데이터 파일의 개수를 그대로 읽으므로 페이지를 추가하면 함께 바뀝니다.
 * 각 항목은 해당 안내 페이지로 이어져 검색 로봇과 방문자가 같은 길로 내려갑니다.
 */
export default function Coverage() {
  const stats = [
    {
      value: countries.length,
      unit: '개국',
      label: '해외 현지 통역',
      note: '국가별 안내',
      href: '/global#by-language',
    },
    {
      value: cityPages.length,
      unit: '개 도시',
      label: '도시별 출장 안내',
      note: '전시장 · 산업 단지',
      href: '/global',
    },
    {
      value: languages.length,
      unit: '개 언어',
      label: '언어별 통역 · 번역',
      note: '한영 · 한중 · 한일 포함',
      href: '/interpretation#by-language',
    },
    {
      value: regions.length,
      unit: '개 지역',
      label: '국내 지역별 통역',
      note: '서울 · 수도권 · 전국',
      href: '/interpretation#by-language',
    },
  ];

  return (
    <section aria-labelledby="coverage-heading" className="bg-white py-section">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">대응 범위</p>
          <h2
            id="coverage-heading"
            className="mt-6 max-w-2xl text-headline font-medium tracking-tight text-navy"
          >
            어느 나라, 어느 도시의 일정이든 먼저 확인해 드립니다.
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-px border-y border-line bg-line sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal as="li" key={stat.label} delay={i * 90} className="list-none bg-white">
              <Link
                href={stat.href}
                className="group flex h-full flex-col px-1 py-9 transition-colors duration-300 sm:px-8 lg:py-11"
              >
                <span className="font-serif text-[3rem] leading-none lining-nums tabular-nums text-navy lg:text-[3.5rem]">
                  {stat.value}
                  <span className="ml-1.5 font-sans text-[0.9375rem] font-medium text-brand">
                    {stat.unit}
                  </span>
                </span>
                <span className="mt-6 text-[1.0625rem] font-medium text-navy transition-colors duration-300 group-hover:text-brand">
                  {stat.label}
                </span>
                <span className="mt-2 text-[0.875rem] text-navy/60">{stat.note}</span>
              </Link>
            </Reveal>
          ))}
        </ul>

        <p className="mt-8 max-w-2xl text-[0.875rem] leading-[1.9] text-pretty text-navy/60">
          날짜와 언어, 분야에 따라 배정 가능한 통역사가 달라 일정을 알려주시면 해당 날짜 기준으로
          확인해 회신드립니다. 정세나 규제로 방문이 제한되는 지역은 안전 확인을 먼저 안내합니다.
        </p>
      </div>
    </section>
  );
}
