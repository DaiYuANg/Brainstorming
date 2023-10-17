import {
  ActionIcon,
  AppShell,
  Grid,
  Group,
  Menu,
  rem,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import {
  IconArrowsLeftRight,
  IconDots,
  IconMessageCircle,
  IconPhoto,
  IconSailboatOff,
  IconSearch,
  IconTrash,
} from '@tabler/icons-react';
import classes from '../ContextMenu.module.css';

const LayoutHeader = () => {
  const color = useColorScheme();
  return (
    <AppShell.Header data-tauri-drag-region className={'draggable'}>
      <Grid>
        <Grid.Col span={4} data-tauri-drag-region></Grid.Col>
        <Grid.Col span={4} data-tauri-drag-region>
          <Group data-tauri-drag-region justify={'center'} align={'center'}>
            <Title data-tauri-drag-region order={6} pt={4}>
              Document Title
            </Title>
          </Group>
        </Grid.Col>
        <Grid.Col span={4} data-tauri-drag-region>
          <Group
            data-tauri-drag-region
            justify={'end'}
            align={'center'}
            gap={'xs'}
            pr={'xs'}
          >
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <Tooltip label="Page Settings" withArrow>
                  <ActionIcon variant={'transparent'}>
                    <IconDots
                      color={
                        color === 'dark'
                          ? 'var(--mantine-color-white)'
                          : 'var(--mantine-color-black)'
                      }
                    />
                  </ActionIcon>
                </Tooltip>
              </Menu.Target>

              <Menu.Dropdown>
                <div className={classes.contextMenu}>
                  <Menu.Label>Application</Menu.Label>
                  <Menu.Item
                    leftSection={
                      <IconSailboatOff
                        style={{ width: rem(14), height: rem(14) }}
                      />
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
                </div>
              </Menu.Dropdown>
            </Menu>
            {/*{window.electronAPI.isWindows && (*/}
            {/*  <>*/}
            {/*    <WindowsControlButton />*/}
            {/*  </>*/}
            {/*)}*/}
          </Group>
        </Grid.Col>
      </Grid>
    </AppShell.Header>
  );
};

export { LayoutHeader };
