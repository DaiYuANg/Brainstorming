import {
  Box,
  Card,
  Code,
  Divider,
  NavLink,
  Text,
  TextInput,
  Tree,
} from '@mantine/core';
import {
  IconBulb,
  IconCheckbox,
  IconChevronDown,
  IconChevronRight,
  IconSearch,
  IconUser,
} from '@tabler/icons-react';
import { ReactElement } from 'react';

const links = [
  { icon: <IconBulb />, label: 'Activity', notifications: 3 },
  { icon: <IconCheckbox />, label: 'Tasks', notifications: 4 },
  { icon: <IconUser />, label: 'Contacts' },
];

const data = [
  {
    value: 'src',
    label: 'src',
    children: [
      { value: 'src/components', label: 'components' },
      { value: 'src/hooks', label: 'hooks' },
    ],
  },
  { value: 'package.json', label: 'package.json' },
];
const Nav = (): ReactElement => {
  return (
    <Box mt={15}>
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
      <Card>
        <Text>Workspace</Text>
        <Tree
          data={data}
          levelOffset={23}
          renderNode={({ node, expanded, hasChildren, elementProps }) => (
            <NavLink
              {...elementProps}
              rightSection={
                hasChildren && (
                  <IconChevronDown
                    size={18}
                    style={{
                      transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                )
              }
              label={node.label}
            />
          )}
        />
      </Card>
    </Box>
  );
};

export { Nav };
