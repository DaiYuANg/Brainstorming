import { ActionIcon, Center, rem } from '@mantine/core';
import {
  IconArrowBack,
  IconArrowForward,
  IconTopologyRing,
} from '@tabler/icons-react';
import classes from './ToolBox.module.css';
const ToolBox = () => {
  return (
    <>
      <div className={classes.toolbox}>
        <Center>
          <ActionIcon.Group>
            <ActionIcon variant='default' size='md' aria-label='Gallery'>
              <IconArrowBack style={{ width: rem(20) }} stroke={1.5} />
            </ActionIcon>

            <ActionIcon variant='default' size='md' aria-label='Settings'>
              <IconArrowForward style={{ width: rem(20) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon variant='default' size='md' aria-label='Settings'>
              <IconTopologyRing style={{ width: rem(20) }} stroke={1.5} />
            </ActionIcon>
          </ActionIcon.Group>
        </Center>
      </div>
    </>
  );
};

export { ToolBox };
