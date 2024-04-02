import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';

import { Layout } from './Layout.tsx';

const meta = {
  title: 'Example/Layout',
  component: Layout,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const MainContent: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', {
      name: /Log in/i,
    });
    await userEvent.click(loginButton);
  },
};
