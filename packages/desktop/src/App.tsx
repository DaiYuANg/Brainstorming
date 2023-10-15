import { MantineProvider } from '@mantine/core';
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

const MainLayout = lazy(() =>
  import('./components/layout/MainLayout.tsx').then(({ MainLayout }) => ({
    default: MainLayout,
  })),
);

function App(): JSX.Element {
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
