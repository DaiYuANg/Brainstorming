import { AppShell } from '@mantine/core';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { useLayout } from './useLayout.ts';

type LayoutNavbarProps = {
  content?: ReactNode;
};

const LayoutNavbar = ({ content }: LayoutNavbarProps) => {
  const { navbarWidth, setNavbarWidth } = useLayout();
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [highlightBorder, setHighlightBorder] = useState(false);
  const dragStartX = useRef(0);
  const initialWidth = useRef(navbarWidth);

  const mouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - dragStartX.current;
        const newWidth = Math.max(200, initialWidth.current + deltaX);
        setNavbarWidth(newWidth);
        return;
      }
      if (navbarRef.current) {
        const navbarRect = navbarRef.current.getBoundingClientRect();
        const mouseX = e.clientX;
        const distanceToRight = navbarRect.right - mouseX;

        if (Math.abs(distanceToRight) <= 10) {
          document.body.style.cursor = 'col-resize';
          setHighlightBorder(true);
        } else {
          document.body.style.cursor = '';
          setHighlightBorder(false);
        }
      }
    },
    [isDragging],
  );

  const mouseDown = useCallback(
    (e: MouseEvent) => {
      if (highlightBorder) {
        document.addEventListener('selectstart', disableUserSelect);
        dragStartX.current = e.clientX;
        initialWidth.current = navbarWidth;
        setIsDragging(true);
        document.body.style.userSelect = 'none';
      }
    },
    [highlightBorder, navbarWidth],
  );

  const mouseUp = useCallback(() => {
    setIsDragging(false);
    document.removeEventListener('selectstart', disableUserSelect);
    document.body.style.userSelect = '';
  }, []);

  const disableUserSelect = (e: Event) => {
    e.preventDefault();
  };

  useEffect(() => {
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mousedown', mouseDown);
    document.addEventListener('mouseup', mouseUp);

    return () => {
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mousedown', mouseDown);
      document.removeEventListener('mouseup', mouseUp);
    };
  }, [mouseMove, mouseDown, mouseUp]);

  return (
    <AppShell.Navbar
      style={{
        transition: 'box-shadow 0.3s ease',
        boxShadow: highlightBorder ? 'inset -2px 0 0 0 gray' : 'none',
        width: navbarWidth,
      }}
      ref={navbarRef}
    >
      {content}
    </AppShell.Navbar>
  );
};

export { LayoutNavbar };
export type { LayoutNavbarProps };
