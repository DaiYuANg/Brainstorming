import { AppShell, Box } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import { router } from '../../modules';
import { LayoutHeader } from './LayoutHeader.tsx';
import { LayoutNavbar } from './LayoutNavbar.tsx';

export const MainLayout = () => {
  return (
    <>
      <Box>
        <AppShell
          layout={'alt'}
          header={{ height: 30, offset: false }}
          navbar={{
            width: 250,
            breakpoint: 'md',
            collapsed: { mobile: false },
          }}
          withBorder
        >
          <LayoutHeader />
          <LayoutNavbar />
          <AppShell.Main pt={0}>
            <RouterProvider router={router}></RouterProvider>
          </AppShell.Main>
        </AppShell>
      </Box>
    </>
  );
};
