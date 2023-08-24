import { ActionIcon, Divider, Grid, Group, Navbar, Stack } from '@mantine/core';
import { CreateRequestMenu } from './CreateRequestMenu.tsx';
import { IconRocket, IconSettings } from '@tabler/icons-react';
import { OpenSettings } from './OpenSettings.tsx';

export const LayoutNavbar = () => {
  return (
    <>
      <Navbar width={{ base: 300 }}>
        <Grid>
          <Grid.Col
            span={2}
            p={'sm'}
            sx={{
              height: '100vh',
            }}
          >
            <Stack>
              <ActionIcon>
                <IconRocket />
              </ActionIcon>
              <ActionIcon>
                <IconRocket />
              </ActionIcon>
              <ActionIcon>
                <IconRocket />
              </ActionIcon>
              <ActionIcon>
                <IconSettings />
              </ActionIcon>
            </Stack>
            <Stack
              sx={{
                position: 'absolute',
                bottom: 0,
              }}
            >
              <OpenSettings />
            </Stack>
          </Grid.Col>
          <Grid.Col span={9}>
            <Group position={'right'} p={'sm'} align={'center'}>
              <CreateRequestMenu />
            </Group>
            <Divider my="sm" p={0} />
          </Grid.Col>
        </Grid>
      </Navbar>
    </>
  );
};
