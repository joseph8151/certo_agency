/**
 * 블로그 발행 계획 생성 — node scripts/blog-plan.mjs
 * ─────────────────────────────────────────────
 * 사이트 데이터(국가 · 도시 · 지역 · 주제)에서 30일치 발행표를 만듭니다.
 *   docs/blog-plan/blog-plan.md   일자별 표 + 글마다 쓸 내용과 링크
 *   docs/blog-plan/blog-plan.csv  엑셀 · 구글시트용
 *
 * 규칙
 *  - 블로그 A · B 는 같은 나라 · 지역 · 주제를 겹쳐 쓰지 않습니다. (중복 문서 방지)
 *  - 1~14일차는 블로그당 하루 1편(해외 · 국내 번갈아), 15~30일차는 하루 2편(해외 1 + 국내 1).
 *  - 해외 글은 "{나라} 통역", "{나라} 현지 통역", "{나라} 현지 통역사" 를 핵심 키워드로 둡니다.
 *  - 글의 사실(시차 · 언어 · 주의점)은 사이트 데이터에서 가져오므로 사이트와 어긋나지 않습니다.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { posix } from 'node:path';
import ts from 'typescript';

const cache = {};
function load(name) {
  if (cache[name]) return cache[name].exports;
  const source = readFileSync(`src/data/${name}.ts`, 'utf8');
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: 'ES2022' } });
  const mod = { exports: {} };
  cache[name] = mod;
  const req = (id) => (id.startsWith('.') ? load(posix.normalize(posix.join(posix.dirname(name), id))) : createRequire(import.meta.url)(id));
  new Function('exports', 'require', 'module', outputText)(mod.exports, req, mod);
  return mod.exports;
}

const SITE = 'https://www.certo-agency.com';
const { countryData } = load('country-data');
const { countryCities } = load('country-cities');
const { cityPages } = load('city-pages');
const { koreaRegions } = load('korea-regions');
const { modeTopics } = load('topic-data-modes');
const { fieldTopics } = load('topic-data-fields');
const { costTopics } = load('topic-data-docs');

const byName = Object.fromEntries(countryData.map((c) => [c.name, c]));

/* ── 해외: 사업 비중이 큰 순서 (46개국) ─────────────── */
const overseasOrder = [
  '미국', '일본', '중국', '베트남', '독일', '영국', '프랑스', '인도', '인도네시아', '태국', '싱가포르', '말레이시아',
  '필리핀', '아랍에미리트', '사우디아라비아', '카타르', '호주', '캐나다', '멕시코', '브라질', '폴란드', '체코', '헝가리',
  '튀르키예', '이탈리아', '스페인', '네덜란드', '스위스', '대만', '홍콩', '카자흐스탄', '우즈베키스탄', '몽골', '이집트',
  '남아프리카공화국', '케냐', '칠레', '아르헨티나', '콜롬비아', '페루', '뉴질랜드', '캄보디아', '방글라데시', '파키스탄',
  '루마니아', '스웨덴',
];

const titlePatterns = [
  (n, c) => `${n} 통역 필요할 때, ${c.notes[0].label} 먼저 확인하세요`,
  (n) => `${n} 현지 통역사 섭외, 출장 전에 정리할 3가지`,
  (n, c) => `${n} 현지 통역 — ${c.scenes[0].title} 일정에서 놓치기 쉬운 점`,
  (n) => `${n} 출장 통역, 현지 통역사 vs 한국 동행 통역 어느 쪽이 맞을까`,
];

// 데이터의 notes[0].label 이 제목에 쓰기 어색한 나라는 일반형 제목을 씁니다.
const awkwardLabel = new Set(['독일', '폴란드', '이탈리아']);

function overseasPost(name, i) {
  const c = byName[name];
  const cities = (countryCities[name] ?? []).flatMap((g) => g.cities).slice(0, 4);
  const pages = cityPages.filter((p) => p.country === name).slice(0, 2);
  const kw = [`${name} 통역`, `${name} 현지 통역`, `${name} 현지 통역사`];
  return {
    kind: '해외',
    title: titlePatterns[i % titlePatterns.length === 0 && awkwardLabel.has(name) ? 1 : i % titlePatterns.length](name, c),
    keywords: kw.join(', '),
    sub: [`${name} 출장 통역`, `${name} 통역사 섭외`, ...cities.map((x) => `${x} 현지 통역`)].join(', '),
    outline: [
      `${name} 출장에서 통역이 필요한 자리: ${c.scenes.map((s) => s.title).join(' / ')}`,
      `${c.notes[0].label} — ${c.notes[0].body}`,
      `${c.notes[1].label} — ${c.notes[1].body}`,
      `현지 통역사와 한국 동행 통역 중 고르는 기준 (시차: ${c.timeDiff}, 언어: ${c.language})`,
      `통역사에게 미리 알려줄 정보 정리 (일정 · 분야 · 참석자 · 자료)${cities.length ? ` — ${cities.join('·')} 같은 도시별 일정이면 도시를 함께 적기` : ''}`,
    ],
    links: [`${SITE}/country/${c.slug}`, ...pages.map((p) => `${SITE}/global/${p.slug}`)].join('\n'),
    faq: c.faqs.map((f) => f.q).join(' / '),
  };
}

