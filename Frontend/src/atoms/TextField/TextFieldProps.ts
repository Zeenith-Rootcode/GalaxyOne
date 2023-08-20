
export class TextFieldProps {
    type: 'text' = 'text';
    id?: string = '';
    name?: string = '';
    value?: string = '';
    placeholder?: string = '';
    maxlength?: number = 50;
    size?: number = 20;
    disabled?: boolean = false;
    readonly?: boolean = false;
    autocomplete?: 'on' | 'off' = 'on';
    autofocus?: boolean = false;
    required?: boolean = false;
    pattern?: string = '';
    min?: number | string = '';
    max?: number | string = '';
    step?: string = '';
    class?: string = '';
    style?: React.CSSProperties = {};
  }
    