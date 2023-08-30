import { Divider, Flex, Space } from '@mantine/core';
import { CreateRequestMenu } from './CreateRequestMenu.tsx';

export const ToolBox = () => {
  return (
    <>
      <Flex justify={'flex-end'} align={'center'}>
        <Space />
        <CreateRequestMenu />
        <Divider p={0} />
      </Flex>
    </>
  );
};
