import { Divider, rem, Tabs, TabsProps } from '@mantine/core';
import {
  IconMessageCircle,
  IconPhoto,
  IconSettings,
  IconX,
} from '@tabler/icons-react';

const StyledTabs = (props: TabsProps) => {
  return (
    <>
      <Tabs
        unstyled
        styles={(theme) => {
          return {
            tab: {
              ...theme.fn.focusStyles(),
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[6]
                  : theme.white,
              color:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[0]
                  : theme.colors.gray[9],
              border: `${rem(1)} solid ${
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[6]
                  : theme.colors.gray[4]
              }`,
              cursor: 'pointer',
              fontSize: theme.fontSizes.sm,
              display: 'flex',
              alignItems: 'center',

              '&:disabled': {
                opacity: 0.5,
                cursor: 'not-allowed',
              },

              '&:not(:first-of-type)': {
                borderLeft: 0,
              },

              '&:first-of-type': {
                borderTopLeftRadius: theme.radius.md,
                borderBottomLeftRadius: theme.radius.md,
              },

              '&:last-of-type': {
                borderTopRightRadius: theme.radius.md,
                borderBottomRightRadius: theme.radius.md,
              },

              '&[data-active]': {
                backgroundColor: theme.colors.blue[7],
                borderColor: theme.colors.blue[7],
                color: theme.white,
              },
              StyledTabs,
            },

            tabIcon: {
              marginRight: theme.spacing.xs,
              display: 'flex',
              alignItems: 'center',
            },

            tabsList: {
              display: 'flex',
            },
          };
        }}
        {...props}
      />
      <Divider my="sm" />
    </>
  );
};

export const WorkspaceTabs = () => {
  return (
    <>
      <StyledTabs defaultValue="gallery">
        <Tabs.List>
          <Tabs.Tab
            value="gallery"
            icon={<IconPhoto size="0.8rem" />}
            rightSection={<IconX size={'1rem'} />}
          >
            Gallery
          </Tabs.Tab>
          <Tabs.Tab value="messages" icon={<IconMessageCircle size="0.8rem" />}>
            Messages
          </Tabs.Tab>
          <Tabs.Tab value="settings" icon={<IconSettings size="0.8rem" />}>
            Settings
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="gallery" pt="xs">
          Gallery tab content
        </Tabs.Panel>

        <Tabs.Panel value="messages" pt="xs">
          Messages tab content
        </Tabs.Panel>

        <Tabs.Panel value="settings" pt="xs">
          Settings tab content
        </Tabs.Panel>
      </StyledTabs>
    </>
  );
};
