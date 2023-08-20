import React from 'react';

const TextField: React.FC<TextFieldProps> = ({
  type = 'text',
  id,
  name,
  value,
  placeholder,
  maxLength,
  size,
  disabled = false,
  readOnly = false,
  autoComplete = 'on',
  required,
  pattern,
  min,
  max,
  step,
  className = '',
}) => {
  return (
    <input
      className={`text-field text-zinc-700 text-opacity-60 text-xl w-full h-12 rounded-2xl justify-center px-4 ${className}`}
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      maxLength={maxLength}
      size={size}
      disabled={disabled}
      readOnly={readOnly}
      autoComplete={autoComplete}
      required={required}
      pattern={pattern}
      min={min}
      max={max}
      step={step}
    />
  );
};

export default TextField;
