import { MainLayout } from './layout';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { useColorScheme, useHotkeys, useLocalStorage } from '@mantine/hooks';
import { useSystem } from './hooks/useSystem.ts';
import { initI18nInstance } from './modules';
import { Notifications } from '@mantine/notifications';
import { SpotlightProvider } from '@mantine/spotlight';

function App() {
  const preferredColorScheme = useColorScheme();
  initI18nInstance().then((r) => {
    console.log(r);
  });
  useSystem();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'rockie-desktop-color-scheme',
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <SpotlightProvider
            shortcut={['mod + P', 'mod + K', '/']}
            actions={[]}
          >
            <Notifications />
            <MainLayout />
          </SpotlightProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default App;
