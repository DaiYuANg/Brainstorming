import { Box } from '@mantine/core';
import { useEditor } from '../hook/useEditor.ts';
import { GraphEditor } from './GraphEditor.tsx';
import { TextEditor } from './TextEditor.tsx';

const EditorLayout = () => {
  const { type } = useEditor();
  return (
    <Box pos='relative'>
      {/*<Toolbar />*/}
      {type === 'text' ? <TextEditor /> : <GraphEditor />}
    </Box>
  );
};

export { EditorLayout };
