import { MainLayout } from './layout/MainLayout.tsx';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { useColorScheme, useHotkeys, useLocalStorage } from '@mantine/hooks';
import { useSystem } from './hooks/useSystem.ts';

function App() {
  const preferredColorScheme = useColorScheme();
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
          <MainLayout />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default App;
