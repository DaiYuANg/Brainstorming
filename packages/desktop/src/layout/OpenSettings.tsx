import { ActionIcon, Group, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSettings } from '@tabler/icons-react';

export const OpenSettings = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} fullScreen centered>
        {/*<SettingsLayout />*/}
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
