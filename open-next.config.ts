import { defineCloudflareConfig } from '@opennextjs/cloudflare';

/**
 * Cloudflare Workers 배포 설정 (@opennextjs/cloudflare)
 * ─────────────────────────────────────────────
 * Vercel / Node 서버로 배포할 때는 이 파일이 사용되지 않습니다.
 *
 * ISR/캐시를 쓰려면 R2 또는 KV 기반 incrementalCache 를 추가하세요.
 * 현재 사이트는 정적 프리렌더 + 문의 API 뿐이라 기본 설정으로 충분합니다.
 */
export default defineCloudflareConfig();
