import { ActionIcon, Group, Header } from '@mantine/core';
import { IconMaximize, IconMinus, IconX } from '@tabler/icons-react';

export const LayoutHeader = () => {
  const minimize = () => {
    window.electronAPI.minimizeWindow();
  };

  const maximize = () => {
    window.electronAPI.maximizeWindow();
  };

  const close = () => {
    window.electronAPI.closeWindow();
  };

  return (
    <>
      <Header
        height={30}
        p={0}
        fixed
        hidden
        data-tauri-drag-region
        className={'titlebar'}
      >
        <Group p={0} position={'right'}>
          <ActionIcon onClick={minimize} name={'minus'}>
            <IconMinus />
          </ActionIcon>
          <ActionIcon onClick={maximize}>
            <IconMaximize />
          </ActionIcon>
          <ActionIcon onClick={close}>
            <IconX />
          </ActionIcon>
        </Group>
      </Header>
    </>
  );
};
