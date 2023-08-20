export class SearchBoxProps {
    type: 'search' = 'search';
    id?: string = '';
    name?: string = '';
    value?: string = '';
    placeholder?: string = '';
    maxlength?: number = 50;
    size?: number = 20;
    disabled?: boolean = false;
    readonly?: boolean = false;
    class?: string = '';
    style?: React.CSSProperties = {};
    hint?: string = '';
}