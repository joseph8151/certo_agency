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
};

export default function Figure({
  image,
  tone = 'blue',
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
  className = '',
  zoom = true,
}: Props) {
  const toneClass = tone === 'blue' ? 'tone-blue' : tone === 'ivory' ? 'tone-ivory' : '';

  return (
    <div
      className={`relative isolate overflow-hidden bg-ivory ${toneClass} ${zoom ? 'zoom-slow' : ''} ${className}`}
      style={{ aspectRatio: image.ratio }}
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
