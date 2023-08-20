interface TextFieldProps {
  type?: 'text' | 'password' | 'number';
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  maxLength?: number;
  size?: number;
  disabled?: boolean;
  readOnly?: boolean;
  autoComplete?: 'on' | 'off';
  required?: boolean;
  pattern?: string;
  min?: number | string;
  max?: number | string;
  step?: string;
  className?: string;
}
