import React, { ReactNode } from 'react';

interface MyComponentProps {
  children: ReactNode; // Allow any type of children
  pt?: number;
  pb?: number;
}

const ButtonHolder: React.FC<MyComponentProps> = ({ children, pt, pb }) => {
  console.log('ButtonHolder');
  console.log(pb);
  console.log(pt);
  return (
    <div
      className={`${pt ? `pt-${pt}` : ''} ${
        pb ? `pb-${pb}` : ''
      } w-full justify-center px-8`}
    >
      <div className="flex space-x-4">{children}</div>
    </div>
  );
};

export default ButtonHolder;
