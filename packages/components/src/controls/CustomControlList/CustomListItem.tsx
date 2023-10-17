import { Badge, UnstyledButton } from '@mantine/core';
import { JSX } from 'react';
import classes from './CustomListItem.module.css';
interface Link {
  label: string;
  notifications?: number;
  icon: JSX.Element;
}
interface CustomListItemProps {
  link: Link;
}

const CustomListItem = (props: CustomListItemProps): JSX.Element => {
  return (
    <>
      <UnstyledButton key={props.link.label} className={classes.mainLink}>
        <div className={classes.mainLinkInner}>
          {props.link.icon}
          {/*<ink.icon size={20} className={classes.mainLinkIcon} stroke={1.5}/>*/}
          <span>{props.link.label}</span>
        </div>
        {props.link.notifications && (
          <Badge size='sm' variant='filled' className={classes.mainLinkBadge}>
            {props.link.notifications}
          </Badge>
        )}
      </UnstyledButton>
    </>
  );
};

export { CustomListItem };

export type { CustomListItemProps };
