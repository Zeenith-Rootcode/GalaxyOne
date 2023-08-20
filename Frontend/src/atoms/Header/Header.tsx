import React from 'react';

type HeadingLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6;
type Color = 'black' | 'white';

interface HeaderProps {
  level: HeadingLevel;
  id?: string;
  className?: string;
  title?: string;
  children?: React.ReactNode;
  text?: string;
  wide?: boolean;
  color?: Color;
}

const Header: React.FC<HeaderProps> = ({
  level = 6,
  id,
  className = '',
  title,
  wide = false,
  text = '',
  color = 'black',
}) => {
  return (
    <div
      id={id}
      className={
        `text-shadow text-center font-bold text-${color} text-${level}xl` +
        (wide ? ' tracking-wider' : '')
      }
      title={title}
    >
      {text}
    </div>
  );
};

export default Header;
