import { Box, useMantineColorScheme } from '@mantine/core';
import { Background, Controls, MiniMap, ReactFlow } from '@xyflow/react';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const GraphEditor = () => {
  const { colorScheme } = useMantineColorScheme();
  const colorMode = colorScheme === 'dark' ? 'dark' : 'light';
  return (
    <Box h={500}>
      <ReactFlow
        colorMode={colorMode}
        nodes={initialNodes}
        edges={initialEdges}
      >
        <Controls />
        <MiniMap />
        <Background gap={12} size={1} />
      </ReactFlow>
    </Box>
  );
};

export { GraphEditor };
