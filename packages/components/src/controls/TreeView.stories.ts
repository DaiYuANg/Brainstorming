import { Meta, StoryObj } from '@storybook/react';
import { TreeView } from './TreeView.tsx';

const meta = {
  title: 'Control/TreeView',
  component: TreeView,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof TreeView>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    color: 'pink',
  },
};