/* ── 국내: 지역 17 + 주제 29 ──────────────────────── */
const topicPick = [
  'simultaneous-interpretation', 'consecutive-interpretation', 'escort-interpretation', 'protocol-interpretation',
  'video-meeting-interpretation', 'buyer-interpretation', 'negotiation-interpretation', 'investment-interpretation',
  'due-diligence-interpretation', 'conference-interpretation', 'exhibition-interpretation', 'factory-interpretation',
  'semiconductor-interpretation', 'automotive-interpretation', 'battery-interpretation', 'shipbuilding-interpretation',
  'plant-construction-interpretation', 'energy-interpretation', 'finance-interpretation', 'legal-interpretation',
  'it-interpretation', 'technical-interpretation', 'cost-interpreter-staffing', 'choose-interpretation-company',
  'urgent-interpreter', 'staffing-dispatch', 'cost-by-mode', 'medical-interpretation', 'business-meeting-interpretation',
];
const allTopics = [...modeTopics, ...fieldTopics, ...costTopics];
const topicBySlug = Object.fromEntries(allTopics.map((t) => [t.slug, t]));
const regionTitle = [
  (r) => `${r.name} 통역사 섭외, 일정 잡기 전에 알아둘 것`,
  (r) => `${r.name} 통역 · 통번역이 필요한 자리 — ${r.areas[0].title}부터`,
  (r) => `${r.name} 출장 통역, ${r.notes[0].label} 때문에 놓치는 일정`,
];
const topicTitle = (t, i) =>
  [`${t.name}, 언제 어떻게 의뢰할까`, `${t.name} 맡기기 전에 확인할 것`, `${t.name} 준비 체크리스트`][i % 3];

function regionPost(r, i) {
  const places = r.places.flatMap((g) => g.names).slice(0, 5);
  return {
    kind: '국내',
    title: regionTitle[i % 3](r),
    keywords: [`${r.name} 통역`, `${r.name} 통역사`, `${r.name} 통번역`].join(', '),
    sub: [`${r.name} 통역사 섭외`, ...places.map((p) => `${p} 통역`)].join(', '),
    outline: [
      ...r.areas.slice(0, 3).map((a) => `${a.title} — ${a.body.slice(0, 80)}…`),
      `${r.notes[0].label} — ${r.notes[0].body}`,
      `${r.notes[1].label} — ${r.notes[1].body}`,
    ],
    links: `${SITE}/korea/${r.slug}`,
    faq: r.faqs.map((f) => f.q).join(' / '),
  };
}
function topicPost(t, i) {
  return {
    kind: '국내',
    title: topicTitle(t, i),
    keywords: [t.name, ...t.alsoSearched.slice(0, 2)].join(', '),
    sub: t.alsoSearched.slice(2, 6).join(', '),
    outline: [
      `${t.name}이(가) 쓰이는 자리: ${t.items.map((x) => x.title).join(' / ')}`,
      ...t.notes.map((n) => `${n.label} — ${n.body}`),
      '서울 · 수도권 현장 의뢰 시 준비 자료와 일정 전달 방법',
    ],
    links: `${SITE}/topic/${t.slug}`,
    faq: t.faqs.map((f) => f.q).join(' / '),
  };
}

// 국내 순서: 지역과 주제를 번갈아
const regionsSorted = ['seoul', 'gyeonggi', 'incheon', 'busan', 'daegu', 'daejeon', 'gwangju', 'ulsan', 'chungnam', 'chungbuk', 'gyeongnam', 'gyeongbuk', 'jeonnam', 'jeonbuk', 'gangwon', 'jeju', 'sejong']
  .map((s) => koreaRegions.find((r) => r.slug === s)).filter(Boolean);
