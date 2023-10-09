import {
  ActionIcon,
  AppShell,
  Burger,
  Center,
  Grid,
  Group,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMaximize, IconMinimize, IconX } from '@tabler/icons-react';

const LayoutHeader = () => {
  const [opened, { toggle }] = useDisclosure();

  console.log(window.electronAPI.isMac);
  return (
    <AppShell.Header>
      <Grid p={0}>
        <Grid.Col span={6}>
          <Center>Title</Center>
        </Grid.Col>
        {window.electronAPI.isWindows || window.electronAPI.isLinux ? (
          <Grid.Col span={4}>
            <Group h="100%" align={'center'} justify={'flex-end'}>
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
              />
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
                color={'violet'}
                onClick={() => {
                  window.electronAPI.maximizeWindow();
                }}
              >
                <IconMaximize />
              </ActionIcon>
              <ActionIcon
                size={'sm'}
                color={'teal'}
                onClick={() => {
                  window.electronAPI.closeWindow();
                }}
              >
                <IconX />
              </ActionIcon>
            </Group>
          </Grid.Col>
        ) : (
          <></>
        )}
      </Grid>
    </AppShell.Header>
  );
};

export { LayoutHeader };
