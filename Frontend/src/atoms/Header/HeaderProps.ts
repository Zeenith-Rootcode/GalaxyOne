type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeaderProps {
  className?: string;
  id?: string;
  level: HeadingLevel;
  title?: string;
  children: React.ReactNode;
  text: string;
}
