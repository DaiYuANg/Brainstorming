import { FC, forwardRef } from 'react';
import { LayoutComponent } from './LayoutComponent.tsx';
import { LayoutProvider } from './LayoutContextProvider.tsx';
import { LayoutProps } from './LayoutProps';

const Layout: FC<LayoutProps> = forwardRef(
  (
    {
      navbar,
      content,
      header,
      defaultNavbarWidth,
      defaultHeaderHeight,
    }: LayoutProps,
    _ref,
  ) => {
    return (
      <LayoutProvider
        defaultNavbarWidth={defaultNavbarWidth}
        defaultHeaderHeight={defaultHeaderHeight}
      >
        <LayoutComponent header={header} navbar={navbar} content={content} />
      </LayoutProvider>
    );
  },
);

export { Layout };
