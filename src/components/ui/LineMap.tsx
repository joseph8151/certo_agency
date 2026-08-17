/**
 * Line Map — 얇은 선으로 표현한 글로벌 커버리지 도식.
 * 일반적인 세계지도 일러스트 대신 경위도 그래티큘(graticule) 위에
 * 서울에서 각 권역으로 이어지는 얇은 호(arc)를 그립니다.
 * 서버 컴포넌트 — 클라이언트 JS를 추가하지 않습니다.
 */

const W = 1000;
const H = 500;

/** 노드가 분포하는 영역만 잘라내 지도가 박스를 채우도록 합니다. */
const VIEW = { x: 140, y: 50, w: 875, h: 380 };

const project = (lat: number, lon: number) => ({
  x: ((lon + 180) / 360) * W,
  y: ((90 - lat) / 180) * H,
});

const HUB = { lat: 37.55, lon: 126.98, label: 'Seoul' };

const NODES: { lat: number; lon: number; label: string }[] = [
  { lat: 40.7, lon: -74.0, label: 'North America' },
  { lat: 50.1, lon: 8.68, label: 'Europe' },
  { lat: 25.2, lon: 55.27, label: 'Middle East' },
  { lat: 1.35, lon: 103.8, label: 'Asia' },
  { lat: -33.87, lon: 151.2, label: 'Oceania' },
];

/** 두 지점을 잇는 완만한 호 */
function arc(from: { x: number; y: number }, to: { x: number; y: number }) {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dist = Math.hypot(dx, dy);
  // 진행 방향의 법선으로 살짝 들어 올립니다.
  const lift = Math.min(dist * 0.18, 90);
  const nx = -dy / (dist || 1);
  const ny = -Math.abs(dx / (dist || 1));
  return `M ${from.x.toFixed(1)} ${from.y.toFixed(1)} Q ${(mx + nx * lift * 0.35).toFixed(1)} ${(my + ny * lift).toFixed(1)} ${to.x.toFixed(1)} ${to.y.toFixed(1)}`;
}

type Props = {
  className?: string;
  /** 배경으로 깔 때는 라벨을 끄고 도형만 남깁니다. */
  showLabels?: boolean;
};

export default function LineMap({ className = '', showLabels = true }: Props) {
  const meridians = [];
  for (let lon = -180; lon <= 180; lon += 20) {
    const { x } = project(0, lon);
    meridians.push(
      <line key={`m${lon}`} x1={x} y1={0} x2={x} y2={H} vectorEffect="non-scaling-stroke" />,
    );
  }

  const parallels = [];
  for (let lat = -80; lat <= 80; lat += 20) {
    const { y } = project(lat, 0);
    parallels.push(
      <line key={`p${lat}`} x1={0} y1={y} x2={W} y2={y} vectorEffect="non-scaling-stroke" />,
    );
  }

  const hub = project(HUB.lat, HUB.lon);

  return (
    <svg
      viewBox={`${VIEW.x} ${VIEW.y} ${VIEW.w} ${VIEW.h}`}
      className={className}
      role="img"
      aria-label="서울을 기점으로 북미, 유럽, 아시아, 중동, 오세아니아를 연결하는 글로벌 커버리지 도식"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* 그래티큘 */}
      <g stroke="currentColor" strokeWidth="0.6" opacity="0.22" fill="none">
        {meridians}
        {parallels}
      </g>

      {/* 적도 강조 */}
      <line
        x1={0}
        y1={project(0, 0).y}
        x2={W}
        y2={project(0, 0).y}
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.3"
      />

      {/* 연결 호 */}
      <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5">
        {NODES.map((n) => (
          <path key={n.label} d={arc(hub, project(n.lat, n.lon))} strokeDasharray="2 5" />
        ))}
      </g>

      {/* 권역 노드 */}
      <g>
        {NODES.map((n) => {
          const p = project(n.lat, n.lon);
          return (
            <g key={n.label}>
              <circle cx={p.x} cy={p.y} r="16" fill="currentColor" opacity="0.1" />
              <circle cx={p.x} cy={p.y} r="4" fill="currentColor" opacity="0.9" />
              {showLabels ? (
                <text
                  x={p.x}
                  y={p.y - 26}
                  textAnchor="middle"
                  fontSize="24"
                  letterSpacing="0.12em"
                  fill="currentColor"
                  opacity="0.75"
                >
                  {n.label.toUpperCase()}
                </text>
              ) : null}
            </g>
          );
        })}
      </g>

      {/* 허브 */}
      <g>
        <circle cx={hub.x} cy={hub.y} r="22" fill="none" stroke="currentColor" opacity="0.35" />
        <circle cx={hub.x} cy={hub.y} r="5" fill="currentColor" />
        {showLabels ? (
          <text
            x={hub.x}
            y={hub.y + 52}
            textAnchor="middle"
            fontSize="27"
            letterSpacing="0.14em"
            fill="currentColor"
          >
            SEOUL
          </text>
        ) : null}
      </g>
    </svg>
  );
}
