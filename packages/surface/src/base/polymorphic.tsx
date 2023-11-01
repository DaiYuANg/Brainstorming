import { ElementType, forwardRef, HTMLAttributes } from 'react';
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from './polymorphic.types.ts';

type PolymorphicProps<E extends ElementType = 'div'> =
  PolymorphicComponentPropWithRef<E> & HTMLAttributes<HTMLDivElement>;

const PolymorphicComponent = forwardRef(
  <E extends ElementType = 'div'>(
    pp?: PolymorphicProps<E>,
    ref?: PolymorphicRef<E>,
  ) => {
    const Root = pp?.as || 'div';
    return (
      <>
        <Root className={pp?.className} ref={ref}>
          {pp?.children}
        </Root>
      </>
    );
  },
);

export { PolymorphicComponent };
