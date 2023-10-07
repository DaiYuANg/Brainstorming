import { AppShell, Box } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import { router } from '../modules';
import { LayoutHeader } from './LayoutHeader.tsx';
import { LayoutNavbarContent } from './LayoutNavbarContent.tsx';

export const MainLayout = () => {
  return (
    <>
      <Box>
        <AppShell
          layout={'alt'}
          header={{ height: 30, offset: false }}
          navbar={{
            width: 300,
            breakpoint: 'md',
            collapsed: { mobile: false },
          }}
          padding="xs"
        >
          <LayoutHeader />
          <LayoutNavbarContent />
          <AppShell.Main pt={'xl'}>
            <RouterProvider router={router}></RouterProvider>
          </AppShell.Main>
        </AppShell>
      </Box>
    </>
  );
};
