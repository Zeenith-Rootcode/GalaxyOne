import React from 'react';
import { HeaderProps } from './HeaderProps';

const Header: React.FC<HeaderProps> = ({
  level,
  id,
  className = '',
  style,
  title,
  children,
}) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag
      id={id}
      className={`header ${className}`}
      style={style}
      title={title}
    >
      {children}
    </HeadingTag>
  );
};

export default Header;
