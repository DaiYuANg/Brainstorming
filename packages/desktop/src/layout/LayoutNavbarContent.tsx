import { AppShell, Button, ScrollArea, Skeleton } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

export const LayoutNavbarContent = () => {
  return (
    <>
      <AppShell.Navbar withBorder={false} p="xs">
        <div>
          <Button
            p={'sm'}
            fullWidth
            justify={'start'}
            leftSection={<IconSearch size={'0.8rem'} />}
            variant={'outline'}
          >
            test
          </Button>
        </div>
        Navbar
        <ScrollArea>
          {Array(150)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} h={28} mt="sm" animate={false} />
            ))}
        </ScrollArea>
      </AppShell.Navbar>
    </>
  );
};
