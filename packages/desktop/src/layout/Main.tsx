import { Box } from '@mantine/core';
import { MainLayout } from '@rockie/component';

export const Main = () => {
  return (
    <>
      <Box>
        <MainLayout />
        {/*<AppShell*/}
        {/*  fixed*/}
        {/*  styles={(theme) => ({*/}
        {/*    main: {*/}
        {/*      backgroundColor:*/}
        {/*        theme.colorScheme === 'dark'*/}
        {/*          ? theme.colors.dark[8]*/}
        {/*          : theme.colors.gray[0],*/}
        {/*    },*/}
        {/*  })}*/}
        {/*  padding={0}*/}
        {/*  navbar={<LayoutNavbarLayout />}*/}
        {/*  header={<LayoutHeader />}*/}
        {/*>*/}
        {/*  <Workspace />*/}
        {/*</AppShell>*/}
      </Box>
    </>
  );
};
