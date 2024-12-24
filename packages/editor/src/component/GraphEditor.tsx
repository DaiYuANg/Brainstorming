import { Box, useMantineColorScheme } from '@mantine/core';

const GraphEditor = () => {
  const { colorScheme } = useMantineColorScheme();
  console.log(colorScheme);
  return (
    <Box h={500}>
      {/*<Excalidraw*/}
      {/*  zenModeEnabled={true}*/}
      {/*  gridModeEnabled={true}*/}
      {/*  theme={excalidrawScheme}*/}
      {/*/>*/}
    </Box>
  );
};

export { GraphEditor };
