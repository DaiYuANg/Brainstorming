import { Container, Paper } from '@mantine/core';
import { useState } from 'react';

const VSCodeLayout = () => {
  const [sidebarWidth, setSidebarWidth] = useState(268);

  const handleResizing = (newWidth: number) => {
    setSidebarWidth(newWidth);
  };

  return (
    <Container style={{ display: 'flex', height: '100vh' }}>
      <Paper
        shadow="xs"
        style={{
          width: sidebarWidth,
          transition: 'width 0.1s ease',
        }}
      >
        {/* Sidebar Content */}
      </Paper>
      <div
        className="resizer"
        onMouseDown={(event) => {
          const initialX = event.clientX;
          const initialWidth = sidebarWidth;

          const onMouseMove = (e:MouseEvent) => {
            const delta = e.clientX - initialX;
            handleResizing(Math.max(initialWidth + delta, 0));
          };

          const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
          };

          document.addEventListener('mousemove', onMouseMove);
          document.addEventListener('mouseup', onMouseUp);
        }}
        style={{
          backgroundColor: '#ccc',
          width: '10px',
          height: '100%',
          cursor: 'col-resize',
        }}
      />
      <div>{/* Main Content */}</div>
    </Container>
  );
};

export default VSCodeLayout;
