import {
  AppShell,
  AppShellProps,
  Burger,
  Group,
  Skeleton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

interface MainLayoutProp extends AppShellProps {}

const MainLayout = (prop?: MainLayoutProp) => {
  console.log(prop);
  const [opened, { toggle }] = useDisclosure();
  return (
    <>
      const [opened, {toggle}] = useDisclosure(); return (
      <AppShell
        header={{
          height: 30,
        }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
        padding='md'
      >
        <AppShell.Header>
          <Group h='100%' px='md'>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom='sm'
              size='sm'
            />
            123
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p='md'>
          Navbar
          {Array(15)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} h={28} mt='sm' animate={false} />
            ))}
        </AppShell.Navbar>
        <AppShell.Main>123 Main</AppShell.Main>
      </AppShell>
    </>
  );
};

export { MainLayout };
export type { MainLayoutProp };
