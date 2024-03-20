import { ActionIcon, Group, Text, UnstyledButton } from '@mantine/core';
import {
  IconLayoutBottombarExpand,
  IconLayoutNavbarExpand,
} from '@tabler/icons-react';
import { FC, useState } from 'react';
import classes from './treeview.module.css';

type Tree = {
  key?: string;
  children?: Array<Tree>;
  label?: string;
};

type TreeViewProps = Partial<{
  data: Tree;
}>;
type TreeNodeProps = Partial<{
  node: Tree;
  expend: boolean;
}>;

const TreeView: FC<TreeViewProps> = ({ data }) => {
  return (
    <div>
      <TreeNode node={data} />
    </div>
  );
};

const TreeNode: FC<TreeNodeProps> = ({ node }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <UnstyledButton
      style={{
        display: 'block',
        width: 'auto',
      }}
    >
      <Group>
        <ActionIcon
          component={'div'}
          className={`node-label ${isExpanded ? classes.expanded : ''}`}
          variant='gradient'
          size='xl'
          onClick={handleToggle}
        >
          {isExpanded ? (
            <IconLayoutBottombarExpand />
          ) : (
            <IconLayoutNavbarExpand />
          )}
        </ActionIcon>
        <Text>{node?.label}</Text>
      </Group>

      {isExpanded && node?.children && (
        <div
          style={{ marginLeft: '20px' }}
          className={`children ${isExpanded ? classes.expanded : classes.collapsed}`}
        >
          {node.children.map((child) => (
            <TreeNode key={child.key} node={child} />
          ))}
        </div>
      )}
    </UnstyledButton>
  );
};
export { TreeView };
export type { Tree, TreeViewProps };
