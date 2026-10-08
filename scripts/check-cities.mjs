/**
 * 도시 데이터 정합성 검사 — npm run check:cities
 * ─────────────────────────────────────────────
 * 확인하는 것
 *   1) cities.ts 의 커버리지 목록과 city-pages.ts 의 상세 페이지가 1:1 로 맞는지
 *   2) slug 가 중복되지 않는지
 *   3) lead 문장이 중복되지 않는지
 *
 * 3번이 중요합니다. 제목만 바꾼 비슷한 페이지를 양산하면 검색엔진이
 * 품질 낮은 사이트로 판단해 사이트 전체 순위가 떨어집니다.
 * 도시를 추가할 때는 그 도시에서만 할 수 있는 이야기가 있는지 먼저 확인하세요.
 */
import { readFileSync } from 'fs';

const cities = readFileSync('src/data/cities.ts', 'utf8');
const pages  = readFileSync('src/data/city-pages.ts', 'utf8');

// cities.ts 의 도시 목록
const regionBlocks = [...cities.matchAll(/cities:\s*\[([\s\S]*?)\]/g)].map(m => m[1]);
const coverage = regionBlocks.flatMap(b => [...b.matchAll(/["']([^"']+)["']/g)].map(m => m[1]));

// city-pages.ts 의 city 필드
const detail = [...pages.matchAll(/^\s{4}city:\s*["']([^"']+)["']/gm)].map(m => m[1]);
const slugs  = [...pages.matchAll(/^\s{4}slug:\s*["']([^"']+)["']/gm)].map(m => m[1]);

const missing = coverage.filter(c => !detail.includes(c));
const orphan  = detail.filter(c => !coverage.includes(c));
const dupSlug = slugs.filter((s, i) => slugs.indexOf(s) !== i);

console.log('커버리지 목록 :', coverage.length, '개');
console.log('상세 페이지   :', detail.length, '개');
console.log('상세 없는 도시:', missing.length ? missing : '없음');
console.log('목록 없는 페이지:', orphan.length ? orphan : '없음');
console.log('중복 slug     :', dupSlug.length ? dupSlug : '없음');

// 내용이 실제로 구분되는지 — lead 문장이 중복되면 양산 페이지입니다
const leads = [...pages.matchAll(/^\s{4}lead:\s*["']([^"']+)["']/gm)].map(m => m[1]);
const dupLead = leads.filter((l, i) => leads.indexOf(l) !== i);
console.log('중복 lead     :', dupLead.length ? dupLead : '없음');
process.exit(missing.length || orphan.length || dupSlug.length || dupLead.length ? 1 : 0);