const domesticQueue = [];
for (let i = 0, ri = 0, ti = 0; ri < regionsSorted.length || ti < topicPick.length; i++) {
  if (ti < topicPick.length && (i % 2 === 0 || ri >= regionsSorted.length)) domesticQueue.push(topicPost(topicBySlug[topicPick[ti]], ti++));
  else if (ri < regionsSorted.length) domesticQueue.push(regionPost(regionsSorted[ri], ri++));
}
const overseasQueue = overseasOrder.map((n, i) => overseasPost(n, i));

/* ── 일정 배분 ──────────────────────────────────── */
// 블로그 A 는 짝수 번째, B 는 홀수 번째를 가져가 같은 주제가 겹치지 않습니다.
const A = { o: overseasQueue.filter((_, i) => i % 2 === 0), d: domesticQueue.filter((_, i) => i % 2 === 0) };
const B = { o: overseasQueue.filter((_, i) => i % 2 === 1), d: domesticQueue.filter((_, i) => i % 2 === 1) };

function schedule(blog, name) {
  const rows = [];
  let o = 0;
  let d = 0;
  for (let day = 1; day <= 30; day++) {
    if (day <= 14) {
      const useOverseas = day % 2 === 1;
      const post = useOverseas ? blog.o[o++] : blog.d[d++];
      rows.push({ day, blog: name, slot: '10:00', ...post });
    } else {
      rows.push({ day, blog: name, slot: '09:30', ...blog.o[o++] });
      rows.push({ day, blog: name, slot: '15:30', ...blog.d[d++] });
    }
  }
  return rows;
}
const rows = [...schedule(A, 'A'), ...schedule(B, 'B')].sort((x, y) => x.day - y.day || x.blog.localeCompare(y.blog) || x.slot.localeCompare(y.slot));

/* ── 출력 ───────────────────────────────────────── */
const csvEsc = (v) => `"${String(v).replace(/"/g, '""')}"`;
const csv = ['일차,블로그,시간,구분,제목,핵심 키워드,보조 키워드,링크할 페이지,글 구성(소제목),다룰 질문']
  .concat(rows.map((r) => [r.day, r.blog, r.slot, r.kind, r.title, r.keywords, r.sub, r.links, r.outline.join('\n'), r.faq].map(csvEsc).join(',')))
  .join('\n');
writeFileSync('docs/blog-plan/blog-plan.csv', '﻿' + csv);

let md = `# 블로그 30일 발행 계획

- 블로그 A · B 는 같은 나라 · 지역 · 주제를 겹치지 않게 나눴습니다.
- **1~14일차: 블로그당 하루 1편**(해외 · 국내 번갈아) → 반응을 보며 시작합니다.
- **15~30일차: 블로그당 하루 2편**(해외 1 + 국내 1, 오전 · 오후)
- 총 ${rows.length}편 (해외 ${rows.filter((r) => r.kind === '해외').length} · 국내 ${rows.filter((r) => r.kind === '국내').length})
- 해외 글의 핵심 키워드: **"나라 통역" · "나라 현지 통역" · "나라 현지 통역사"** — 제목과 본문에 자연스럽게 각각 1~2회 넣습니다.
- 글마다 사이트 링크를 1~2개 거세요. 본문은 사이트 문장을 그대로 옮기지 말고 **직접 겪은 사례 · 사진 · 표** 를 더해 다시 쓰세요.

## 일자별 표

| 일차 | 블로그 | 시간 | 구분 | 제목 | 핵심 키워드 |
| --- | --- | --- | --- | --- | --- |
${rows.map((r) => `| ${r.day} | ${r.blog} | ${r.slot} | ${r.kind} | ${r.title} | ${r.keywords} |`).join('\n')}

## 글별 구성

${rows
  .map(
    (r) => `### ${r.day}일차 · 블로그 ${r.blog} · ${r.slot} · ${r.kind}
**${r.title}**

- 핵심 키워드: ${r.keywords}
- 보조 키워드: ${r.sub}
- 링크할 페이지:
${r.links.split('\n').map((l) => `  - ${l}`).join('\n')}
- 글 구성:
${r.outline.map((o) => `  1. ${o}`).join('\n')}
- 다룰 질문: ${r.faq}
`,
  )
  .join('\n')}
`;
writeFileSync('docs/blog-plan/blog-plan.md', md);
console.log(`${rows.length}편 생성 · 해외 ${rows.filter((r) => r.kind === '해외').length} · 국내 ${rows.filter((r) => r.kind === '국내').length}`);
const dupTitles = rows.map((r) => r.title).filter((t, i, a) => a.indexOf(t) !== i);
console.log('중복 제목:', dupTitles.length);
