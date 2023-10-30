import './button.css';
import {ButtonProps} from "./ButtonProp.ts";
import {Polymorphic} from "../base";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: Partial<ButtonProps>) => {
  const element = props.rootElement ? 'button':props.rootElement ;
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <Polymorphic
        as={element}
      className={['border-0','hover:bg-sky-700','cursor-pointer','rounded-md','text-sm','p-3','bg-blue-400','font-thin', `storybook-button--${size}`, mode].join(
        ' ',
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </Polymorphic>
  );
};
