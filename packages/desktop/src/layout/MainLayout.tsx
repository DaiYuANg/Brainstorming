import { AppShell, Box } from '@mantine/core';
import { LayoutHeader } from './LayoutHeader.tsx';
import { LayoutNavbarLayout } from './LayoutNavbarLayout.tsx';
import { Workspace } from './Workspace.tsx';

export const MainLayout = () => {
  return (
    <>
      <Box>
        <AppShell
          fixed
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
          padding={0}
          navbar={<LayoutNavbarLayout />}
          header={<LayoutHeader />}
        >
          <Workspace />
        </AppShell>
      </Box>
    </>
  );
};
