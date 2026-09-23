import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

/**
 * robots.txt
 * ─────────────────────────────────────────────
 * 국내 검색엔진 크롤러를 명시적으로 허용합니다.
 *   Yeti    네이버
 *   Daumoa  다음 / 카카오
 * `*` 규칙만 있어도 대부분 수집하지만, 명시해 두면 의도가 분명해지고
 * 서치어드바이저의 robots.txt 검증에서도 바로 확인됩니다.
 *
 * /api/ 는 문의 접수 엔드포인트라 색인 대상이 아닙니다.
 */
export default function robots(): MetadataRoute.Robots {
  const allow = { allow: '/', disallow: '/api/' };

  return {
    rules: [
      { userAgent: '*', ...allow },
      { userAgent: 'Yeti', ...allow },
      { userAgent: 'Daumoa', ...allow },
      { userAgent: 'Googlebot', ...allow },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
