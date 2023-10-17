import { MantineProvider } from '@mantine/core';
import { lazy } from 'react';
import { initialize } from './modules';
import { theme } from './theme.ts';

const ApplicationSpotlight = lazy(() =>
  import('./components/ApplicationSpotlight.tsx').then(
    ({ ApplicationSpotlight }) => ({ default: ApplicationSpotlight }),
  ),
);

const ContextMenu = lazy(() =>
  import('./components/ContextMenu.tsx').then(({ ContextMenu }) => ({
    default: ContextMenu,
  })),
);

const MainLayout = lazy(() =>
  import('./components/layout/MainLayout.tsx').then(({ MainLayout }) => ({
    default: MainLayout,
  })),
);
initialize().then((r) => {
  console.log(r);
});
function App(): JSX.Element {
  return (
    <>
      <MantineProvider theme={theme} defaultColorScheme="auto">
        <ContextMenu />
        <MainLayout data-tauri-drag-region />
        <ApplicationSpotlight />
      </MantineProvider>
    </>
  );
}

export default App;
