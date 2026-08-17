import type { Metadata } from 'next';
import Cta from '@/components/ui/Button';
import { servicePageList } from '@/data/services';

export const metadata: Metadata = {
  title: '페이지를 찾을 수 없습니다',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main id="main" className="bg-white">
      <section className="shell flex min-h-[70vh] flex-col justify-center py-section pt-[calc(var(--header-height)+4rem)]">
        <p className="eyebrow">404</p>
        <h1 className="mt-6 max-w-2xl text-headline font-semibold text-navy">
          요청하신 페이지를 찾을 수 없습니다.
        </h1>
        <p className="mt-6 max-w-prose text-[1.0625rem] leading-[1.9] text-navy/70">
          주소가 변경되었거나 삭제된 페이지일 수 있습니다. 아래에서 필요한 서비스를 찾아보시거나,
          바로 프로젝트를 문의해 주세요.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Cta href="/" track="404-home" className="w-full sm:w-auto">
            홈으로 돌아가기
          </Cta>
          <Cta href="/#contact" variant="outline" track="404-contact" className="w-full sm:w-auto">
            프로젝트 문의하기
          </Cta>
        </div>

        <nav aria-label="서비스 목록" className="mt-16 border-t border-line">
          <ul>
            {servicePageList.map((page) => (
              <li key={page.slug}>
                <a
                  href={`/${page.slug}`}
                  className="group flex items-center justify-between gap-6 border-b border-line py-5"
                >
                  <span className="text-[1.0625rem] font-medium text-navy">{page.serviceName}</span>
                  <span
                    aria-hidden="true"
                    className="text-navy/30 transition-transform duration-500 ease-certo group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </main>
  );
}
