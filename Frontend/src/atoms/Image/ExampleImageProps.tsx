import React from 'react';
import Image from './Image'; // Update the path as needed
import { ImageProps } from './ImageProps';

// Background image
const backgroundImageStyle: React.CSSProperties = {
  position: 'absolute',
  zIndex: -1,
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

// HomePage related
export function imageProvider(address: string){
  const image: ImageProps = {
    src: address, //Home Page image  'https://picsum.photos/300/300?random=1'
    alt: 'Example Image',
    // width: 400,
    // height: 300,
    title: 'Click to enlarge',
    className: 'image-thumbnail',
    style: backgroundImageStyle,
    decoding: 'async'
  };
  return image;
}