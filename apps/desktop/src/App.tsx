import { useMantineColorScheme } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { ApplicationSpotlight, ContextMenu, MainLayout } from './components';

function App(): JSX.Element {
  const color = useMantineColorScheme();
  useHotkeys([
    ['mod+T', () => color.toggleColorScheme()],
    ['mod+F', () => console.log('Trigger search')],
    ['alt+mod+shift+X', () => console.log('Rick roll')],
  ]);

  return (
    <>
      <ContextMenu />
      <MainLayout data-tauri-drag-region />
      <ApplicationSpotlight />
    </>
  );
}

export default App;
