import { Tree, TreeNodeData } from '@mantine/core';
import { FC } from 'react';
import { Leaf } from './Leaf';
import classes from './treeview.module.css';

type TreeViewProps = {
  data: Array<TreeNodeData>;
};

const TreeView: FC<TreeViewProps> = (props: TreeViewProps) => {
  console.log(props);
  return (
    <Tree
      classNames={{
        root: classes.root,
        label: classes.label,
        subtree: classes.item,
      }}
      selectOnClick
      clearSelectionOnOutsideClick
      data={props.data}
      renderNode={(payload) => <Leaf {...payload} />}
    />
  );
};

export { TreeView };
export type { Tree, TreeViewProps };
