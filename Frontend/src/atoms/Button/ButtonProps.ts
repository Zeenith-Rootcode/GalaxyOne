import { ButtonType } from './Button';

// Define the props class for the Button component
export class ButtonProps {
  text: string = ''; // Text on the button
  className?: string = ''; // CSS class for styling
  type?: ButtonType = 'button'; // Type of the button ('button', 'submit', 'reset')
  onClick?: () => void = () => {}; // Click event handler
  disabled?: boolean = false; // Disable the button
  icon?: React.ReactNode = null; // Icon element
  conditionalRender?: boolean = true; // Conditionally render the button
  styles?: React.CSSProperties = {}; // Inline styles
}
