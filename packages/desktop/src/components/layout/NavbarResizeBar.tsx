import { Divider } from '@mantine/core';
import React, { useCallback } from 'react';
import { useLayoutStore } from '../../store/LayoutStore.ts';
import classes from './NavbarResizeBar.module.css';
const NavbarResizeBar = () => {
  const minNavbarWidth = 200;
  const store = useLayoutStore();

  const handleMouseDown = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const startX = event.clientX;
      if (store.navbarWidth < minNavbarWidth) return;
      const handleMouseMove = (event: MouseEvent) => {
        const offsetX = event.clientX - startX;
        const newWidth = store.navbarWidth + offsetX;
        if (newWidth < minNavbarWidth) {
          return;
        }
        store.increase(newWidth);
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      event.preventDefault();
    },
    [store],
  );

  return (
    <>
      <Divider
        orientation='vertical'
        className={classes.resize}
        onMouseDown={handleMouseDown}
      />
    </>
  );
};

export { NavbarResizeBar };
