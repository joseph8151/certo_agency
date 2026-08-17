import Image from 'next/image';
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
      className={`relative isolate overflow-hidden bg-ivory ${toneClass} ${zoom ? 'zoom-slow' : ''} ${className}`}
      style={{ aspectRatio: ratio ?? image.ratio }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        className="object-cover"
      />
    </div>
  );
}
