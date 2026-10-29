/**
 * 검색 랜딩 페이지 데이터 정합성 검사 — npm run check:cities
 * ─────────────────────────────────────────────
 * 도시(city-pages) · 국가(country-data) · 언어(language-data) 세 종류를 함께 봅니다.
 *
 *  1) 커버리지 목록(cities.ts)과 도시 상세 페이지가 1:1 인지
 *  2) 도시가 속한 나라마다 국가 페이지가 있는지
 *  3) 국가가 가리키는 언어, 언어가 가리키는 국가가 실제로 존재하는지
 *  4) slug 중복
 *  5) 문장 중복 — 페이지 사이에 똑같은 문장이 있으면 양산 페이지로 판단됩니다.
 *
 * 5번이 가장 중요합니다. 제목만 바꾼 비슷한 페이지는 검색엔진이
 * 품질 낮은 사이트로 판단해 사이트 전체 순위를 떨어뜨립니다.
 */
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import ts from 'typescript';

// TS 데이터 파일을 그대로 읽어 평가합니다. (정규식으로 긁지 않으므로 구조가 바뀌어도 안전)
const cache = {};
function load(name) {
  if (cache[name]) return cache[name].exports;
  const source = readFileSync(`src/data/${name}.ts`, 'utf8');
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: 'ES2022' } });
  const mod = { exports: {} };
  cache[name] = mod;
  const req = (id) => (id.startsWith('./') ? load(id.slice(2)) : createRequire(import.meta.url)(id));
  new Function('exports', 'require', 'module', outputText)(mod.exports, req, mod);
  return mod.exports;
}

const { cityPages } = load('city-pages');
const { languageData } = load('language-data');
const { countryData } = load('country-data');
const { cityRegions } = load('cities');
const { koreaRegions } = load('korea-regions');

const problems = [];
const check = (label, bad) => {
  console.log(`${bad.length ? '✗' : '✓'} ${label}${bad.length ? ' → ' + JSON.stringify(bad) : ''}`);
  if (bad.length) problems.push(label);
};

const coverage = cityRegions.flatMap((r) => r.cities);
const detail = cityPages.map((c) => c.city);
const countryNames = countryData.map((c) => c.name);
const langSlugs = languageData.map((l) => l.slug);

console.log(`도시 ${cityPages.length} · 국가 ${countryData.length} · 언어 ${languageData.length}\n`);

check('커버리지 도시 중 상세 페이지 없음', coverage.filter((c) => !detail.includes(c)));
check('커버리지에 없는 도시 페이지', detail.filter((c) => !coverage.includes(c)));
check('국가 페이지가 없는 도시의 나라', [...new Set(cityPages.map((c) => c.country))].filter((n) => !countryNames.includes(n)));
check('국가가 가리키는 없는 언어', countryData.flatMap((c) => c.languages.filter((s) => !langSlugs.includes(s)).map((s) => `${c.name}→${s}`)));
check('언어가 가리키는 없는 국가', languageData.flatMap((l) => l.countries.filter((n) => !countryNames.includes(n)).map((n) => `${l.name}→${n}`)));

const slugDup = (arr) => arr.filter((s, i) => arr.indexOf(s) !== i);
check('중복 slug (도시)', slugDup(cityPages.map((c) => c.slug)));
check('중복 slug (국가)', slugDup(countryData.map((c) => c.slug)));
check('국내 지역 지명 중복', (() => { const seen = new Set(); const d = []; for (const r of koreaRegions) for (const g of r.places) for (const n of g.names) { if (seen.has(n)) d.push(n); seen.add(n); } return d; })());
check('중복 slug (언어)', slugDup(languageData.map((l) => l.slug)));

// 문장 중복: 같은 문장이 서로 다른 페이지에 나오면 양산 페이지입니다.
const sentences = new Map(); // 문장 → 위치 목록
const add = (text, where) => {
  const t = String(text ?? '').trim();
  if (t.length < 24) return; // 짧은 제목·라벨은 겹칠 수 있음
  (sentences.get(t) ?? sentences.set(t, []).get(t)).push(where);
};
for (const c of cityPages) {
  add(c.lead, `도시:${c.city}`);
  c.scenes.forEach((s) => add(s.body, `도시:${c.city}`));
  c.notes.forEach((n) => add(n.body, `도시:${c.city}`));
  c.faqs.forEach((f) => { add(f.q, `도시:${c.city}`); add(f.a, `도시:${c.city}`); });
}
for (const c of countryData) {
  add(c.lead, `국가:${c.name}`);
  c.scenes.forEach((s) => add(s.body, `국가:${c.name}`));
  c.notes.forEach((n) => add(n.body, `국가:${c.name}`));
  c.faqs.forEach((f) => { add(f.q, `국가:${c.name}`); add(f.a, `국가:${c.name}`); });
}
for (const l of languageData) {
  add(l.lead, `언어:${l.name}`);
  [...l.interpretation.items, ...l.translation.items].forEach((s) => add(s.body, `언어:${l.name}`));
  add(l.interpretation.lead, `언어:${l.name}`);
  add(l.translation.lead, `언어:${l.name}`);
  l.notes.forEach((n) => add(n.body, `언어:${l.name}`));
  l.faqs.forEach((f) => { add(f.q, `언어:${l.name}`); add(f.a, `언어:${l.name}`); });
}
for (const r of koreaRegions) {
  add(r.lead, `지역:${r.name}`);
  r.areas.forEach((a) => add(a.body, `지역:${r.name}`));
  r.notes.forEach((n) => add(n.body, `지역:${r.name}`));
  r.faqs.forEach((f) => { add(f.q, `지역:${r.name}`); add(f.a, `지역:${r.name}`); });
}
const dup = [...sentences.entries()].filter(([, w]) => new Set(w).size > 1).map(([t, w]) => `${[...new Set(w)].join(' = ')}: "${t.slice(0, 40)}…"`);
check('페이지 사이에 중복된 문장', dup);

console.log(problems.length ? `\n${problems.length}개 항목에서 문제가 발견되었습니다.` : '\n모두 통과했습니다.');
process.exit(problems.length ? 1 : 0);
