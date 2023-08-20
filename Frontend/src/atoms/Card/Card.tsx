import React from 'react';
import { CardProps } from './CardProps';

const Card: React.FC<CardProps> = ({ className = '', style, children }) => {
  return (
    <div className={`card ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Card;
