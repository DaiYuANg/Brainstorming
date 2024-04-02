import { Meta, type StoryObj } from '@storybook/react';
import { IconAt } from '@tabler/icons-react';
import { IconicItem } from './IconicItem.tsx';

const meta = {
  title: 'Display/IconicItem',
  component: IconicItem,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof IconicItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const show: Story = {
  args: {
    label: 'test',
    icon: IconAt,
  },
};
