import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { SpotlightProvider } from '@mantine/spotlight';
import { useState } from 'react';
import { MainLayout } from './layout';

function App() {
  // const color
  // const preferredColorScheme = useColorScheme('light',{
  //   getInitialValueInEffect:true
  // });
  // console.log(preferredColorScheme)
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>('dark');
  // const toggleColorScheme = (value?: ColorScheme) =>
  //   setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  // useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={()=>{

        }}
      >
        <MantineProvider
          theme={{colorScheme}}
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
