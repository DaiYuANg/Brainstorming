import { AppShell, Box } from '@mantine/core';
import { LayoutNavbar } from './LayoutNavbar.tsx';
import { Workspace } from './Workspace.tsx';

export const MainLayout = () => {
  return (
    <>
      <Box>
        <AppShell navbar={LayoutNavbar()}>
          <Workspace />
        </AppShell>
      </Box>
    </>
  );
};
