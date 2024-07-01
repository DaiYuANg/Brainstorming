import { TreeNodeData } from '@mantine/core';
import { Meta, type StoryObj } from '@storybook/react';
import { TreeView } from './TreeView';

// 定义一个示例数据
const data: TreeNodeData[] = [
  {
    label: 'src',
    value: 'src',
    children: [
      {
        label: 'components',
        value: 'src/components',
        children: [
          { label: 'Accordion.tsx', value: 'src/components/Accordion.tsx' },
          { label: 'Tree.tsx', value: 'src/components/Tree.tsx' },
          { label: 'Button.tsx', value: 'src/components/Button.tsx' },
        ],
      },
    ],
  },
  {
    label: 'node_modules',
    value: 'node_modules',
    children: [
      {
        label: 'react',
        value: 'node_modules/react',
        children: [
          { label: 'index.d.ts', value: 'node_modules/react/index.d.ts' },
          { label: 'package.json', value: 'node_modules/react/package.json' },
        ],
      },
      {
        label: '@mantine',
        value: 'node_modules/@mantine',
        children: [
          {
            label: 'core',
            value: 'node_modules/@mantine/core',
            children: [
              {
                label: 'index.d.ts',
                value: 'node_modules/@mantine/core/index.d.ts',
              },
              {
                label: 'package.json',
                value: 'node_modules/@mantine/core/package.json',
              },
            ],
          },
          {
            label: 'hooks',
            value: 'node_modules/@mantine/hooks',
            children: [
              {
                label: 'index.d.ts',
                value: 'node_modules/@mantine/core/index.d.ts',
              },
              {
                label: 'package.json',
                value: 'node_modules/@mantine/core/package.json',
              },
            ],
          },
          {
            label: 'form',
            value: 'node_modules/@mantine/form',
            children: [
              {
                label: 'index.d.ts',
                value: 'node_modules/@mantine/core/index.d.ts',
              },
              {
                label: 'package.json',
                value: 'node_modules/@mantine/core/package.json',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'package.json',
    value: 'package.json',
  },
  {
    label: 'tsconfig.json',
    value: 'tsconfig.json',
  },
];

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
    data: data,
  },
};
