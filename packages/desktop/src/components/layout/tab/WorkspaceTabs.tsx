import { Tabs } from '@mantine/core';
import { AddTabBtn } from './AddTabBtn.tsx';
import { TabCloseBtn } from './TabCloseBtn.tsx';

export const WorkspaceTabs = () => {
  return (
    <>
      <Tabs
        variant={'default'}
        color={'dark'}
        radius='md'
        p={0}
        defaultValue='chat'
      >
        <Tabs.List>
          <Tabs.Tab
            p={1}
            size={'sm'}
            // rightSection={<TabCloseBtn />}
            value='chat'
          >
            Chat
          </Tabs.Tab>
          <Tabs.Tab rightSection={<TabCloseBtn />} value='test'>
            Test
          </Tabs.Tab>
          <Tabs.Tab
            p={'xs'}
            rightSection={<AddTabBtn />}
            value='add'
            aria-label='add'
          />
        </Tabs.List>
      </Tabs>
    </>
  );
};
