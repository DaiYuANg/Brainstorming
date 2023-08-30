import { Divider, Tabs } from '@mantine/core';
import { IconPlus, IconX } from '@tabler/icons-react';
import React from 'react';
import './tab.css';

export const WorkspaceTabs = () => {
  const addAWorkspace = (e: React.MouseEvent) => {
    console.log(123);
    e.preventDefault();
  };

  return (
    <>
      <Tabs p={'xs'} variant="pills" radius="md" defaultValue="chat">
        <Tabs.List>
          <Tabs.Tab rightSection={<IconX />} value="chat">
            Chat
          </Tabs.Tab>
          <Tabs.Tab
            rightSection={
              <div className="icon-container" onClick={addAWorkspace}>
                <IconX size="0.8rem" />
              </div>
            }
            value="settings"
          >
            Settings
          </Tabs.Tab>
          <Tabs.Tab
            rightSection={<IconPlus size="0.8rem" />}
            onClick={addAWorkspace}
            value="money"
            aria-label="Get money"
          />
        </Tabs.List>
      </Tabs>
      <Divider />
    </>
  );
};
