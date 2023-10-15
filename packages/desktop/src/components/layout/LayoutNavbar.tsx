import {
    ActionIcon,
    AppShell,
    Badge,
    Code,
    Divider,
    Group,
    ScrollArea,
    Space,
    Text,
    TextInput,
    Tooltip,
    UnstyledButton,
    rem,
} from '@mantine/core';
import {useColorScheme} from '@mantine/hooks';
import {
    IconBulb,
    IconCheckbox,
    IconLayoutSidebarLeftCollapse,
    IconPlus,
    IconSearch,
    IconUser,
} from '@tabler/icons-react';
import classes from './LayoutNavbar.module.css';
import {OpenSettings} from './settings/OpenSettings.tsx';
import {CustomListItem} from "@brainstorming/component";

const links = [
    {icon: IconBulb, label: 'Activity', notifications: 3},
    {icon: IconCheckbox, label: 'Tasks', notifications: 4},
    {icon: IconUser, label: 'Contacts'},
];

const collections = [
    {emoji: '👍', label: 'Sales'},
    {emoji: '🚚', label: 'Deliveries'},
    {emoji: '💸', label: 'Discounts'},
    {emoji: '💰', label: 'Profits'},
    {emoji: '✨', label: 'Reports'},
    {emoji: '🛒', label: 'Orders'},
    {emoji: '📅', label: 'Events'},
    {emoji: '🙈', label: 'Debts'},
    {emoji: '💁‍♀️', label: 'Customers'},
];
const mainLinks = links.map((link) => (
    <CustomListItem link={link}/>
    // <UnstyledButton key={link.label} className={classes.mainLink}>
    //      <div className={classes.mainLinkInner}>
    //          <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5}/>
    //          <span>{link.label}</span>
    //      </div>
    //      {link.notifications && (
    //          <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
    //              {link.notifications}
    //          </Badge>
    //      )}
    // </UnstyledButton>
));
const collectionLinks = collections.map((collection) => (
    <UnstyledButton
        style={{
            width: '100%',
            display: 'flex',
            lineHeight: 1,
            justifySelf: 'center',
            alignItems: 'center',
        }}
        key={collection.label}
        className={classes.collectionLink}
    >
    <span style={{marginRight: rem(3), fontSize: rem(16)}}>
      {collection.emoji}
    </span>
        <Space w={'xs'}/>
        {collection.label}
    </UnstyledButton>
));

interface LayoutNavbarProp {
    toggleOpen: () => void;
    navbarResize: (width: number) => void;
}

export const LayoutNavbar = (props: LayoutNavbarProp) => {
    const color = useColorScheme();
    return (
        <>
            <AppShell.Navbar>
                <Group justify={'flex-end'} gap={'xs'} align={'center'}>
                    <Tooltip arrowSize={4} withArrow label="Open Settings">
                        <ActionIcon variant={'transparent'}>
                            <OpenSettings/>
                        </ActionIcon>
                    </Tooltip>
                    <Tooltip arrowSize={4} withArrow label="Collaspe Side Bar">
                        <ActionIcon variant={'transparent'} onClick={props.toggleOpen}>
                            <IconLayoutSidebarLeftCollapse
                                color={
                                    color === 'dark'
                                        ? 'var(--mantine-color-white)'
                                        : 'var(--mantine-color-black)'
                                }
                            />
                        </ActionIcon>
                    </Tooltip>
                </Group>
                <nav className={classes.navbar}>
                    <TextInput
                        placeholder="Search"
                        size="xs"
                        leftSection={
                            <IconSearch
                                style={{width: rem(12), height: rem(12)}}
                                stroke={1.5}
                            />
                        }
                        rightSectionWidth={70}
                        rightSection={<Code className={classes.searchCode}>Ctrl + J</Code>}
                        styles={{section: {pointerEvents: 'none'}}}
                        mb="sm"
                    />
                    <div className={classes.section}>
                        <div className={classes.mainLinks}>{mainLinks}</div>
                        <Divider
                            size={'xs'}
                            style={{
                                width: '98%',
                            }}
                        />
                    </div>

                    <div className={classes.section}>
                        <Group
                            className={classes.collectionsHeader}
                            justify="space-between"
                        >
                            <Text size="xs" fw={500} c="dimmed">
                                Collections
                            </Text>
                            <Tooltip label="Create collection" withArrow position="right">
                                <ActionIcon variant="default" size={18}>
                                    <IconPlus
                                        style={{width: rem(12), height: rem(12)}}
                                        stroke={1.5}
                                    />
                                </ActionIcon>
                            </Tooltip>
                        </Group>
                        <ScrollArea>
                            <div className={classes.collections}>{collectionLinks}</div>
                        </ScrollArea>
                    </div>
                </nav>
                <Divider
                    orientation="vertical"
                    style={{
                        position: 'absolute',
                        right: 0,
                        width: '1px',
                        height: '100vh',
                        cursor: 'col-resize',
                    }}
                />
            </AppShell.Navbar>
        </>
    );
};
