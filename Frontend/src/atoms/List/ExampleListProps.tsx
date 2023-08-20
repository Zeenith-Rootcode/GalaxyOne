import React from 'react';
import {ListProps} from './ListProps';

export const exampleListProps: ListProps = {
    ordered: false,
    items: [
        {text: 'Apple', class: 'fruit', style: {color: 'green'}},
        {text: 'Banana', class: 'fruit', style: {color: 'yellow'}},
        {text: 'Orange', class: 'fruit', style: {color: 'orange'}},
    ],
};
