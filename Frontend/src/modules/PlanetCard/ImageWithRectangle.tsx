import React from 'react';

interface ImageWithRectangleProps {
  imageSrc: string;
  title: string;
  text: string;
}

const ImageWithRectangle: React.FC<ImageWithRectangleProps> = ({ imageSrc, title, text }) => {
  return (
    <div className="relative h-[33.333%] w-[33.333%]">
      <div className="absolute inset-0 flex flex-col justify-end bg-blue-500 p-4">
        <h2 className="text-white text-lg font-bold">{title}</h2>
        <p className="text-white">{text}</p>
      </div>
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 h-[50%] w-[50%] object-cover"
      />
    </div>
  );
};

export default ImageWithRectangle;
