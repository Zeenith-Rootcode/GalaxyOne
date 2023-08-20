import React from 'react';

export type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  text: string;
  className?: string;
  type?: ButtonType;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  conditionalRender?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text = '',
  className = '',
  type = 'button',
  onClick,
  disabled = false, // Default to false
  icon,
  conditionalRender = true, // Default to true
}) => {
  return conditionalRender ? (
    <button
      // width to parent width
      className="${className} flex h-16 w-full items-center justify-center gap-2.5 rounded-[14px] bg-green-500 px-5 py-3.5 text-center text-2xl font-extrabold leading-[13px] tracking-tight text-white shadow"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span>{icon}</span>}
      {text && <span>{text}</span>}
    </button>
  ) : null;
};

export default Button;
