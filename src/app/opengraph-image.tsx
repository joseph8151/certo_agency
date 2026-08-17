import { ImageResponse } from 'next/og';
import { site } from '@/data/site';

/**
 * Open Graph / Twitter 카드 이미지 — 빌드 시 생성됩니다.
 * 브랜드 디자인을 그대로 쓰기 위해 외부 이미지 없이 코드로 그립니다.
 * 촬영된 브랜드 이미지가 준비되면 이 파일을 지우고
 * src/app/opengraph-image.png (1200×630) 을 넣으면 그 파일이 사용됩니다.
 */
export const alt = 'CERTO AGENCY — Global Interpretation & Translation Agency';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const IVORY = '#F7F4EE';
const DEEP = '#173B5E';
const BLUE = '#285A8C';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: `linear-gradient(135deg, ${DEEP} 0%, ${BLUE} 58%, #0F2B45 100%)`,
          padding: '72px 80px',
          color: '#FFFFFF',
          position: 'relative',
        }}
      >
        {/*
          얇은 그래티큘 — Line Map 과 동일한 시각 언어.
          Satori(next/og)는 SVG 좌표 처리가 제한적이므로 1px div 로 그립니다.
        */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex' }}>
          {Array.from({ length: 11 }).map((_, i) => (
            <div
              key={`v${i}`}
              style={{
                position: 'absolute',
                left: (i + 1) * 100,
                top: 0,
                width: 1,
                height: 630,
                background: 'rgba(255,255,255,0.12)',
              }}
            />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`h${i}`}
              style={{
                position: 'absolute',
                left: 0,
                top: (i + 1) * 90,
                width: 1200,
                height: 1,
                background: 'rgba(255,255,255,0.12)',
              }}
            />
          ))}
          {/*
            권역 노드 — 서울(큰 점)을 중심으로.
            헤드라인이 차지하는 좌측(x < 930)을 비워두고 우측 여백에만 배치합니다.
          */}
          {[
            { x: 950, y: 132, r: 6 },
            { x: 1128, y: 168, r: 6 },
            { x: 1046, y: 250, r: 11 },
            { x: 972, y: 408, r: 6 },
            { x: 1124, y: 470, r: 6 },
          ].map((node) => (
            <div
              key={`${node.x}-${node.y}`}
              style={{
                position: 'absolute',
                left: node.x - node.r,
                top: node.y - node.r,
                width: node.r * 2,
                height: node.r * 2,
                borderRadius: node.r,
                background: 'rgba(255,255,255,0.5)',
              }}
            />
          ))}
          {/* 서울 노드를 감싸는 링 */}
          <div
            style={{
              position: 'absolute',
              left: 1046 - 34,
              top: 250 - 34,
              width: 68,
              height: 68,
              borderRadius: 34,
              border: '1px solid rgba(255,255,255,0.4)',
            }}
          />
        </div>

        {/* 로고 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ fontSize: 30, letterSpacing: 14, fontWeight: 600 }}>CERTO</div>
          <div style={{ fontSize: 18, letterSpacing: 18, color: IVORY, opacity: 0.75 }}>AGENCY</div>
        </div>

        {/* 메시지 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
          <div
            style={{
              fontSize: 62,
              fontWeight: 600,
              lineHeight: 1.28,
              letterSpacing: '-0.02em',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>언어가 필요한 순간,</span>
            <span>가장 적합한 전문가를 연결합니다.</span>
          </div>
          <div style={{ fontSize: 26, color: IVORY, opacity: 0.8 }}>{site.tagline}</div>
        </div>

        {/* 하단 라벨 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            borderTop: '1px solid rgba(255,255,255,0.28)',
            paddingTop: 26,
            fontSize: 20,
            letterSpacing: 3,
            color: IVORY,
            opacity: 0.72,
          }}
        >
          <span>INTERPRETATION</span>
          <span>·</span>
          <span>TRANSLATION</span>
          <span>·</span>
          <span>GLOBAL PROJECTS</span>
        </div>
      </div>
    ),
    size,
  );
}
