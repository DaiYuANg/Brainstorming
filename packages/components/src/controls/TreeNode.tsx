import { List } from '@mantine/core';
import React from 'react';

const TreeNode = (component: string) => {
  console.log(component);
  function onSelect(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    e.stopPropagation();
    // setSelected(component);
  }
  return (
    <>
      <List.Item onClick={onSelect} w='100%'>
        {/*<div*/}
        {/*  style={{*/}
        {/*    display: 'flex',*/}
        {/*    marginLeft: '-100%',*/}
        {/*    marginRight: '100%',*/}
        {/*    paddingLeft: '100%',*/}
        {/*    paddingRight: '100%',*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <span style={{ marginLeft: '-0.5rem', marginRight: '0.5rem' }}>*/}
        {/*    {component.children.length ? (*/}
        {/*      <IconBox size="1rem" />*/}
        {/*    ) : (*/}
        {/*      <IconComponents size="1rem" />*/}
        {/*    )}*/}
        {/*  </span>*/}
        {/*  {component.name}*/}
        {/*</div>*/}
        {/*<List*/}
        {/*  listStyleType="none"*/}
        {/*  withPadding*/}
        {/*  style={{ borderLeft: '2px solid #8888', width: '100%' }}*/}
        {/*>*/}
        {/*  {component.children?.map((child, i) => (*/}
        {/*    <TreeNode*/}
        {/*      component={child}*/}
        {/*      key={i}*/}
        {/*      selected={selected}*/}
        {/*      setSelected={setSelected}*/}
        {/*      visibility={visibility}*/}
        {/*    />*/}
        {/*  ))}*/}
        {/*</List>*/}
      </List.Item>
    </>
  );
};

export { TreeNode };
