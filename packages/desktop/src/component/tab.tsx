import {
  ActionIcon,
  Center,
  CloseButton,
  ScrollArea,
  Tabs,
} from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { Outlet, useNavigate } from 'react-router';
import { useTabStore } from '../store/TabStore.tsx';

const Tab = () => {
  const { activeTab, tabs, setActiveTab, addTab, removeTab } = useTabStore();
  const navigate = useNavigate();
  const handleTabChange = (tabId: string | null) => {
    console.log('tab change');
    console.log(tabId);
    if (tabId === null || tabId === '') {
      return;
    }
    navigate(`/edit/${tabId}`, {
      viewTransition: true,
    });
    setActiveTab(tabId);
  };
  return (
    <>
      <Tabs value={activeTab} onChange={handleTabChange}>
        <ScrollArea p={0} style={{ width: '100%', height: 60 }} scrollbars='x'>
          <Tabs.List
            style={{
              flexDirection: 'row',
              flexWrap: 'nowrap',
            }}
          >
            {tabs.map((tab, _index) => (
              <Tabs.Tab
                key={_index}
                value={tab.id}
                rightSection={
                  <CloseButton
                    onClick={() => {
                      removeTab(tab.id);
                    }}
                    component={'a'}
                    size={'xs'}
                    aria-label='Close modal'
                  />
                }
              >
                {tab.id}
              </Tabs.Tab>
            ))}
            <Center ml={'sm'}>
              <ActionIcon
                onClick={() => {
                  const newTabId = addTab();
                  setActiveTab(newTabId);
                  handleTabChange(newTabId);
                }}
                size={'xs'}
                variant={'light'}
              >
                <IconPlus />
              </ActionIcon>
            </Center>
          </Tabs.List>
        </ScrollArea>

        {tabs.map((tab, index) => (
          <Tabs.Panel key={tab.id} value={tab.id}>
            <Outlet key={index} />
          </Tabs.Panel>
        ))}
      </Tabs>
    </>
  );
};

export { Tab };
