import {
    ColorSchemeProvider, createEmotionCache,
    MantineProvider,
} from '@mantine/core';
import {Notifications} from '@mantine/notifications';
import {SpotlightProvider} from '@mantine/spotlight';
import {MainLayout} from './layout';
import {useColorScheme, useHotkeys} from "@mantine/hooks";
import {useRef} from "react";

function App() {
    console.log(123)
    // const color = useRef(useColorScheme('light'))
    // const color
    // const preferredColorScheme = useColorScheme();
    // const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    //     key: 'mantine-color-scheme',
    //     defaultValue: preferredColorScheme,
    //     getInitialValueInEffect: true,
    // });
    // console.log(preferredColorScheme)
    // const toggleColorScheme = (value?: ColorScheme) =>
    //     setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    // console.log(color)
    useHotkeys([['mod+J', () => toggleColorScheme()]]);
    const myCache = createEmotionCache({key: 'mantine'});
    return (
        // <ColorSchemeProvider
        // colorScheme={colorScheme}
        // toggleColorScheme={toggleColorScheme}
        // >
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            emotionCache={myCache}
        >
            <SpotlightProvider
                shortcut={['mod + P', 'mod + K', '/']}
                actions={[]}
            >
                <Notifications/>
                <MainLayout/>
            </SpotlightProvider>
        </MantineProvider>
        // </ColorSchemeProvider>
    );
}

export default App;
