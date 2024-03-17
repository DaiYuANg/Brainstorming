import { AppShell } from '@mantine/core';
import { useState } from 'react';
import { useLayoutStore } from '../../store/LayoutStore.ts';
import { LayoutHeader } from './LayoutHeader.tsx';
import { LayoutNavbar } from './LayoutNavbar.tsx';

export const MainLayout = () => {
  const store = useLayoutStore();
  const [open, setOpen] = useState<boolean>(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
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
            width: store.navbarWidth,
            breakpoint: 0,
            collapsed: { mobile: false, desktop: open },
          }}
        >
          <LayoutHeader />
          <LayoutNavbar toggleOpen={toggleOpen} />
          {/*<LayoutMain toggleSide={toggleOpen} open={open} />*/}
        </AppShell>
      </div>
    </>
  );
};
