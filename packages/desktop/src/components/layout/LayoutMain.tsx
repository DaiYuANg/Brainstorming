import { AppShell, Divider } from '@mantine/core';
import { isEmpty } from 'lodash';
import { RouterProvider } from 'react-router-dom';
import { router } from '../../modules';
import { EmptyWorkspace } from '../EmptyWorkspace.tsx';

const MainContent = () => {
  if (isEmpty(window.electronAPI.listWorkspace())) {
    return (
      <>
        <EmptyWorkspace />
      </>
    );
  } else {
    return (
      <>
        <RouterProvider router={router}></RouterProvider>
      </>
    );
  }
};

interface LayoutMainProps {
  toggleSide: () => void;
  open: boolean;
}

const LayoutMain = (props: LayoutMainProps) => {
  const onDividerIn = () => {
    if (!props.open) return;
    props.toggleSide();
  };
  return (
    <>
      <AppShell.Main pt={'xl'}>
        <Divider
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            width: '5px',
            zIndex: 10000,
          }}
          onMouseEnter={onDividerIn}
        ></Divider>
        <MainContent />
      </AppShell.Main>
    </>
  );
};
export { LayoutMain };
export type { LayoutMainProps };
