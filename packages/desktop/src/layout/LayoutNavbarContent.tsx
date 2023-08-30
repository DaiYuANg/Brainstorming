import { Divider } from '@mantine/core';
import { ToolBox } from './ToolBox.tsx';
import { Tree } from './Tree.tsx';

export const LayoutNavbarContent = () => {
  return (
    <>
      <ToolBox />
      <Divider mt={3} p={0} />
      <Tree />
    </>
  );
};
