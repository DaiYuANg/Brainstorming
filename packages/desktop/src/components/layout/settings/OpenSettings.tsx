import { Group, Modal } from '@mantine/core';
import { useColorScheme, useDisclosure } from '@mantine/hooks';
import { IconSettings, TablerIconsProps } from '@tabler/icons-react';
import { SettingsLayout } from './SettingsLayout.tsx';

interface OpenSettingsProps extends TablerIconsProps {}

export const OpenSettings = (props: OpenSettingsProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  const color = useColorScheme();
  return (
    <>
      <Modal
        opened={opened}
        radius={10}
        title={'Settings'}
        onClose={close}
        centered
        size={'xl'}
      >
        <SettingsLayout />
      </Modal>
      <Group p={0}>
        <IconSettings
          color={
            color === 'dark'
              ? 'var(--mantine-color-white)'
              : 'var(--mantine-color-black)'
          }
          onClick={open}
          style={props.style}
        />
      </Group>
    </>
  );
};
