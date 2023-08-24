import { ActionIcon, Group, Header } from '@mantine/core';
import {IconMaximize, IconMinus, IconRocket, IconX} from '@tabler/icons-react';
import { appWindow } from '@tauri-apps/api/window';

export const LayoutHeader = () => {
  const minimize = () => {
    appWindow.minimize().then((r) => {
      console.log(r);
    });
  };

  const maximize = () => {
    appWindow.maximize().then((r) => {
      console.log(r);
    });
  };

  const close = () => {
    appWindow.close().then((r) => {
      console.log(r);
    });
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
