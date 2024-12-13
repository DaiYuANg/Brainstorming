import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../packages/component/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../packages/component/src/**/*.mdx',
    '../packages/editor/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../packages/editor/src/**/*.mdx',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack', // Add this line only if you are not using Vite
    'storybook-dark-mode',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};
export default config;
