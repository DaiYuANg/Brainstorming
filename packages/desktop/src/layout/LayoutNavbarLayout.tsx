import { Divider, Navbar } from '@mantine/core';
import { useCallback, useEffect, useRef, useState } from 'react';
import { LayoutNavbarContent } from './LayoutNavbarContent.tsx';

export const LayoutNavbarLayout = () => {
  const sidebarRef = useRef<HTMLElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState<number>(268);
  const resize = useCallback(
    async (event: MouseEvent) => {
      if (isResizing) {
        const width =
          event.clientX - sidebarRef.current!.getBoundingClientRect().left;
        if (width < 150) return;
        setSidebarWidth(width);
      }
    },
    [isResizing, sidebarWidth],
  );
  const startResizing = useCallback((mouseDownEvent: MouseEvent) => {
    setIsResizing(true);
    mouseDownEvent.preventDefault();
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);
  useEffect(() => {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <>
      <Navbar width={{ base: sidebarWidth }} ref={sidebarRef}>
        <LayoutNavbarContent />
        <Divider
          size="sm"
          orientation="vertical"
          onMouseDown={startResizing}
          sx={{
            position: 'absolute',
            right: 0,
            height: '100vh',
            cursor: 'col-resize',
          }}
        />
      </Navbar>
    </>
  );
};
