import React from 'react';
import {ParagraphProps} from './ParagraphProps';

export const exampleParagraphProps1: ParagraphProps = {
    id: 'intro-paragraph',
    className: 'intro-paragraph',
    style: {color: '#333'},
    lang: 'en',
    dir: 'ltr',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada in lectus non consequat.',
};

export const exampleParagraphProps2: ParagraphProps = {
    id: 'highlighted-paragraph',
    className: 'highlighted-paragraph',
    style: {backgroundColor: 'yellow', padding: '10px'},
    lang: 'en',
    dir: 'ltr',
    text: 'This paragraph is highlighted with a yellow background.',
};

export const exampleParagraphProps3: ParagraphProps = {
    id: 'rtl-paragraph',
    className: 'rtl-paragraph',
    style: {border: '1px solid red', padding: '5px'},
    lang: 'en',
    dir: 'rtl',
    text: 'Suspendisse malesuada in lectus non consequat.',
};

export const exampleParagraphProps4: ParagraphProps = {
    id: 'large-font-paragraph',
    className: 'large-font-paragraph',
    style: {fontSize: '24px', lineHeight: '1.5', fontFamily: 'Arial, sans-serif'},
    lang: 'en',
    dir: 'ltr',
    text: 'This paragraph has a larger font size and increased line height.',
};

type fontSize = 10 |20| 25;

export function textSize(fontSize: fontSize, text: string){
    const Your_Portal_to_the_Cosmos: ParagraphProps = {
        id: 'intro-paragraph',
        className: 'intro-paragraph',
        style: { color: 'white', fontSize: fontSize, fontWeight:'bold'},
        lang: 'en',
        dir: 'ltr',
        text: text,
    };
    return Your_Portal_to_the_Cosmos;
}