import { AppShell } from '@mantine/core';
import { Nav } from '@renderer/component/nav.tsx';
import { Tab } from '@renderer/component/tab.tsx';
import { ReactElement } from 'react';

const Layout = (): ReactElement => {
  return (
    <AppShell
      navbar={{ width: 300, breakpoint: 'xs', collapsed: { desktop: false } }}
      padding='xs'
    >
      <AppShell.Navbar p='md'>
        <Nav />
      </AppShell.Navbar>
      <AppShell.Main>
        <Tab />
      </AppShell.Main>
    </AppShell>
  );
};

export { Layout };
