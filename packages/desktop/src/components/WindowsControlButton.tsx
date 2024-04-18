import { ActionIcon, Group } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { IconMinus, IconSquare, IconX } from '@tabler/icons-react';

const WindowsControlButton = () => {
  const color = useColorScheme();

  return (
    <Group gap={'xs'}>
      <ActionIcon
        // onClick={window.electronAPI.minimizeWindow}
        variant={'transparent'}
      >
        <IconMinus
          color={
            color === 'dark'
              ? 'var(--mantine-color-white)'
              : 'var(--mantine-color-black)'
          }
        />
      </ActionIcon>
      <ActionIcon
        // onClick={window.electronAPI.maximizeWindow}
        variant={'transparent'}
      >
        <IconSquare
          color={
            color === 'dark'
              ? 'var(--mantine-color-white)'
              : 'var(--mantine-color-black)'
          }
        />
      </ActionIcon>
      <ActionIcon
        // onClick={window.electronAPI.closeWindow}
        variant={'transparent'}
      >
        <IconX
          color={
            color === 'dark'
              ? 'var(--mantine-color-white)'
              : 'var(--mantine-color-black)'
          }
        />
      </ActionIcon>
    </Group>
  );
};

export { WindowsControlButton };
