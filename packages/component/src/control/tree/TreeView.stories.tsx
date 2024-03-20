import { Meta, type StoryObj } from '@storybook/react';
import { Tree, TreeView } from './TreeView';

// 定义一个示例数据
const treeData: Tree = {
  key: '1',
  label: 'Root',
  children: [
    {
      key: '2',
      label: 'Node 1',
      children: [
        {
          key: '3',
          label: 'Node 1.1',
          children: [],
        },
        {
          key: '4',
          label: 'Node 1.2',
          children: [],
        },
      ],
    },
    {
      key: '5',
      label: 'Node 2',
      children: [],
    },
  ],
};

// 创建一个模板组件来渲染 TreeView，并传入示例数据
const meta = {
  title: 'Control/TreeView',
  component: TreeView,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof TreeView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const treeView: Story = {
  args: {
    data: treeData,
  },
};
