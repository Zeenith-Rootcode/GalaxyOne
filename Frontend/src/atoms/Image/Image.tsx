import React from 'react';
import { ImageProps } from './ImageProps';

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  title,
  className = '',
  style,
  decoding = 'auto',
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      title={title}
      className={`image ${className}`}
      style={style}
      decoding={decoding}
    />
  );
};

export default Image;
