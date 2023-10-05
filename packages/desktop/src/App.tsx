import { MantineProvider } from '@mantine/core';
import { ContextMenu } from './components';
import { MainLayout } from './layout';
import { theme } from './theme.ts';

function App() {
  window.electronAPI.setTitle('test');
  return (
    <>
      <MantineProvider theme={theme} defaultColorScheme="auto">
        <ContextMenu />
        <MainLayout />
      </MantineProvider>
    </>
  );
}

export default App;
