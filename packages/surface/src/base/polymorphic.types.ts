import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  PropsWithChildren,
} from 'react';

type AsProp<E extends ElementType> = {
  as?: E;
};

type PropsToOmit<E extends ElementType, P> = keyof (AsProp<E> & P);

type PolymorphicComponentProp<
  C extends ElementType,
  Props = NonNullable<unknown>,
> = PropsWithChildren<Props & AsProp<C>> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type PolymorphicComponentPropWithRef<
  C extends ElementType,
  Props = NonNullable<unknown>,
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>['ref'];

export type {
  AsProp,
  PolymorphicComponentProp,
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
  PropsToOmit,
};
