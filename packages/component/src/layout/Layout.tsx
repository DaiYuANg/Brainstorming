import { AppShell } from '@mantine/core';
import { FC, forwardRef, ReactNode } from 'react';
import './Layout.css';

type LayoutProps = {
  navbar?: ReactNode;
  content?: ReactNode;
};

const Layout: FC<LayoutProps> = forwardRef(
  ({ navbar, content }: LayoutProps) => {
    return (
      <AppShell
        header={{ height: 0 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: false } }}
        padding='md'
        withBorder={true}
      >
        <AppShell.Navbar p='md'>{navbar}</AppShell.Navbar>
        <AppShell.Main>{content}</AppShell.Main>
      </AppShell>
    );
  },
);

export { Layout };
export type { LayoutProps };
