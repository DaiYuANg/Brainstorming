import { Group, Modal, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSettings } from '@tabler/icons-react';
import { SettingsLayout } from './SettingsLayout.tsx';

export const OpenSettings = () => {
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
      <Group>
        <UnstyledButton onClick={open}>
          <IconSettings />
        </UnstyledButton>
        {/*<Button onClick={open}>Open centered Modal</Button>*/}
      </Group>
    </>
  );
};
