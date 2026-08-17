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
};

export default nextConfig;
