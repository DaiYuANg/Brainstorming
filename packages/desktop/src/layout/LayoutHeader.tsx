import { ActionIcon, AppShell, Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMaximize, IconMinimize, IconX } from '@tabler/icons-react';

const LayoutHeader = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell.Header>
      <Group h="100%" pl={'xl'} justify={'flex-end'} px="md">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <ActionIcon
          size={'sm'}
          color={'teal'}
          onClick={() => {
            window.electronAPI.closeWindow();
          }}
        >
          <IconX />
        </ActionIcon>
        <ActionIcon
          size={'sm'}
          color={'teal'}
          onClick={() => {
            window.electronAPI.minimizeWindow();
          }}
        >
          <IconMinimize />
        </ActionIcon>
        <ActionIcon
          size={'sm'}
          color={'teal'}
          onClick={() => {
            window.electronAPI.maximizeWindow();
          }}
        >
          <IconMaximize />
        </ActionIcon>
      </Group>
    </AppShell.Header>
  );
};

export { LayoutHeader };
