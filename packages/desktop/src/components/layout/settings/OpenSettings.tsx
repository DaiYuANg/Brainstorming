import { ActionIcon, Group, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSettings, TablerIconsProps } from '@tabler/icons-react';
import { SettingsLayout } from './SettingsLayout.tsx';

interface OpenSettingsProps extends TablerIconsProps {}

export const OpenSettings = (props: OpenSettingsProps) => {
  const [opened, { open, close }] = useDisclosure(false);

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
        <ActionIcon
          variant={'transparent'}
          p={0}
          component={'div'}
          onClick={open}
        >
          <IconSettings style={props.style} />
        </ActionIcon>
      </Group>
    </>
  );
};
