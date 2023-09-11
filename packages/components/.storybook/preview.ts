import type { Preview } from '@storybook/react';

import { withMantineThemes } from 'storybook-addon-mantine';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

// These props are passed to the MantineProvider used by all stories.
const mantineProviderProps = {
  withCSSVariables: false,
  withGlobalStyles: true,
  withNormalizeCSS: false,
};
export const decorators = [
  withMantineThemes({
    themes: [
      {
        id: 'Dark',
        colorScheme: 'dark',
      },
      {
        id: 'light-green',
        name: 'Light Green Theme',
      },
    ],
    mantineProviderProps: {
      withCSSVariables: true,
      withGlobalStyles: true,
      withNormalizeCSS: true,
    },
  }),
];
export default preview;
