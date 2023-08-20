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

  const WelcomePage: React.FC = () => {
    return (
      <div style={centerStyle}>
        <Image {...imageProvider('https://picsum.photos/2000/2000?random=1')} />
        <Paragraph {...textSize(20, "Your Gateway to Cosmos")}/>
        <Paragraph {...textSize(10, "The Intergalactic organization Welcomes You to The GalaxyOne")}/>
        <Button {...exampleButtonProps} text="Let's Go-oo.." />
        
      </div>
    );
  };
  
  export default WelcomePage;