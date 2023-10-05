import { AppShell, Box, Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { RouterProvider } from 'react-router-dom';
import { router } from '../modules';
import { LayoutNavbarContent } from './LayoutNavbarContent.tsx';
import { WorkspaceTabs } from './tab';

export const MainLayout = () => {
  const [opened, { toggle }] = useDisclosure();
  // const toggleNavbar = () => {
  //   console.log(opened);
  //   toggle();
  // };
  return (
    <>
      <Box>
        <AppShell
          header={{ height: 40, offset: true }}
          navbar={{
            width: 300,
            breakpoint: 'md',

            collapsed: { mobile: !opened },
          }}
          padding="xs"
        >
          <AppShell.Header>
            <Group h="100%" pl={'xl'} justify={'flex-end'} grow px="md">
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
              />
              123
            </Group>
          </AppShell.Header>
          <LayoutNavbarContent />
          <AppShell.Main pt={'sm'}>
            <WorkspaceTabs />
            <RouterProvider router={router}></RouterProvider>
          </AppShell.Main>
        </AppShell>
      </Box>
    </>
  );
};
