import {
  ActionIcon,
  ActionIconGroup,
  Divider,
  Group,
  rem,
  Switch,
  useMantineTheme,
} from '@mantine/core';
import { IconGraph, IconTextCaption } from '@tabler/icons-react';
import { useBrainstormingEditor } from '../hook/useBrainstormingEditor.ts';
import classes from './Toolbar.module.css';

const TypeSwitch = () => {
  const theme = useMantineTheme();
  const { setType } = useBrainstormingEditor();
  const sunIcon = (
    <IconTextCaption
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IconGraph
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );

  return (
    <Switch
      size='md'
      onChange={(e) => {
        if (e.target.checked) {
          setType('paragraph');
        } else {
          setType('text');
        }
      }}
      color='dark.4'
      onLabel={sunIcon}
      offLabel={moonIcon}
    />
  );
};

const Toolbar = () => {
  return (
    <div>
      <Group className={classes.floatingToolbar}>
        <TypeSwitch />
        <ActionIconGroup>
          <ActionIcon variant={'light'}>
            <IconTextCaption />
          </ActionIcon>
          <ActionIcon variant={'light'}>
            <IconGraph />
          </ActionIcon>
        </ActionIconGroup>
      </Group>
      <Divider />
    </div>
  );
};

export { Toolbar };
