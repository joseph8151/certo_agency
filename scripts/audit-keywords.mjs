/**
 * 네이버 키워드 반영 점검 — node scripts/audit-keywords.mjs http://127.0.0.1:3000
 * ─────────────────────────────────────────────
 * docs/naver-keywords/*.txt 의 키워드가 사이트 본문에 실제로 들어 있는지 확인합니다.
 * 사이트맵의 모든 페이지에서 보이는 글자만 뽑아(스크립트 · 메타 제외) 비교합니다.
 *
 *   ✓ 정확히 일치   키워드가 그대로 어느 페이지 본문에 있음
 *   ◐ 부분 일치     띄어쓰기를 무시하면 일치하거나, 단어들이 한 페이지 안에 함께 있음
 *   ✗ 없음          어떤 페이지에도 없음
 *
 * ◐ 와 ✗ 목록은 "페이지를 더 만들라" 는 신호가 아니라 "이 말을 쓸 만한 자리가 있는지" 를
 * 사람이 판단하기 위한 목록입니다. 억지로 본문에 끼워 넣으면 키워드 과다 사용으로 감점됩니다.
 *
 * 옵션: --only=1-head   특정 파일만   --show=30   ✗ 목록을 30개까지 출력 (기본 40)
 */
import { readdirSync, readFileSync } from 'node:fs';

const base = (process.argv[2] ?? 'http://127.0.0.1:3000').replace(/\/$/, '');
const opt = (k, d) => (process.argv.find((a) => a.startsWith(`--${k}=`)) ?? `--${k}=${d}`).split('=')[1];
const only = opt('only', '');
const show = Number(opt('show', 40));

const strip = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<head[\s\S]*?<\/head>/i, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&apos;/g, "'")
    .replace(/\s+/g, ' ');

const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(/^https?:\/\/[^/]+/, base));
const pages = [];
for (const url of urls) {
  const res = await fetch(url);
  if (res.status !== 200) continue;
  const text = strip(await res.text());
  pages.push({ url, text, compact: text.replace(/\s/g, '').toLowerCase(), lower: text.toLowerCase() });
}
console.log(`페이지 ${pages.length}개 본문을 읽었습니다.\n`);

const files = readdirSync('docs/naver-keywords').filter((f) => f.endsWith('.txt') && f.includes(only)).sort();
for (const file of files) {
  const kws = readFileSync(`docs/naver-keywords/${file}`, 'utf8').split('\n').map((s) => s.trim()).filter(Boolean);
  const exact = [];
  const partial = [];
  const missing = [];
  for (const kw of kws) {
    const k = kw.toLowerCase();
    const kc = k.replace(/\s/g, '');
    const hit = pages.find((p) => p.lower.includes(k));
    if (hit) { exact.push(kw); continue; }
    const near = pages.find((p) => p.compact.includes(kc)) ?? pages.find((p) => k.split(' ').every((t) => p.lower.includes(t)));
    if (near) partial.push(kw); else missing.push(kw);
  }
  const pct = (n) => `${((n / kws.length) * 100).toFixed(0)}%`;
  console.log(`${file}  (${kws.length}개)  ✓ ${exact.length} ${pct(exact.length)}   ◐ ${partial.length}   ✗ ${missing.length}`);
  if (missing.length) {
    console.log(`   ✗ ${missing.slice(0, show).join(' · ')}${missing.length > show ? ` … 외 ${missing.length - show}개` : ''}`);
  }
  if (partial.length && partial.length <= show) console.log(`   ◐ ${partial.join(' · ')}`);
  console.log('');
}
process.exit(0);
