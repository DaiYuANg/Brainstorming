import { Divider, Tabs } from '@mantine/core';
import { AddTabBtn } from './AddTabBtn.tsx';
import { TabCloseBtn } from './TabCloseBtn.tsx';

export const WorkspaceTabs = () => {
  return (
    <>
      <Tabs
        pt={'xs'}
        pb={'xs'}
        variant={'pills'}
        color={'gray'}
        radius="sm"
        defaultValue="chat"
      >
        <Tabs.List>
          <Tabs.Tab rightSection={<TabCloseBtn />} value="chat">
            Chat
          </Tabs.Tab>
          <Tabs.Tab rightSection={<TabCloseBtn />} value="test">
            Test
          </Tabs.Tab>
          <Tabs.Tab
            p={'xs'}
            rightSection={<AddTabBtn />}
            value="add"
            aria-label="add"
          />
        </Tabs.List>
      </Tabs>
      <Divider />
    </>
  );
};
