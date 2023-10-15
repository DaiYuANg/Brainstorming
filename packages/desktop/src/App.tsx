import { MantineProvider } from '@mantine/core';
import { MainLayout } from './components/layout';

import { lazy } from 'react';
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
