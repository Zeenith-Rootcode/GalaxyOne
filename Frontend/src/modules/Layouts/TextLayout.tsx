import React, { ReactNode } from 'react';

interface MyComponentProps {
  children: ReactNode; // Allow any type of children
  space?: number;
}

const TextHolder: React.FC<MyComponentProps> = ({ children, space = 4 }) => {
  console.log('ButtonHolder');
  return (
    <div className="w-full justify-center px-8 py-7">
      <div className={`flex-col space-y-${space}`}>{children}</div>
    </div>
  );
};

export default TextHolder;
