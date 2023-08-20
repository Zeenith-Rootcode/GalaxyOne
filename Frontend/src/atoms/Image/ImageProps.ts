export class ImageProps {
    src: string = '';
    alt: string = '';
    width?: number | string = '';
    height?: number | string = '';
    title?: string = '';
    className?: string = '';
    style?: React.CSSProperties = {};
    decoding?: 'async' | 'sync' | 'auto' = 'auto';
  }
  