import React from 'react';
import Paragraph from './Paragraph'; // Update the path as needed
import { ParagraphProps } from './ParagraphProps';

// export const exampleParagraphProps1: ParagraphProps = {
//   id: 'intro-paragraph',
//   className: 'intro-paragraph',
//   style: { color: '#333' },
//   lang: 'en',
//   dir: 'ltr',
//   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada in lectus non consequat.',
// };

type fontSize = 10 |20| 25;

// HomePage related
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