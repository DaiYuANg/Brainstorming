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

  const mouseMove = useCallback(
    (e: MouseEvent) => {
      if (navbarRef.current && isDragging) {
        const navbarRect = navbarRef.current.getBoundingClientRect();
        const mouseX = e.clientX;
        const newWidth = Math.max(
          200,
          navbarWidth + (mouseX - navbarRect.right),
        ); // 限制最小宽度为200px
        setNavbarWidth(newWidth); // 更新宽度
      } else if (navbarRef.current) {
        const navbarRect = navbarRef.current.getBoundingClientRect();
        const mouseX = e.clientX;
        const distanceToRight = navbarRect.right - mouseX;

        if (Math.abs(distanceToRight) <= 10) {
          document.body.style.cursor = 'col-resize';
          setHighlightBorder(true);
        } else {
          document.body.style.cursor = 'default';
          setHighlightBorder(false);
        }
      }
    },
    [navbarRef, isDragging],
  );

  const mouseDown = useCallback(() => {
    if (highlightBorder) {
      setIsDragging(true);
    }
  }, [highlightBorder]);
  const mouseUp = useCallback(() => {
    setIsDragging(false); // 鼠标释放时停止拖动
  }, []);
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
        transition: 'box-shadow 0.3s ease', // 添加过渡动画
        boxShadow: highlightBorder ? 'inset -2px 0 0 0 red' : 'none',
      }}
      ref={navbarRef}
    >
      {content}
    </AppShell.Navbar>
  );
};

export { LayoutNavbar };
export type { LayoutNavbarProps };
