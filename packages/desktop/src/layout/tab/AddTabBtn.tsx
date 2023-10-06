import { ActionIcon, ActionIconVariant, rem } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { useCallback, useState } from 'react';

const AddTabBtn = () => {
  const [actionIconVariant, setActionIconVariant] =
    useState<ActionIconVariant>('transparent');

  const onMouseEnter = useCallback(() => {
    setActionIconVariant('outline');
  }, []);
  const onMouseLeave = useCallback(() => {
    setActionIconVariant('transparent');
  }, []);
  const iconStyle = { width: rem(12), height: rem(12) };
  return (
    <>
      <ActionIcon
        variant={actionIconVariant}
        color={'indigo'}
        size={'xs'}
        component={'span'}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <IconPlus size="0.8rem" style={iconStyle} />
      </ActionIcon>
    </>
  );
};

export { AddTabBtn };
