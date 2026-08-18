/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    /*
     * 이미지 최적화 비활성화 스위치
     * ─────────────────────────────────────────────
     * 현재 플레이스홀더는 SVG 라서 Next.js 가 최적화를 건너뛰고 원본을 그대로 서빙합니다.
     * (즉, 지금은 어느 호스팅에서든 추가 설정이 필요 없습니다)
     *
     * 실사 사진(.jpg/.png)으로 교체한 뒤 Cloudflare Workers 에 배포하는 경우에는
     * Cloudflare Images 바인딩(유료)을 붙이거나, 이 값을 켜서 최적화를 끄면 됩니다.
     *   NEXT_IMAGE_UNOPTIMIZED=true npm run cf:build
     * Vercel / Node 서버 배포에서는 설정하지 않는 것을 권장합니다.
     */
    unoptimized: process.env.NEXT_IMAGE_UNOPTIMIZED === 'true',
    // 실사 이미지를 외부 CDN에서 불러올 경우 여기에 호스트를 추가하세요.
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },

  /**
   * 보안 헤더
   * ─────────────────────────────────────────────
   * Cloudflare 의 정적 자산은 Worker 를 거치지 않을 수 있어
   * public/_headers 에 같은 내용을 함께 두었습니다.
   *
   * CSP 는 의도적으로 넣지 않았습니다. 정적 프리렌더를 유지하려면 nonce 를 쓸 수 없어
   * script-src 에 'unsafe-inline' 을 열어야 하고, 그러면 실효가 크게 줄어듭니다.
   * 필요하시면 사용 중인 외부 스크립트를 확정한 뒤 별도로 추가하세요.
   */
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
