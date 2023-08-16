import React from 'react';

// Define the type for the 'type' prop of the Button component
export type ButtonType = 'button' | 'submit' | 'reset';

// Define the props interface for the Button component
interface ButtonProps {
  text: string;
  className?: string;
  type?: ButtonType; // Type of the button ('button', 'submit', 'reset')
  onClick?: () => void; // Click event handler
  disabled?: boolean; // Disable the button
  icon?: React.ReactNode; // Icon element
  conditionalRender?: boolean; // Conditionally render the button
  styles?: React.CSSProperties; // Inline styles
}

const Button: React.FC<ButtonProps> = ({
  text,
  className = '',
  type = 'button',
  onClick,
  disabled = false,
  icon,
  conditionalRender = true,
  styles,
}) => {
  return conditionalRender ? (
    <button
      className={`button ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={styles}
    >
      {icon && <span className="icon">{icon}</span>}
      {text}
    </button>
  ) : null;
};

export default Button;
