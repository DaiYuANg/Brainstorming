import { Divider } from '@mantine/core';

interface DraggableSizeBarProp {}

const DraggableSizeBar = () => {
  return (
    <>
      <Divider
        size="md"
        orientation="vertical"
        style={{
          position: 'absolute',
          right: 0,
          top: 10,
          height: '100vh',
          cursor: 'col-resize',
        }}
      />
    </>
  );
};

export { DraggableSizeBar };

export type { DraggableSizeBarProp };
