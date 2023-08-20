import React from 'react';

import QRCode from './assets/QR Code.svg';
import Socket from './assets/Socket.svg';
import StarRating from './assets/Star Rings.svg';
import Button from './atoms/Button/Button';
import Header from './atoms/Header/Header';
import TextField from './atoms/TextField/TextField';
import ButtonHolder from './modules/Layouts/ButtonLayout';
import TextHolder from './modules/Layouts/TextLayout';

export default function App() {
  // const text = 'Click Me';
  // const className = 'custom-button';
  return (
    <div>
      <ButtonHolder>
        <Button className={'custom-button'} icon={<img src={Socket} alt={''} />} />
        <Button className={'custom-button'} icon={<img src={QRCode} alt={''} />} />
        <Button className={'custom-button'} icon={<img src={StarRating} alt={''} />} />
      </ButtonHolder>
      <ButtonHolder>
        <Button text={'Sign In'} className={'custom-button'} />
      </ButtonHolder>

      <TextHolder>
        <TextField type={'text'} placeholder={'Enter your email'} />
        <TextField type={'text'} placeholder={'Enter your email'} />
      </TextHolder>

      <Header text={'Sign In'} level={5} />
    </div>
  );
}
