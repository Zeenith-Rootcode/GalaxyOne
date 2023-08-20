import React from 'react';
import Image from './Image'; // Update the path as needed
import { ImageProps } from './ImageProps';

// Background image
const backgroundImageStyle: React.CSSProperties = {
  position: 'absolute',
  zIndex: -1,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)', // Center the image
  width: '100%',
  maxWidth: '15%',    // Set the maximum width
  height: 'auto',     // Let the height adjust proportionally
};

// HomePage related
export function imageProvider(address: string){
  const image: ImageProps = {
    src: process.env.PUBLIC_URL + address, //Home Page image  'https://picsum.photos/300/300?random=1' 
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