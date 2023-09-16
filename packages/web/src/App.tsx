import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  createEmotionCache,
} from '@mantine/core';
import { useColorScheme, useHotkeys, useLocalStorage } from '@mantine/hooks';
import { useEffect } from 'react';
function App() {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  const myCache = createEmotionCache({ key: 'mantine' });

  useEffect(() => {
    setColorScheme(preferredColorScheme);
  }, [preferredColorScheme, setColorScheme]);
  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          emotionCache={myCache}
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          web\
          <RButton></RButton>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default App;
