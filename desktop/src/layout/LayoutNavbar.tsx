import { Button, Group, Navbar, Stack, Text } from '@mantine/core';
import { CreateRequestMenu } from './CreateRequestMenu.tsx';

export const LayoutNavbar = () => {
  return (
    <>
      <Navbar width={{ base: 300 }} height={500}>
        <Group>
          <Text>
            <Stack>
              <Button variant="outline">1</Button>
              <Button variant="outline">2</Button>
            </Stack>
          </Text>
          <Text>
            <Group>
              <CreateRequestMenu />
            </Group>
          </Text>
        </Group>
      </Navbar>
    </>
  );
};
