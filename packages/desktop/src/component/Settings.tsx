import {
  Button,
  CloseButton,
  Divider,
  Group,
  Modal,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSettings } from '@tabler/icons-react';
import { SettingLayout } from './setting/SettingLayout.tsx';

const Settings = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <Button
        fullWidth
        // className={classes.link}
        onClick={open}
        leftSection={<IconSettings stroke={1.5} />}
      >
        <span>Settings</span>
      </Button>
      <Modal opened={opened} withCloseButton={false} fullScreen onClose={close}>
        <Group justify='space-between'>
          <Text>Settings</Text>
          <CloseButton onClick={close} />
        </Group>
        <Divider />
        <SettingLayout />
      </Modal>
    </div>
  );
};

export { Settings };
