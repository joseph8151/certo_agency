import { trustBarItems } from '@/data/content';

/**
 * Hero 하단 신뢰 바
 * PC: 한 줄 정렬 / 모바일: 가로 스크롤
 */
export default function TrustBar() {
  return (
    <section aria-label="CERTO AGENCY 주요 서비스 영역" className="border-y border-line bg-ivory">
      <div className="shell">
        <ul className="swipe-row items-center py-6 lg:justify-between lg:gap-8 lg:overflow-visible lg:py-7">
          {trustBarItems.map((item, i) => (
            <li
              key={item}
              className="swipe-item flex items-center gap-4 whitespace-nowrap lg:flex-1 lg:justify-center"
            >
              {i > 0 ? (
                <span aria-hidden="true" className="hidden h-3 w-px bg-line-strong lg:block" />
              ) : null}
              <span className="text-[0.8125rem] font-medium tracking-wide text-navy/75">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
