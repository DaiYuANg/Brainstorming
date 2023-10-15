import { ComponentType, lazy } from 'react';

type LazyComponentProps = {
  componentPath: string;
};

export const createLazyComponent = (
  { componentPath }: LazyComponentProps,
): ComponentType => {
  return lazy(() =>
    import(`./${componentPath}`).then((module) => ({
      default: module[componentPath],
    })),
  );
};
