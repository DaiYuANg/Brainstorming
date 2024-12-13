import type { Meta, StoryObj } from '@storybook/react';

import { Layout } from '@brainstorming/components';

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
  args: {
    navbar: <>navbar</>,
    content: <>content</>,
  },
};
