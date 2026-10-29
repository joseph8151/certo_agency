import Image from 'next/image';
import LineMap from './LineMap';
import type { ImageSlot } from '@/data/images';

type Props = {
  image: ImageSlot;
  /** 사진 위 톤 오버레이 — 사이트 전체 톤을 통일합니다. */
  tone?: 'blue' | 'ivory' | 'none';
  /** 첫 화면 이미지에만 true. 나머지는 lazy loading 됩니다. */
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** 아주 약한 hover zoom */
  zoom?: boolean;
  /**
   * 프레임 비율 강제 지정 (예: '4 / 5').
   * 생략하면 이미지 매니페스트의 ratio 를 사용합니다.
   * 소스 비율이 달라도 object-cover 로 채워지므로, 여러 페이지의
   * 이미지 무게를 동일하게 맞출 때 사용합니다.
   */
  ratio?: string;
};

export default function Figure({
  image,
  tone = 'blue',
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
  className = '',
  zoom = true,
  ratio,
}: Props) {
  const toneClass = tone === 'blue' ? 'tone-blue' : tone === 'ivory' ? 'tone-ivory' : '';

  return (
    <div
      className={`relative isolate overflow-hidden bg-ivory-light ${toneClass} ${zoom ? 'zoom-slow' : ''} ${className}`}
      style={{ aspectRatio: ratio ?? image.ratio }}
    >
      {image.graphic === 'line-map' ? (
        /*
          해외 지원처럼 사진을 구하기 어려운 슬롯은 어두운 도형 대신
          서비스 내용을 그대로 보여주는 연결 도식을 씁니다. 홈의 해외 섹션과 같은 언어입니다.
        */
        <div className="absolute inset-0 flex flex-col justify-between bg-brand-deep p-6 text-white sm:p-8">
          <p className="text-[0.75rem] font-medium tracking-[0.04em] text-white/60">
            서울을 기점으로
          </p>
          <LineMap className="h-auto w-full text-white/85" />
          <p className="text-[0.75rem] text-white/60">북미 · 유럽 · 아시아 · 중동 · 오세아니아</p>
        </div>
      ) : (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          className="object-cover saturate-[0.9]"
          style={image.position ? { objectPosition: image.position } : undefined}
        />
      )}
    </div>
  );
}
