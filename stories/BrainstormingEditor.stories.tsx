import { BrainstormingEditor } from '@brainstorming/editor';
import type { Meta, StoryObj } from '@storybook/react';

// 1. 定义组件的 Meta 配置
const meta = {
  title: 'Example/BrainstormingEditor', // 在 Storybook 中的展示名称
  component: BrainstormingEditor,
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: ['text', 'graph'], // 提供 type 参数的选择
      },
    },
  },
} satisfies Meta<typeof BrainstormingEditor>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    id: '1',
    type: 'text',
  },
};
