import { MantineProvider } from '@mantine/core';
import { ContextMenu } from './components';
import { MainLayout } from './components/layout';

import { ApplicationSpotlight } from './components/ApplicationSpotlight.tsx';
import { theme } from './theme.ts';

function App() {
  window.electronAPI.setTitle('test');
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
