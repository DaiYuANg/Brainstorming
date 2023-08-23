import { Container, Flex, Text } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import { router } from '../modules';

export const Workspace = () => {
  return (
    <>
      <Flex>
        <Text>123</Text>
        <Text>123</Text>
      </Flex>
      <Container>
        <RouterProvider router={router} />
      </Container>
    </>
  );
};
