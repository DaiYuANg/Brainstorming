import {Accordion, AppShell, Navbar, rem, Text, useMantineTheme} from '@mantine/core';
import {IconCameraSelfie, IconPhoto, IconPrinter} from '@tabler/icons-react';

const SettingNavbar = () => {
    const theme = useMantineTheme();
    const getColor = (color: string) => theme.colors[color][theme.colorScheme === 'dark' ? 5 : 7];

    return (
    <>
      <Navbar p="sm" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
          <Accordion sx={{
          }}>
              <Accordion.Item value="photos">
                  <Accordion.Control icon={<IconPhoto size={rem(20)} color={getColor('red')} />}>
                      Recent photos
                  </Accordion.Control>
                  <Accordion.Panel>Content</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="print">
                  <Accordion.Control icon={<IconPrinter size={rem(20)} color={getColor('blue')} />}>
                      Print photos
                  </Accordion.Control>
                  <Accordion.Panel>Content</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="camera">
                  <Accordion.Control icon={<IconCameraSelfie size={rem(20)} color={getColor('teal')} />}>
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
  return (
    <AppShell navbar={<SettingNavbar />} layout="alt">
      App content
    </AppShell>
  );
};
