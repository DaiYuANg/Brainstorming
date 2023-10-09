import { ActionIcon, Group, Modal } from '@mantine/core';
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
        <ActionIcon
          component={'div'}
          color={'dark'}
          style={{
            zIndex: 10000,
          }}
          onClick={open}
        >
          <IconSettings />
        </ActionIcon>
        {/*<Button onClick={open}>Open centered Modal</Button>*/}
      </Group>
    </>
  );
};
