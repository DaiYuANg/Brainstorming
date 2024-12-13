import { AppShell } from '@mantine/core';
import { ReactElement } from 'react';
import classes from './layout.module.css';
import { Nav } from './nav.tsx';
import { Tab } from './tab.tsx';

const Layout = (): ReactElement => {
  return (
    <AppShell
      header={{
        height: 30,
      }}
      navbar={{ width: 300, breakpoint: 'xs', collapsed: { desktop: false } }}
      padding='xs'
    >
      <AppShell.Header className={classes.header}></AppShell.Header>
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
