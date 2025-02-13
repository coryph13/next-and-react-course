'use client';

import Image, { ImageProps } from 'next/image';

interface ResponsiveImageProps extends ImageProps {
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
}

export default function ResponsiveImage({
  containerClassName = '',
  containerStyle = {},
  ...props
}: ResponsiveImageProps) {
  const isFillMode = 'fill' in props;

  return (
    <div
      className={`image-container ${containerClassName}`}
      style={{
        position: 'relative',
        ...(isFillMode ? { width: '100%', height: '100%' } : {}),
        ...containerStyle,
      }}
    >
      <Image {...props} />
    </div>
  )
}