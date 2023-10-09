import '@fontsource/jetbrains-mono/400-italic.css';
import '@fontsource/jetbrains-mono/400.css'; // Specify weight
import { createTheme, rem } from '@mantine/core';
const theme = createTheme({
  fontFamily: 'jetbrains mono',
  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  headings: {
    fontFamily: 'Roboto, sans-serif',
    sizes: {
      h1: { fontSize: rem(36) },
    },
  },
});

export { theme };
