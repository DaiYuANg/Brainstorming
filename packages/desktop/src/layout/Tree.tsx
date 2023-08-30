import { Button } from '@mantine/core';
import TreeView, { flattenTree } from 'react-accessible-treeview';

const folder = {
  name: '',
  children: [
    {
      name: 'src',
      children: [{ name: 'index.js' }, { name: 'styles.css' }],
    },
    {
      name: 'node_modules',
      children: [
        {
          name: 'react-accessible-treeview',
          children: [{ name: 'bundle.js' }],
        },
        { name: 'react', children: [{ name: 'bundle.js' }] },
      ],
    },
    {
      name: '.npmignore',
    },
    {
      name: 'package.json',
    },
    {
      name: 'webpack.config.js',
    },
  ],
};

const data = flattenTree(folder);

export const Tree = () => {
  return (
    <>
      <TreeView
        data={data}
        className="basic"
        aria-label="basic example tree"
        nodeRenderer={({ element, getNodeProps, level, handleSelect }) => (
          <div {...getNodeProps()} style={{ paddingLeft: 20 * (level - 1) }}>
            <Button>{element.name}</Button>
          </div>
        )}
      />
    </>
  );
};
