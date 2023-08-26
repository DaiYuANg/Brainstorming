import { Accordion, Navbar, Tabs, rem, useMantineTheme } from '@mantine/core';
import { IconCameraSelfie, IconPhoto, IconPrinter } from '@tabler/icons-react';

const SettingNavbar = () => {
  const theme = useMantineTheme();
  const getColor = (color: string) =>
    theme.colors[color][theme.colorScheme === 'dark' ? 5 : 7];

  return (
    <>
      <Navbar p="sm" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
        <Accordion sx={{}}>
          <Accordion.Item value="photos">
            <Accordion.Control
              icon={<IconPhoto size={rem(20)} color={getColor('red')} />}
            >
              Recent photos
            </Accordion.Control>
            <Accordion.Panel>Content</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="print">
            <Accordion.Control
              icon={<IconPrinter size={rem(20)} color={getColor('blue')} />}
            >
              Print photos
            </Accordion.Control>
            <Accordion.Panel>Content</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="camera">
            <Accordion.Control
              icon={
                <IconCameraSelfie size={rem(20)} color={getColor('teal')} />
              }
            >
              Camera settings
            </Accordion.Control>
            <Accordion.Panel>Content</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Navbar>
    </>
  );
};

export const SettingsLayout = () => {
  // <AppShell navbar={<SettingNavbar />} layout="alt">
  //   App content
  // </AppShell>
  return (
    <>
      <Tabs defaultValue="gallery" orientation="vertical">
        <Tabs.List>
          <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
          <Tabs.Tab value="messages">Messages</Tabs.Tab>
          <Tabs.Tab value="settings">Settings</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>
        <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>
        <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
      </Tabs>
    </>
  );
};
