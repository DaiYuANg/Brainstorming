import { AppShell, Box } from '@mantine/core';
import { isEmpty } from 'lodash';
import { useState } from 'react';
import { LayoutHeader } from './LayoutHeader.tsx';
import { LayoutMain } from './LayoutMain.tsx';
import { LayoutNavbar } from './LayoutNavbar.tsx';

export const MainLayout = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [navbarWidth, setNavbarWidth] = useState<number>(300);
  const toggleOpen = () => {
    setOpen(!open);
  };

  console.log(isEmpty(window.electronAPI.listWorkspace()));
  return (
    <>
      <Box>
        <AppShell
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
          }}
          layout={'alt'}
          header={{ height: 30, offset: false }}
          navbar={{
            width: navbarWidth,
            breakpoint: 'md',
            collapsed: { mobile: false, desktop: open },
          }}
        >
          <LayoutHeader />
          <LayoutNavbar toggleOpen={toggleOpen} navbarResize={setNavbarWidth} />
          <LayoutMain toggleSide={toggleOpen} open={open} />
        </AppShell>
      </Box>
    </>
  );
};
