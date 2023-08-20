import {ButtonProps} from './ButtonProps';


export const exampleButtonProps: ButtonProps = {
    text: 'Click Me',
    className: 'custom-button',
    type: 'button',
    onClick: () => {
        console.log('Button clicked');
    },
    disabled: false,
    conditionalRender: true,
    styles: {
        display: 'inline-block',
        padding: '10px 20px',
        margin: '10px 20px',
        border: 'none',
        borderRadius: '10px',
        backgroundColor: '#4caf50',
        color: 'white',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.2s, transform 0.2s',
        userSelect: 'none',
    },
};

export const exampleButtonProps1: ButtonProps = {
    text: 'Click Me',
    className: 'custom-button',
    type: 'button',
    onClick: () => {
        console.log('Button clicked');
    },
    disabled: false,
    conditionalRender: true,
    styles: {
        display: 'inline-block',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '10px',
        backgroundColor: '#4caf50',
        color: 'white',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.2s, transform 0.2s',
        userSelect: 'none',
    },
};


export const exampleButtonProps2: ButtonProps = {
    text: 'Submit',
    className: 'submit-button',
    type: 'submit',
    onClick: () => {
        console.log('Submit button clicked');
    },
    disabled: false,
    conditionalRender: true,
    styles: {
        display: 'inline-block',
        padding: '12px 24px',
        border: '2px solid #3498db',
        borderRadius: '5px',
        backgroundColor: 'transparent',
        color: '#3498db',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'color 0.2s, transform 0.2s, background-color 0.2s',
        userSelect: 'none',
    },
};


export const exampleButtonProps3: ButtonProps = {
    text: 'Submit Form',
    className: 'custom-button',
    type: 'submit',
    onClick: () => {
        console.log('Form submitted');
    },
    disabled: false,
    styles: {
        display: 'inline-block',
        padding: '12px 24px',
        margin: '12px 24px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#f39c12',
        color: 'white',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.2s, transform 0.2s',
        userSelect: 'none',
    },
};


