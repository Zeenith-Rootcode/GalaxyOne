import React from 'react';

import { TextFieldProps } from './TextFieldProps';

export const exampleTextFieldProps2: TextFieldProps = {
  type: 'text',
  id: 'phone',
  name: 'phone',
  value: '',
  placeholder: 'Enter your phone number',
  maxlength: 12,
  size: 15,
  disabled: true,
  readonly: false,
  autocomplete: 'off',
  autofocus: false,
  required: true,
  pattern: '[0-9]{3}-[0-9]{2}-[0-9]{4}',
  min: '',
  max: '',
  step: '',
  class: 'phone-input',
  style: { border: '1px dashed red', padding: '10px', backgroundColor: '#f0f0f0' },
};

export const exampleTextFieldProps3: TextFieldProps = {
  type: 'text',
  id: 'zipcode',
  name: 'zipcode',
  value: '',
  placeholder: 'Enter your zip code',
  maxlength: 10,
  size: 12,
  disabled: false,
  readonly: false,
  autocomplete: 'on',
  autofocus: false,
  required: false,
  pattern: '[0-9]{5}(-[0-9]{4})?',
  min: '',
  max: '',
  step: '',
  class: 'zipcode-input',
  style: { border: '2px dotted green', padding: '8px', color: 'green' },
};
