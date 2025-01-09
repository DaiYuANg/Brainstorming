import { Box, Code, Divider, NavLink, Text, TextInput } from '@mantine/core';
import {
  IconBulb,
  IconCheckbox,
  IconChevronRight,
  IconSearch,
  IconUser,
} from '@tabler/icons-react';
import { ReactElement } from 'react';
import { NavWorkspaceTree } from './NavWorkspaceTree.tsx';
import { Settings } from './Settings.tsx';

const links = [
  { icon: <IconBulb />, label: 'Activity', notifications: 3 },
  { icon: <IconCheckbox />, label: 'Tasks', notifications: 4 },
  { icon: <IconUser />, label: 'Contacts' },
];

const Nav = (): ReactElement => {
  return (
    <Box p={'sm'}>
      <TextInput
        placeholder='Search'
        size='xs'
        leftSection={<IconSearch size={12} stroke={1.5} />}
        rightSectionWidth={70}
        rightSection={<Code>Ctrl + K</Code>}
        styles={{ section: { pointerEvents: 'none' } }}
        mb='sm'
      />
      <Divider />
      <Box>
        {links.map((link, index) => (
          <NavLink
            key={index}
            href='#required-for-focus'
            label={link.label}
            leftSection={link.icon}
            rightSection={
              <IconChevronRight
                size='0.8rem'
                stroke={1.5}
                className='mantine-rotate-rtl'
              />
            }
          />
        ))}
      </Box>
      <Divider />
      <Text>Workspace</Text>
      <NavWorkspaceTree />
      <div className={['pb-5 mt-5 border-t-2'].join(' ')}>
        <Settings />
      </div>
    </Box>
  );
};

export { Nav };
