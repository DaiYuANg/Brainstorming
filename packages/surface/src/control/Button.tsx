import { PolymorphicComponent } from '../base';
import { ButtonProps } from './ButtonProp.ts';

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
  console.log(primary);
  // const element = props.as ? 'button' : props;
  // const mode = primary
  //   ? 'storybook-button--primary'
  //   : 'storybook-button--secondary';
  return (
    <PolymorphicComponent
      as={'button'}
      className={[
        'bg-amber-50',
        'border-0',
        'hover:bg-sky-700',
        'cursor-pointer',
        'rounded-md',
        'text-sm',
        'p-3',
        'bg-blue-400',
        'font-thin',
        // `storybook-button--${size}`,
        // mode,
      ].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </PolymorphicComponent>
  );
};
