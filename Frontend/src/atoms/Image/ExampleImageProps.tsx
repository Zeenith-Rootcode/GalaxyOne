import React from 'react';
import {ImageProps} from './ImageProps';

export const exampleImageProps1: ImageProps = {
    src: 'https://picsum.photos/300/300?random=1',
    alt: 'Example Image',
    width: 400,
    height: 300,
    title: 'Click to enlarge',
    className: 'image-thumbnail',
    style: {border: '1px solid gray'},
    decoding: 'async',
};

export const exampleImageProps2: ImageProps = {
    src: 'https://picsum.photos/300/300?random=2',
    alt: 'Large Image',
    width: '80%',
    title: 'Click to view in high resolution',
    className: 'large-image',
    style: {border: '2px solid red', borderRadius: '10px'},
    decoding: 'auto',
};

export const exampleImageProps3: ImageProps = {
    src: 'https://picsum.photos/300/300?random=3',
    alt: 'Small Image',
    width: 200,
    height: 150,
    title: 'A Tiny Thumbnail',
    className: 'small-image',
    style: {border: '1px solid blue', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'},
    decoding: 'sync',
};


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