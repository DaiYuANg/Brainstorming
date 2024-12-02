import { Layout } from '@brainstorming/components';
import { Box } from '@mantine/core';

function App() {
  return (
    <>
      <Layout
        navbar={
          <>
            <Box>test</Box>
          </>
        }
        content={<Box>test</Box>}
      />
    </>
  );
}

export default App;
