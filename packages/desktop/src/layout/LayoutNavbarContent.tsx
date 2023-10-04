import { AppShell, Grid, Skeleton, Stack } from '@mantine/core';
import { OpenSettings } from './OpenSettings.tsx';

export const LayoutNavbarContent = () => {
  return (
    <>
      <AppShell.Navbar p="xs">
        <Grid p={0}>
          <Grid.Col span={2}>
            <Stack gap={'xs'} align={'center'} style={{}}>
              <OpenSettings />
            </Stack>
          </Grid.Col>
          <Grid.Col span={10}>
            Navbar
            {Array(15)
              .fill(0)
              .map((_, index) => (
                <Skeleton key={index} h={28} mt="sm" animate={false} />
              ))}
          </Grid.Col>
        </Grid>
      </AppShell.Navbar>
    </>
  );
};
