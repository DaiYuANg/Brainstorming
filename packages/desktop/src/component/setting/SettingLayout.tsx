import { Tabs, Text } from '@mantine/core';

const SettingLayout = () => {
  return (
    <Tabs h={'90vh'} defaultValue='gallery' orientation='vertical'>
      <Tabs.List>
        <Tabs.Tab value='gallery'>Gallery</Tabs.Tab>
        <Tabs.Tab value='messages'>Messages</Tabs.Tab>
        <Tabs.Tab value='settings'>Settings</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value='gallery'>
        <Text>Test</Text>
      </Tabs.Panel>
      <Tabs.Panel value='messages'>Messages tab content</Tabs.Panel>
      <Tabs.Panel value='settings'>Settings tab content</Tabs.Panel>
    </Tabs>
  );
};

export { SettingLayout };
