import React from 'react';
import {SearchBoxProps} from './SearchBoxProps';

export const exampleSearchBoxProps: SearchBoxProps = {
    type: 'search',
    id: 'searchbox',
    name: 'searchbox',
    value: '',
    placeholder: 'Search...',
    maxlength: 100,
    size: 30,
    disabled: false,
    readonly: false,
    class: 'custom-search-box',
    style: {border: '1px solid #ccc'},
    hint: 'Enter search term...',
};