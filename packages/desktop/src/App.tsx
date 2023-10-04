import { MantineProvider } from '@mantine/core';
import { NotificationArg } from '../shared';
import { ContextMenu } from './components';
import { Main } from './layout';
import { theme } from './theme.ts';

function App() {
  const ready: NotificationArg = {
    title: 'test',
    body: 'ready',
  };
  console.log(ready);
  window.electronAPI.setTitle('test');
  return (
    <>
      <MantineProvider theme={theme} defaultColorScheme="auto">
        <ContextMenu />
        <Main />
      </MantineProvider>
    </>
  );
}

export default App;
