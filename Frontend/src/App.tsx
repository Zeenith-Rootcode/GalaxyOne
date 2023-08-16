import React from 'react';
import Button from './atoms/Button/Button'; // Update the path as needed
import { exampleButtonProps1, exampleButtonProps2, exampleButtonProps3 } from './atoms/Button/ExampleButtonProps'; // Update the path as needed

import Header from './atoms/Header/Header'; // Update the path as needed
import {exampleHeaderProps1, exampleHeaderProps2, exampleHeaderProps3} from './atoms/Header/ExampleHeaderProps'; // Update the path as needed

import Paragraph from './atoms/Paragraph/Paragraph'; // Update the path as needed
import {exampleParagraphProps1, exampleParagraphProps2, exampleParagraphProps3, exampleParagraphProps4 } from './atoms/Paragraph/ExampleParagraphProps'; // Update the path as needed

import Image from './atoms/Image/Image'; // Update the path as needed
import {exampleImageProps1, exampleImageProps2, exampleImageProps3 } from './atoms/Image/ExampleImageProps'; // Update the path as needed

import TextField from './atoms/TextField/TextField'; // Update the path as needed
import {exampleTextFieldProps1, exampleTextFieldProps2, exampleTextFieldProps3} from './atoms/TextField/ExampleTextFieldProps'; // Update the path as needed

import SearchBox from './atoms/SearchBox/SearchBox'; // Update the path as needed
import {exampleSearchBoxProps} from './atoms/SearchBox/ExampleSearchBoxProps'; // Update the path as needed

import List from './atoms/List/List'; // Update the path as needed
import {exampleListProps} from './atoms/List/ExampleListProps'; // Update the path as needed

import Card from './atoms/Card/Card'; // Update the path as needed
import {exampleCardProps} from './atoms/Card/ExampleCardProps'; // Update the path as needed


function App() {
  return (
    <div className="App">
      <Button {...exampleButtonProps1} />
      {/* <Button {...exampleButtonProps2} /> */}
      {/* <Button {...exampleButtonProps3} /> */}
      <Header {...exampleHeaderProps1} />
      {/* <Header {...exampleHeaderProps2} /> */}
      <Header {...exampleHeaderProps3} />
      <Paragraph {...exampleParagraphProps1} />
      {/* <Paragraph {...exampleParagraphProps2} /> */}
      {/* <Paragraph {...exampleParagraphProps3} /> */}
      {/* <Paragraph {...exampleParagraphProps4} /> */}
      <Image {...exampleImageProps1} />
      {/* <Image {...exampleImageProps2} /> */}
      {/* <Image {...exampleImageProps3} /> */}
      <TextField {...exampleTextFieldProps1} />
      {/* <TextField {...exampleTextFieldProps2} /> */}
      {/* <TextField {...exampleTextFieldProps3} /> */}
      <SearchBox {...exampleSearchBoxProps} />
      <List {...exampleListProps} />
      <Card {...exampleCardProps} />
    </div>
  );
}



export default App;