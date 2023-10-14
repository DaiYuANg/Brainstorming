import { ActionIcon, Group } from '@mantine/core';
import { IconMinus, IconSquare, IconX } from '@tabler/icons-react';

const WindowsControlButton = () => {
  return (
    <Group gap={'xs'}>
      <ActionIcon
        onClick={window.electronAPI.minimizeWindow}
        variant={'transparent'}
      >
        <IconMinus />
      </ActionIcon>
      <ActionIcon
        onClick={window.electronAPI.maximizeWindow}
        variant={'transparent'}
      >
        <IconSquare />
      </ActionIcon>
      <ActionIcon
        onClick={window.electronAPI.closeWindow}
        variant={'transparent'}
      >
        <IconX />
      </ActionIcon>
    </Group>
  );
};

export { WindowsControlButton };
