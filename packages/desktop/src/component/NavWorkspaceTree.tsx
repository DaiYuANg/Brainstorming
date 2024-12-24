import {
  Group,
  RenderTreeNodePayload,
  Tree,
  TreeNodeData,
} from '@mantine/core';
import { CssIcon, NpmIcon, TypeScriptCircleIcon } from '@mantinex/dev-icons';
import { IconFolder, IconFolderOpen } from '@tabler/icons-react';

interface FileIconProps {
  name: string;
  isFolder: boolean;
  expanded: boolean;
}

const FileIcon = ({ name, isFolder, expanded }: FileIconProps) => {
  if (name.endsWith('package.json')) {
    return <NpmIcon size={14} />;
  }

  if (
    name.endsWith('.ts') ||
    name.endsWith('.tsx') ||
    name.endsWith('tsconfig.json')
  ) {
    return <TypeScriptCircleIcon size={14} />;
  }

  if (name.endsWith('.css')) {
    return <CssIcon size={14} />;
  }

  if (isFolder) {
    return expanded ? (
      <IconFolderOpen
        color='var(--mantine-color-yellow-9)'
        size={14}
        stroke={2.5}
      />
    ) : (
      <IconFolder
        color='var(--mantine-color-yellow-9)'
        size={14}
        stroke={2.5}
      />
    );
  }

  return null;
};

const Leaf = ({
  node,
  expanded,
  hasChildren,
  elementProps,
}: RenderTreeNodePayload) => (
  <Group gap={5} {...elementProps}>
    <FileIcon name={node.value} isFolder={hasChildren} expanded={expanded} />
    <span>{node.label}</span>
  </Group>
);

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
                value: 'node_modules/@mantine/hooks/index.d.ts',
              },
              {
                label: 'package.json',
                value: 'node_modules/@mantine/hooks/package.json',
              },
            ],
          },
          {
            label: 'form',
            value: 'node_modules/@mantine/form',
            children: [
              {
                label: 'index.d.ts',
                value: 'node_modules/@mantine/form/index.d.ts',
              },
              {
                label: 'package.json',
                value: 'node_modules/@mantine/form/package.json',
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
const NavWorkspaceTree = () => {
  return (
    <Tree
      // classNames={classes}
      selectOnClick
      clearSelectionOnOutsideClick
      data={data}
      renderNode={(payload) => <Leaf {...payload} />}
    />
  );
};

export { NavWorkspaceTree };
