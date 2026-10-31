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
 *
 * 생성형 AI 검색 · 답변 엔진 크롤러도 명시적으로 허용합니다. (GEO)
 *   OAI-SearchBot · ChatGPT-User   ChatGPT 검색과 사용자 요청 시 열람
 *   GPTBot                         OpenAI 학습용
 *   PerplexityBot · Perplexity-User  Perplexity
 *   ClaudeBot · Claude-SearchBot · Claude-User  Anthropic
 *   Google-Extended                Gemini 학습 · 답변 활용 허용 신호
 *   Applebot-Extended              Apple 학습 허용 신호
 * 학습용 수집을 원하지 않으면 해당 줄(GPTBot · ClaudeBot · Google-Extended · Applebot-Extended)만 지우세요.
 * 검색 노출용 크롤러(OAI-SearchBot · PerplexityBot · Claude-SearchBot)는 유지하는 편이 좋습니다.
 */
export default function robots(): MetadataRoute.Robots {
  const allow = { allow: '/', disallow: '/api/' };

  return {
    rules: [
      { userAgent: '*', ...allow },
      { userAgent: 'Yeti', ...allow },
      { userAgent: 'Daumoa', ...allow },
      { userAgent: 'Googlebot', ...allow },
      ...[
        'OAI-SearchBot',
        'ChatGPT-User',
        'GPTBot',
        'PerplexityBot',
        'Perplexity-User',
        'ClaudeBot',
        'Claude-SearchBot',
        'Claude-User',
        'Google-Extended',
        'Applebot-Extended',
      ].map((userAgent) => ({ userAgent, ...allow })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
