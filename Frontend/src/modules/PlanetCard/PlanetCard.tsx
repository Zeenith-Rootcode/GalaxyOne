import React from 'react';
import ImageWithRectangle from './ImageWithRectangle'; // Replace with the correct path
import planet from "../../assets/welcome_page/Planet 08 R.svg"

const ParentComponent: React.FC = () => {
  return (
    <div className="flex">
      <ImageWithRectangle
        imageSrc={planet}
        title="Sample Title"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      {/* Add more ImageWithRectangle components here if needed */}
    </div>
  );
};

export default ParentComponent;
