import { Excalidraw } from '@excalidraw/excalidraw';
import { Box, useMantineColorScheme } from '@mantine/core';

const GraphEditor = () => {
  const { colorScheme } = useMantineColorScheme();

  const excalidrawScheme = colorScheme === 'light' ? 'light' : 'dark';

  return (
    <Box h={500}>
      <Excalidraw
        zenModeEnabled={true}
        gridModeEnabled={true}
        theme={excalidrawScheme}
      />
    </Box>
  );
};

export { GraphEditor };
