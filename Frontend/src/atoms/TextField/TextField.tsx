import React from 'react';
import { TextFieldProps } from './TextFieldProps';

const TextField: React.FC<TextFieldProps> = ({
  type,
  id,
  name,
  value,
  placeholder,
  maxlength,
  size,
  disabled,
  readonly,
  autocomplete,
  autofocus,
  required,
  pattern,
  min,
  max,
  step,
  class: className = '',
  style,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      maxLength={maxlength}
      size={size}
      disabled={disabled}
      readOnly={readonly}
      autoComplete={autocomplete}
      autoFocus={autofocus}
      required={required}
      pattern={pattern}
      min={min}
      max={max}
      step={step}
      className={`text-field ${className}`}
      style={style}
    />
  );
};

export default TextField;
