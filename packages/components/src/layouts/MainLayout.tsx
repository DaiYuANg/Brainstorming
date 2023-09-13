import { AppShell, Header, Navbar } from '@mantine/core';

const MainLayout = () => {
  return (
    <>
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 300 }} height={500} p="xs">
            {/* Navbar content */ 123}
          </Navbar>
        }
        header={
          <Header height={60} p="xs">
            {/* Header content */ 312}
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <div>dasda</div>
      </AppShell>
    </>
  );
};

export { MainLayout };
