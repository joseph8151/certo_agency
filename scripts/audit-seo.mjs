/**
 * SEO 감사 — 배포 전에 사이트맵의 모든 URL 을 실제로 열어 점검합니다.
 *   npm run build && npx next start -p 3000 &   그리고   npm run audit:seo
 *
 * 확인하는 것: 응답 코드 · h1 개수 · title/description 유일성과 길이 ·
 * canonical · 이미지 alt · 구조화 데이터 파싱 · 내부 링크가 가리키는 곳이 존재하는지
 */
const base = process.argv[2] ?? 'http://127.0.0.1:3000';
const get = async (path) => {
  const res = await fetch(base + path, { redirect: 'manual' });
  return { status: res.status, html: res.status === 200 ? await res.text() : '' };
};

const sitemap = (await get('/sitemap.xml')).html;
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname || '/');
console.log(`사이트맵 URL ${urls.length}개\n`);

const titles = new Map(), descs = new Map(), problems = [], known = new Set(urls);
const unknownLinks = new Map();
const text = (h) => h.replace(/<[^>]+>/g, '').trim();

for (const path of urls) {
  const { status, html } = await get(path);
  const bad = [];
  if (status !== 200) { bad.push(`HTTP ${status}`); problems.push([path, bad]); continue; }

  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) bad.push(`h1 ${h1}개`);

  const title = text((html.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || '');
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  const canon = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || '';
  if (!title) bad.push('title 없음'); else if (title.length > 70) bad.push(`title 길이 ${title.length}`);
  if (!desc) bad.push('description 없음'); else if (desc.length > 170) bad.push(`description 길이 ${desc.length}`);
  if (!canon) bad.push('canonical 없음');
  else if (new URL(canon).pathname.replace(/\/$/, '') !== path.replace(/\/$/, '')) bad.push(`canonical 불일치 ${canon}`);
  (titles.get(title) ?? titles.set(title, []).get(title)).push(path);
  (descs.get(desc) ?? descs.set(desc, []).get(desc)).push(path);

  for (const img of html.match(/<img\b[^>]*>/g) || []) if (!/\balt="[^"]/.test(img)) bad.push('alt 없는 이미지');

  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch { bad.push('JSON-LD 파싱 실패'); }
  }

  for (const m of html.matchAll(/<a [^>]*href="(\/[^"#?]*)"/g)) {
    const href = m[1].replace(/\/$/, '') || '/';
    if (!known.has(href) && !/^\/(api|_next|images|icon|opengraph)/.test(href)) unknownLinks.set(href, path);
  }
  if (bad.length) problems.push([path, bad]);
}

const dupT = [...titles].filter(([, p]) => p.length > 1);
const dupD = [...descs].filter(([, p]) => p.length > 1);

console.log(problems.length ? `✗ 개별 문제 ${problems.length}곳` : '✓ 모든 페이지: 200 · h1 1개 · title/description/canonical · alt · JSON-LD');
for (const [p, b] of problems.slice(0, 25)) console.log('   ', p, b.join(', '));
console.log(dupT.length ? `✗ 중복 title ${dupT.length}건` : '✓ title 전부 유일');
dupT.slice(0, 8).forEach(([t, p]) => console.log('   ', t, '←', p.join(', ')));
console.log(dupD.length ? `✗ 중복 description ${dupD.length}건` : '✓ description 전부 유일');
dupD.slice(0, 8).forEach(([t, p]) => console.log('   ', t.slice(0, 50), '←', p.join(', ')));
console.log(unknownLinks.size ? `✗ 사이트맵에 없는 내부 링크 ${unknownLinks.size}개` : '✓ 내부 링크가 모두 사이트맵 안의 페이지를 가리킴');
[...unknownLinks].slice(0, 10).forEach(([h, p]) => console.log('   ', h, '(in', p + ')'));
process.exit(problems.length || dupT.length || dupD.length || unknownLinks.size ? 1 : 0);
