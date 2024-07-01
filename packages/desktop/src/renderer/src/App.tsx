import { AppShell, Skeleton, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ReactElement } from 'react';
import Content from './components/Content';

const App = (): ReactElement => {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping');
  ipcHandle();
  const [opened, { toggle }] = useDisclosure();
  return (
    <>
      <AppShell
        header={{ height: 40 }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
        padding='md'
      >
        <AppShell.Header
          style={{
            paddingLeft: 70,
            paddingTop: 5,
          }}
        >
          <UnstyledButton onClick={toggle}>Title</UnstyledButton>
        </AppShell.Header>
        <AppShell.Navbar p='md'>
          Navbar
          {Array(15)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} h={28} mt='sm' animate={false} />
            ))}
        </AppShell.Navbar>
        <AppShell.Main>
          <Content />
        </AppShell.Main>
      </AppShell>
    </>
  );
};

export default App;
