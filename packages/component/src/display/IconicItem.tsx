import { UnstyledButton } from '@mantine/core';
import { ElementType, FC } from 'react';

import classes from './iconicItem.module.css';

type IconicItemProps = {
  label: string;
  icon: ElementType;
};

const IconicItem: FC<IconicItemProps> = (props: IconicItemProps) => {
  return (
    <>
      <UnstyledButton key={props.label} className={classes.mainLink}>
        <div className={classes.mainLinkInner}>
          <props.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
          <span>{props.label}</span>
        </div>
      </UnstyledButton>
    </>
  );
};

export { IconicItem };
