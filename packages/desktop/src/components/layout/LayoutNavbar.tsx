import {
  ActionIcon,
  AppShell,
  Badge,
  Button,
  Code,
  Divider,
  Grid,
  Group,
  ScrollArea,
  Space,
  Text,
  TextInput,
  Tooltip,
  UnstyledButton,
  rem,
} from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import {
  MultiBackend,
  Tree,
  getBackendOptions,
} from '@minoru/react-dnd-treeview';
import {
  IconBulb,
  IconCheckbox,
  IconLayoutSidebarLeftCollapse,
  IconPlus,
  IconSearch,
  IconUser,
} from '@tabler/icons-react';
import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import classes from './LayoutNavbar.module.css';
import TitleBar from './TitleBar.tsx';
import { OpenSettings } from './settings/OpenSettings.tsx';

const data = [
  {
    id: 1,
    parent: 0,
    droppable: true,
    text: 'Folder 1',
  },
  {
    id: 2,
    parent: 1,
    text: 'File 1-1',
    data: {
      fileType: 'csv',
      fileSize: '0.5MB',
    },
  },
  {
    id: 3,
    parent: 1,
    text: 'File 1-2',
    data: {
      fileType: 'pdf',
      fileSize: '4.8MB',
    },
  },
  {
    id: 4,
    parent: 0,
    droppable: true,
    text: 'Folder 2',
  },
  {
    id: 5,
    parent: 4,
    droppable: true,
    text: 'Folder 2-1',
  },
  {
    id: 6,
    parent: 5,
    text: 'File 2-1-1',
    data: {
      fileType: 'image',
      fileSize: '2.1MB',
    },
  },
];

const links = [
  { icon: IconBulb, label: 'Activity', notifications: 3 },
  { icon: IconCheckbox, label: 'Tasks', notifications: 4 },
  { icon: IconUser, label: 'Contacts' },
];

const collections = [
  { emoji: '👍', label: 'Sales' },
  { emoji: '🚚', label: 'Deliveries' },
  { emoji: '💸', label: 'Discounts' },
  { emoji: '💰', label: 'Profits' },
  { emoji: '✨', label: 'Reports' },
  { emoji: '🛒', label: 'Orders' },
  { emoji: '📅', label: 'Events' },
  { emoji: '🙈', label: 'Debts' },
  { emoji: '💁‍♀️', label: 'Customers' },
];
const mainLinks = links.map((link) => (
  // <>{<CustomListItem link={link} key={link.label} />}</>
  <UnstyledButton key={link.label} className={classes.mainLink}>
    <div className={classes.mainLinkInner}>
      <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
      <span>{link.label}</span>
    </div>
    {link.notifications && (
      <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
        {link.notifications}
      </Badge>
    )}
  </UnstyledButton>
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
    <span style={{ marginRight: rem(3), fontSize: rem(16) }}>
      {collection.emoji}
    </span>
    <Space w={'xs'} />
    {collection.label}
  </UnstyledButton>
));

interface LayoutNavbarProp {
  toggleOpen: () => void;
  navbarResize: (width: number) => void;
}

export const LayoutNavbar = (props: LayoutNavbarProp) => {
  const [treeData, setTreeData] = useState(data);
  const handleDrop = (newTreeData: any) => setTreeData(newTreeData);
  const color = useColorScheme();
  return (
    <>
      <AppShell.Navbar data-tauri-drag-region>
        <Grid data-tauri-drag-region>
          <Grid.Col data-tauri-drag-region span={8} pl={'sm'}>
            <TitleBar data-tauri-drag-region />
            {/*{window.electronAPI.isWindows && (*/}
            {/*  <Group gap={0} align={'center'}>*/}
            {/*    <IconNotebook />*/}
            {/*    <Text>Brainstorming</Text>*/}
            {/*  </Group>*/}
            {/*)}*/}
          </Grid.Col>
          <Grid.Col span={4} data-tauri-drag-region>
            <Group justify={'flex-end'} gap={0} align={'center'}>
              <Tooltip arrowSize={4} withArrow label="Open Settings">
                <ActionIcon variant={'transparent'}>
                  <OpenSettings />
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
          </Grid.Col>
        </Grid>
        <Divider />
        <nav className={classes.navbar}>
          <TextInput
            placeholder="Search"
            size="xs"
            leftSection={
              <IconSearch
                style={{ width: rem(12), height: rem(12) }}
                stroke={1.5}
              />
            }
            rightSectionWidth={70}
            rightSection={<Code className={classes.searchCode}>Ctrl + J</Code>}
            styles={{ section: { pointerEvents: 'none' } }}
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
                    style={{ width: rem(12), height: rem(12) }}
                    stroke={1.5}
                  />
                </ActionIcon>
              </Tooltip>
            </Group>
            <ScrollArea>
              <div className={classes.collections}>{collectionLinks}</div>
              <DndProvider backend={MultiBackend} options={getBackendOptions()}>
                <Tree
                  tree={treeData}
                  rootId={0}
                  onDrop={handleDrop}
                  render={(node, { depth, isOpen, onToggle }) => (
                    <Button style={{ marginLeft: depth * 10 }}>
                      {node.droppable && (
                        <span onClick={onToggle}>{isOpen ? '[-]' : '[+]'}</span>
                      )}
                      {node.text}
                    </Button>
                  )}
                />
              </DndProvider>
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
