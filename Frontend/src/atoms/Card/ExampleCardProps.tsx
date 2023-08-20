import React from 'react';
import Card from './Card'; // Update the path as needed
import { CardProps } from './CardProps';

export const exampleCardProps: CardProps = {
  className: 'custom-card',
  style: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '10px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  children: (
    <div>
      <img src="https://via.placeholder.com/150" alt="Card Image" />
      <p>This is a card with an image and text.</p>
    </div>
  ),
};
