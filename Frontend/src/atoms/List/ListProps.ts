export class ListProps {
    ordered?: boolean = false;
    items: ListItemProps[] = [];
  }
  
  export class ListItemProps {
    text: string = '';
    value?: string | number = '';
    class?: string = '';
    style?: React.CSSProperties = {};
  }
  