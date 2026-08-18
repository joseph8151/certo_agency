'use client';

import Script from 'next/script';
import { useEffect } from 'react';

/**
 * 분석 도구 연동 — 모두 환경 변수로 켜집니다. 미설정 시 아무것도 로드되지 않습니다.
 *
 *   NEXT_PUBLIC_CF_BEACON_TOKEN  Cloudflare Web Analytics 토큰
 *                                (무료 · 쿠키 미사용 → 동의 배너 불필요, 페이지뷰 전용)
 *   NEXT_PUBLIC_GA_ID            GA4 측정 ID (예: G-XXXXXXXXXX)
 *                                (CTA 클릭을 이벤트로 수집하려면 GA4 가 필요합니다)
 */
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const CF_TOKEN = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function Analytics() {
  // data-cta 를 가진 요소의 클릭을 GA4 이벤트로 보냅니다.
  // 이벤트 위임이라 버튼이 늘어나도 별도 작업이 필요 없습니다.
  useEffect(() => {
    if (!GA_ID) return;

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const element = target?.closest<HTMLElement>('[data-cta]');
      if (!element) return;

      window.gtag?.('event', 'cta_click', {
        cta_id: element.dataset.cta,
        // 버튼 끝의 장식용 화살표(→ ↗)는 라벨에서 제거합니다.
        cta_text: element.textContent?.replace(/[\s→↗]+$/u, '').trim().slice(0, 60),
        page_path: window.location.pathname,
      });
    };

    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return (
    <>
      {CF_TOKEN ? (
        <Script
          id="cf-beacon"
          strategy="afterInteractive"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={JSON.stringify({ token: CF_TOKEN })}
        />
      ) : null}

      {GA_ID ? (
        <>
          <Script
            id="ga4-src"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
          </Script>
        </>
      ) : null}
    </>
  );
}
