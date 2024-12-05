import { AppShell } from '@mantine/core';
import { Nav } from './nav.tsx';
import { Tab } from './tab.tsx';

const Layout = () => {
  return (
    <>
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
    </>
  );
};

export { Layout };
