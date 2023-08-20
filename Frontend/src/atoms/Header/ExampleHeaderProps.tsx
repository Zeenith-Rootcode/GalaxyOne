import React from 'react';
import {HeaderProps} from './HeaderProps';

export const exampleHeaderProps1: HeaderProps = {
    level: 5,
    id: 'small-rounded-heading',
    className: 'small-rounded-heading',
    style: {
        color: 'navy',
        fontSize: '0.4rem',
        fontFamily: 'Arial, sans-serif',
        borderRadius: '10px',
        padding: '0.5rem',
        // backgroundColor: 'lightblue',
    },
    title: 'Small Rounded Heading Example',
    children: 'Welcome to Our Blog!',
};

export const exampleHeaderProps2: HeaderProps = {
    level: 3,
    id: 'custom-heading',
    className: 'custom-heading',
    style: {
        color: 'purple',
        fontStyle: 'italic'
    },
    title: 'Custom Heading Example',
    children: 'This is a custom heading',
};


export const exampleHeaderProps3: HeaderProps = {
    level: 4,
    id: 'large-rounded-heading',
    className: 'large-rounded-heading',
    style: {
        color: 'darkgreen',
        fontSize: '0.8rem',
        fontFamily: 'Arial, sans-serif',
        borderRadius: '10px',
        padding: '1rem',
        backgroundColor: 'lightgreen',
    },
    title: 'Large Rounded Heading Example',
    children: 'Explore Our Services',
};