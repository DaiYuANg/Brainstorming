import { Button } from '@mantine/core';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const BButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <Button
      type='button'
      className={[
        'storybook-button',
        'bg-sky-500 hover:bg-sky-700',
        `
      transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300
      `,
        `storybook-button--${size}`,
        mode,
      ].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </Button>
  );
};

export type { ButtonProps };
