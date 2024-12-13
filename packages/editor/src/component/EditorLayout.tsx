import { Box } from '@mantine/core';
import { useEditor } from '../hook/useEditor.ts';
import { GraphEditor } from './GraphEditor.tsx';
import { TextEditor } from './TextEditor.tsx';
import { Toolbar } from './Toolbar.tsx';

const EditorLayout = () => {
  const { type } = useEditor();
  return (
    <Box pos='relative'>
      <Toolbar />
      {type === 'text' ? <TextEditor /> : <GraphEditor />}
    </Box>
  );
};

export { EditorLayout };
