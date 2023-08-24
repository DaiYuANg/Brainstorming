import { useDisclosure } from '@mantine/hooks';
import { ActionIcon, Group, Modal } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';
import { SettingsLayout } from './SettingsLayout.tsx';

export const OpenSettings = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        fullScreen
        centered
        withCloseButton={false}
      >
        <SettingsLayout />
      </Modal>

      <Group position="center">
        <ActionIcon onClick={open}>
          <IconSettings />
        </ActionIcon>
        {/*<Button onClick={open}>Open centered Modal</Button>*/}
      </Group>
    </>
  );
};
