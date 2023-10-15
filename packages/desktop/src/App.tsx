import { MantineProvider } from '@mantine/core';
import { MainLayout } from './components/layout';

import { ContextMenu } from './components';
import { ApplicationSpotlight } from './components/ApplicationSpotlight.tsx';
import { theme } from './theme.ts';

function App() {
  return (
    <>
      <MantineProvider theme={theme} defaultColorScheme="auto">
        <ContextMenu />
        <MainLayout />
        <ApplicationSpotlight />
      </MantineProvider>
    </>
  );
}

export default App;
