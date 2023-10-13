import {
  ActionIcon,
  AppShell,
  Grid,
  Group,
  Menu,
  rem,
  Text,
} from '@mantine/core';
import {
  IconArrowsLeftRight,
  IconDots,
  IconLayoutSidebarLeftCollapseFilled,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconTrash,
} from '@tabler/icons-react';
import { OpenSettings } from './settings/OpenSettings.tsx';

const LayoutHeader = () => {
  // const [opened, { toggle }] = useDisclosure();

  console.log(window.electronAPI.isMac);
  return (
    <AppShell.Header className={'draggable'}>
      <Grid>
        <Grid.Col span={4}>
          <ActionIcon variant={'transparent'}>
            <IconLayoutSidebarLeftCollapseFilled color={'gray-50'} />
          </ActionIcon>
        </Grid.Col>
        <Grid.Col span={4}>
          <Group justify={'center'}>
            <Text
              pt={3}
              style={{
                userSelect: 'none',
              }}
            >
              Document Title
            </Text>
          </Group>
        </Grid.Col>
        <Grid.Col span={4}>
          <Group justify={'end'} pr={'xs'}>
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <ActionIcon variant={'transparent'}>
                  <IconDots />
                </ActionIcon>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Application</Menu.Label>
                <Menu.Item
                  leftSection={
                    <OpenSettings style={{ width: rem(14), height: rem(14) }} />
                  }
                >
                  Settings
                </Menu.Item>
                <Menu.Item
                  leftSection={
                    <IconMessageCircle
                      style={{ width: rem(14), height: rem(14) }}
                    />
                  }
                >
                  Messages
                </Menu.Item>
                <Menu.Item
                  leftSection={
                    <IconPhoto style={{ width: rem(14), height: rem(14) }} />
                  }
                >
                  Gallery
                </Menu.Item>
                <Menu.Item
                  leftSection={
                    <IconSearch style={{ width: rem(14), height: rem(14) }} />
                  }
                  rightSection={
                    <Text size="xs" c="dimmed">
                      ⌘K
                    </Text>
                  }
                >
                  Search
                </Menu.Item>

                <Menu.Divider />

                <Menu.Label>Danger zone</Menu.Label>
                <Menu.Item
                  leftSection={
                    <IconArrowsLeftRight
                      style={{ width: rem(14), height: rem(14) }}
                    />
                  }
                >
                  Transfer my data
                </Menu.Item>
                <Menu.Item
                  color="red"
                  leftSection={
                    <IconTrash style={{ width: rem(14), height: rem(14) }} />
                  }
                >
                  Delete my account
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Grid.Col>
      </Grid>
    </AppShell.Header>
  );
};

export { LayoutHeader };
