import { Box, Menu, rem, Text } from '@mantine/core';
import {
  IconArrowsLeftRight,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconTrash,
} from '@tabler/icons-react';
import { useCallback, useEffect, useState } from 'react';
interface MousePosition {
  x: number;
  y: number;
}

const ContextMenu = () => {
  const [opened, setOpened] = useState(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const mouseMoveEventHandler = useCallback(
    (ev: MouseEvent) => {
      if (opened) return;
      setMousePosition({ x: ev.pageX, y: ev.pageY });
    },
    [opened],
  );

  const onContextMenu = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      setOpened(true);
    },
    [setOpened],
  );
  useEffect(() => {
    window.onmousemove = mouseMoveEventHandler;
    window.oncontextmenu = onContextMenu;
    return () => {
      window.removeEventListener('mousemove', mouseMoveEventHandler);
      window.removeEventListener('contextmenu', onContextMenu);
    };
  }, [mouseMoveEventHandler, onContextMenu]);
  return (
    <>
      <Menu
        opened={opened}
        position={'right'}
        transitionProps={{ transition: 'pop', duration: 150 }}
        onChange={setOpened}
        radius={'md'}
        shadow='md'
        width={200}
      >
        <Menu.Target>
          <Box
            pos={'absolute'}
            style={{
              top: `${mousePosition.y}px`,
              left: `${mousePosition.x}px`,
            }}
          ></Box>
        </Menu.Target>
        <Menu.Dropdown>
          <div className={'normal-font'}>
            <Menu.Label>Application</Menu.Label>
            <Menu.Item
              leftSection={
                <IconSettings style={{ width: rem(14), height: rem(14) }} />
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
                <Text size='xs' c='dimmed'>
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
              color='red'
              leftSection={
                <IconTrash style={{ width: rem(14), height: rem(14) }} />
              }
            >
              Delete my account
            </Menu.Item>
          </div>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};

export { ContextMenu };
export type { MousePosition };
