type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export class HeaderProps {
  level: HeadingLevel = 1;
  id?: string = '';
  className?: string = '';
  style?: React.CSSProperties = {};
  title?: string = '';
  children: React.ReactNode = '';
}
