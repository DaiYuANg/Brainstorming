import { ActionIcon, ActionIconVariant, rem } from '@mantine/core';
import { IconX } from '@tabler/icons-react';
import { useState } from 'react';

const TabCloseBtn = () => {
  const [actionIconVariant, setActionIconVariant] =
    useState<ActionIconVariant>('transparent');

  const onMouseEnter = () => {
    setActionIconVariant('outline');
  };
  const onMouseLeave = () => {
    setActionIconVariant('transparent');
  };
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
        <IconX style={iconStyle} />
      </ActionIcon>
    </>
  );
};

export { TabCloseBtn };
