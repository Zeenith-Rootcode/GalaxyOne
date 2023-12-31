import React from 'react';
import {CardProps} from './CardProps';

export const exampleCardProps: CardProps = {
    className: 'custom-PlanetCard',
    style: {
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '10px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    },
    children: (
        <div>
            <img src="https://via.placeholder.com/150" alt="Card Image"/>
            <p>This is a card with an image and text.</p>
        </div>
    ),
};
