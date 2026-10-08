/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    /*
     * 이미지 최적화 — 기본값 "끔"
     * ─────────────────────────────────────────────
     * 실사 사진(.jpg)을 쓰면서 Cloudflare Workers 에 배포 중입니다.
     * Workers 에는 Next.js 이미지 최적화 서버가 없어서, 켜 두면 /_next/image 요청이
     * 전부 실패하고 사이트의 모든 사진이 깨집니다. 그래서 기본을 끔으로 둡니다.
     * (원본을 미리 압축해 두었습니다 — 5장 합계 약 360KB)
     *
     * Vercel / Node 서버로 옮기거나 Cloudflare Images 바인딩(유료)을 붙였다면
     * 아래 환경 변수로 최적화를 다시 켜세요.
     *   NEXT_IMAGE_UNOPTIMIZED=false npm run build
     */
    unoptimized: process.env.NEXT_IMAGE_UNOPTIMIZED !== 'false',
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
