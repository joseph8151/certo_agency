/**
 * 플레이스홀더 이미지 생성 스크립트
 * ─────────────────────────────────────────────
 * 실제 사진(국제회의 / 비즈니스 미팅 / 전시회 / 통역 현장)을 확보하기 전까지
 * 브랜드 톤에 맞춘 라인 컴포지션 플레이트를 사용합니다.
 *
 *   node scripts/generate-placeholders.mjs
 *
 * 실제 사진으로 교체할 때는 public/images/ 에 사진을 넣고
 * src/data/images.ts 의 경로만 바꾸면 됩니다.
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = resolve(root, 'public/images');
mkdirSync(outDir, { recursive: true });

const C = {
  ivory: '#F7F4EE',
  ivoryLight: '#FAF8F3',
  blue: '#285A8C',
  deep: '#173B5E',
  soft: '#EAF2F8',
  navy: '#192C3B',
};

/** 결정론적 의사난수 — 매 실행마다 동일한 결과 */
function rng(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

/** 원근 그리드 — 컨벤션홀 / 대형 회의장의 건축적 인상 */
function perspective(w, h, seed, ink) {
  const rand = rng(seed);
  const hy = h * 0.44;
  const vpx = w * (0.42 + rand() * 0.16);
  const rays = [];
  const rungs = [];

  for (let i = 0; i <= 22; i += 1) {
    const t = i / 22;
    const x = -w * 0.6 + t * w * 2.2;
    rays.push(`M ${x.toFixed(1)} ${h} L ${vpx.toFixed(1)} ${hy.toFixed(1)}`);
  }

  for (let i = 1; i <= 12; i += 1) {
    const t = i / 13;
    const y = hy + (h - hy) * Math.pow(t, 2.4);
    rungs.push(`M 0 ${y.toFixed(1)} L ${w} ${y.toFixed(1)}`);
  }

  // 천장 구조 — 상단 반대 방향 라인
  const ceiling = [];
  for (let i = 0; i <= 9; i += 1) {
    const t = i / 9;
    const y = hy * (1 - Math.pow(t, 1.8));
    ceiling.push(`M ${(vpx - w * 0.9).toFixed(1)} ${y.toFixed(1)} L ${(vpx + w * 0.9).toFixed(1)} ${y.toFixed(1)}`);
  }

  return [
    `<g stroke="${ink}" stroke-width="0.8" opacity="0.34" fill="none">${rays.map((d) => `<path d="${d}"/>`).join('')}</g>`,
    `<g stroke="${ink}" stroke-width="0.9" opacity="0.26" fill="none">${rungs.map((d) => `<path d="${d}"/>`).join('')}</g>`,
    `<g stroke="${ink}" stroke-width="0.7" opacity="0.14" fill="none">${ceiling.map((d) => `<path d="${d}"/>`).join('')}</g>`,
    // 소실점 주변의 빛
    `<circle cx="${vpx.toFixed(1)}" cy="${hy.toFixed(1)}" r="${(w * 0.32).toFixed(1)}" fill="url(#glow-${seed})"/>`,
  ].join('');
}

/** 커튼월 파사드 — 국제 비즈니스 공간의 인상 */
function facade(w, h, seed, ink) {
  const rand = rng(seed);
  const cols = 18;
  const rows = 9;
  const gw = w / cols;
  const gh = h / rows;
  const lit = [];

  for (let c = 0; c < cols; c += 1) {
    for (let r = 0; r < rows; r += 1) {
      if (rand() > 0.86) {
        lit.push(
          `<rect x="${(c * gw).toFixed(1)}" y="${(r * gh).toFixed(1)}" width="${gw.toFixed(1)}" height="${gh.toFixed(1)}" fill="${ink}" opacity="0.1"/>`,
        );
      }
    }
  }

  const grid = [];
  for (let c = 1; c < cols; c += 1) {
    grid.push(`M ${(c * gw).toFixed(1)} 0 L ${(c * gw).toFixed(1)} ${h}`);
  }
  for (let r = 1; r < rows; r += 1) {
    grid.push(`M 0 ${(r * gh).toFixed(1)} L ${w} ${(r * gh).toFixed(1)}`);
  }

  // 사선 슬래브 — 단조로움을 깨는 건축 요소
  const slab = `<path d="M 0 ${(h * 0.72).toFixed(1)} L ${w} ${(h * 0.52).toFixed(1)} L ${w} ${(h * 0.58).toFixed(1)} L 0 ${(h * 0.78).toFixed(1)} Z" fill="${ink}" opacity="0.07"/>`;

  return `${lit.join('')}<g stroke="${ink}" stroke-width="0.7" opacity="0.22" fill="none">${grid.map((d) => `<path d="${d}"/>`).join('')}</g>${slab}`;
}

/** 문서 레이어 — 번역 업무의 인상 */
function documents(w, h, seed, ink) {
  const rand = rng(seed);
  const out = [];
  const sheets = [
    { x: 0.08, y: 0.14, rot: -7, op: 0.55 },
    { x: 0.28, y: 0.08, rot: 4, op: 0.75 },
    { x: 0.46, y: 0.19, rot: -1.5, op: 1 },
  ];

  sheets.forEach((s) => {
    const sw = w * 0.4;
    const sh = sw * 1.32;
    const x = w * s.x;
    const y = h * s.y;
    const rows = [];
    for (let i = 0; i < 13; i += 1) {
      const ly = y + sh * 0.13 + i * sh * 0.058;
      const lw = sw * (0.4 + rand() * 0.44);
      rows.push(
        `M ${(x + sw * 0.11).toFixed(1)} ${ly.toFixed(1)} L ${(x + sw * 0.11 + lw).toFixed(1)} ${ly.toFixed(1)}`,
      );
    }
    out.push(
      `<g transform="rotate(${s.rot} ${(x + sw / 2).toFixed(1)} ${(y + sh / 2).toFixed(1)})" opacity="${s.op}">` +
        `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${sw.toFixed(1)}" height="${sh.toFixed(1)}" fill="#FFFFFF" opacity="0.9"/>` +
        `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${sw.toFixed(1)}" height="${sh.toFixed(1)}" fill="none" stroke="${ink}" stroke-opacity="0.26" stroke-width="0.9"/>` +
        `<g stroke="${ink}" stroke-width="1" opacity="0.2" fill="none">${rows.map((d) => `<path d="${d}"/>`).join('')}</g>` +
        `<path d="M ${(x + sw * 0.11).toFixed(1)} ${(y + sh * 0.08).toFixed(1)} L ${(x + sw * 0.38).toFixed(1)} ${(y + sh * 0.08).toFixed(1)}" stroke="${C.blue}" stroke-width="2.4" opacity="0.5"/>` +
        `</g>`,
    );
  });

  return out.join('');
}

/** 스카이라인 — 도심 비즈니스 지구의 인상 */
function skyline(w, h, seed, ink) {
  const rand = rng(seed);
  const ground = h * 0.94;
  const towers = [];
  const windows = [];
  let x = -w * 0.04;

  while (x < w) {
    const tw = w * (0.035 + rand() * 0.055);
    const th = h * (0.28 + Math.pow(rand(), 1.6) * 0.52);
    const y = ground - th;

    towers.push(
      `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${tw.toFixed(1)}" height="${th.toFixed(1)}" fill="${ink}" opacity="0.05"/>`,
      `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${tw.toFixed(1)}" height="${th.toFixed(1)}" fill="none" stroke="${ink}" stroke-opacity="0.3" stroke-width="0.9"/>`,
    );

    // 창문 — 일부만 밝게
    const cols = Math.max(2, Math.round(tw / (w * 0.014)));
    const rows = Math.max(3, Math.round(th / (h * 0.045)));
    const cw = tw / cols;
    const ch = th / rows;
    for (let c = 0; c < cols; c += 1) {
      for (let r = 0; r < rows; r += 1) {
        if (rand() > 0.72) {
          windows.push(
            `<rect x="${(x + c * cw + cw * 0.26).toFixed(1)}" y="${(y + r * ch + ch * 0.26).toFixed(1)}" width="${(cw * 0.48).toFixed(1)}" height="${(ch * 0.44).toFixed(1)}" fill="${ink}" opacity="${(0.16 + rand() * 0.3).toFixed(2)}"/>`,
          );
        }
      }
    }

    x += tw + w * (0.004 + rand() * 0.012);
  }

  return [
    `<g>${towers.join('')}</g>`,
    `<g>${windows.join('')}</g>`,
    `<path d="M 0 ${ground.toFixed(1)} L ${w} ${ground.toFixed(1)}" stroke="${ink}" stroke-opacity="0.4" stroke-width="1"/>`,
    `<circle cx="${(w * 0.5).toFixed(1)}" cy="${(h * 0.82).toFixed(1)}" r="${(w * 0.5).toFixed(1)}" fill="url(#glow-${seed})"/>`,
  ].join('');
}

const MOTIFS = { perspective, facade, documents, skyline };

function plate({ name, w, h, seed, tone, motif }) {
  const dark = tone === 'dark';
  const ink = dark ? '#FFFFFF' : C.navy;

  const base = dark
    ? `<stop offset="0%" stop-color="#0F2B45"/><stop offset="52%" stop-color="${C.deep}"/><stop offset="100%" stop-color="#0B1F33"/>`
    : `<stop offset="0%" stop-color="${C.ivoryLight}"/><stop offset="48%" stop-color="${C.soft}"/><stop offset="100%" stop-color="${C.ivory}"/>`;

  const body = MOTIFS[motif](w, h, seed, ink);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="presentation">
  <defs>
    <linearGradient id="bg-${name}" x1="0" y1="0" x2="0.7" y2="1">${base}</linearGradient>
    <radialGradient id="glow-${seed}">
      <stop offset="0%" stop-color="${dark ? '#7FB0DA' : '#FFFFFF'}" stop-opacity="${dark ? 0.3 : 0.85}"/>
      <stop offset="100%" stop-color="${dark ? '#7FB0DA' : '#FFFFFF'}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vig-${name}" cx="0.5" cy="0.45" r="0.78">
      <stop offset="55%" stop-color="#000000" stop-opacity="0"/>
      <stop offset="100%" stop-color="${dark ? '#050F1A' : C.navy}" stop-opacity="${dark ? 0.55 : 0.12}"/>
    </radialGradient>
    <filter id="grain-${name}" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" seed="${seed}"/>
      <feColorMatrix type="saturate" values="0"/>
      <feComponentTransfer><feFuncA type="linear" slope="${dark ? 0.14 : 0.07}"/></feComponentTransfer>
    </filter>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg-${name})"/>
  ${body}
  <rect width="${w}" height="${h}" fill="url(#vig-${name})"/>
  <rect width="${w}" height="${h}" filter="url(#grain-${name})" opacity="0.55"/>
</svg>
`;
}

const plates = [
  { name: 'hero', w: 1000, h: 1250, seed: 21, tone: 'dark', motif: 'perspective' },
  { name: 'interpretation', w: 1200, h: 900, seed: 47, tone: 'dark', motif: 'facade' },
  { name: 'translation', w: 1200, h: 900, seed: 83, tone: 'light', motif: 'documents' },
  { name: 'domestic', w: 1200, h: 1400, seed: 109, tone: 'dark', motif: 'skyline' },
  { name: 'business', w: 1600, h: 900, seed: 151, tone: 'dark', motif: 'skyline' },
];

for (const p of plates) {
  writeFileSync(resolve(outDir, `${p.name}.svg`), plate(p), 'utf8');
  process.stdout.write(`generated public/images/${p.name}.svg\n`);
}
