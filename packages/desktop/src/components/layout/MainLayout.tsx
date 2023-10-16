import { AppShell } from '@mantine/core';
import { useState } from 'react';
import { LayoutHeader } from './LayoutHeader.tsx';
import { LayoutMain } from './LayoutMain.tsx';
import { LayoutNavbar } from './LayoutNavbar.tsx';

export const MainLayout = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [navbarWidth, setNavbarWidth] = useState<number>(250);
  const toggleOpen = () => {
    setOpen(!open);
  };

  // console.log(isEmpty(window.electronAPI.listWorkspace()));
  return (
    <>
      <div data-tauri-drag-region={true}>
        <AppShell
          style={{
            background: 'transparent',
            borderRadius: '15px',
          }}
          layout={'alt'}
          header={{ height: 30, offset: false }}
          navbar={{
            width: navbarWidth,
            breakpoint: 0,
            collapsed: { mobile: false, desktop: open },
          }}
        >
          <LayoutHeader />
          <LayoutNavbar toggleOpen={toggleOpen} navbarResize={setNavbarWidth} />
          <LayoutMain toggleSide={toggleOpen} open={open} />
        </AppShell>
      </div>
    </>
  );
};
