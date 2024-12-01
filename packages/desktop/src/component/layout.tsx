import { AppShell, Skeleton } from '@mantine/core';
import { Tab } from './tab.tsx';

const Layout = () => {
  return (
    <>
      <AppShell
        navbar={{ width: 300, breakpoint: 'xs', collapsed: { desktop: false } }}
        padding='xs'
      >
        <AppShell.Navbar p='md'>
          Navbar
          {Array(15)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} h={28} mt='sm' animate={false} />
            ))}
        </AppShell.Navbar>
        <AppShell.Main>
          <Tab />
        </AppShell.Main>
      </AppShell>
    </>
  );
};

export { Layout };
