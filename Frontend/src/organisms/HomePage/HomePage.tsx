import React from 'react';
import Image from '../../atoms/Image/Image';
import {imageProvider} from '../../atoms/Image/ExampleImageProps'; // Update the path as needed
import Paragraph from '../../atoms/Paragraph/Paragraph';
import {textSize} from '../../atoms/Paragraph/ExampleParagraphProps';
import Button from '../../atoms/Button/Button';
import { exampleButtonProps } from '../../atoms/Button/ExampleButtonProps';

const centerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: '0px',
    backgroundColor:  'rgba(0, 0, 0, 0.0)', // Transparent black background
  };

  const HomePage: React.FC = () => {
    return (
      <div style={centerStyle}>
        <Image {...imageProvider(process.env.PUBLIC_URL + '/images/Home_Page.png')} />
        <Paragraph {...textSize(20, "GalaxyOne")}/>
        <Paragraph {...textSize(10, "Your Portal to the Cosmos")}/>
        <Button {...exampleButtonProps} text="Go Now" />
        <Button {...exampleButtonProps} text="Explore"  />
        <Button {...exampleButtonProps} text="History" />
        <Button {...exampleButtonProps} text="About Us" />
        
      </div>
    );
  };
  
  export default HomePage;


