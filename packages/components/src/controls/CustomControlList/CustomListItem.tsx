import {Badge, UnstyledButton} from "@mantine/core";
import classes from './CustomListItem.module.css'
interface Link {
    label: string;
    notifications?: number;
}
interface CustomListItemProps {
    link: Link
}

const CustomListItem = (props: CustomListItemProps) => {

    return (
        <>
            <UnstyledButton key={props.link.label} className={classes.mainLink}>
                <div className={classes.mainLinkInner}>
                    {/*<link.icon size={20} className={classes.mainLinkIcon} stroke={1.5}/>*/}
                    <span>{props.link.label}</span>
                </div>
                {props.link.notifications && (
                    <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
                        {props.link.notifications}
                    </Badge>
                )}
            </UnstyledButton>
        </>
    )
}

export {CustomListItem}

export type {
    CustomListItemProps
}
