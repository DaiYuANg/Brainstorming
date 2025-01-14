import { MantineProvider, useMantineColorScheme } from '@mantine/core';
import '@mantine/core/styles.css';
import { addons } from '@storybook/preview-api';
import type { Preview } from '@storybook/react';
import { ReactNode, useEffect } from 'react';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import { theme } from './theme.ts';

const channel = addons.getChannel();
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

const ColorSchemeWrapper = ({ children }: { children: ReactNode }) => {
  const { setColorScheme } = useMantineColorScheme();
  const handleColorScheme = (value: boolean) =>
    setColorScheme(value ? 'dark' : 'light');

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, handleColorScheme);
    return () => channel.off(DARK_MODE_EVENT_NAME, handleColorScheme);
  }, [channel]);

  return <>{children}</>;
};

export const decorators = [
  (renderStory: any) => (
    <ColorSchemeWrapper>{renderStory()}</ColorSchemeWrapper>
  ),
  (renderStory: any) => (
    <MantineProvider theme={theme}>{renderStory()}</MantineProvider>
  ),
];
export default preview;
