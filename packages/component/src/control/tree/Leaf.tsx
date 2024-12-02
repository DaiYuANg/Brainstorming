import { Group, RenderTreeNodePayload } from '@mantine/core';

const Leaf = ({ node, elementProps }: RenderTreeNodePayload) => (
  <Group gap={5} {...elementProps}>
    {/*<FileIcon name={node.value} isFolder={hasChildren} expanded={expanded} />*/}
    <span>{node.label}</span>
  </Group>
);

export { Leaf };
