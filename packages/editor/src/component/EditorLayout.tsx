import { Box } from '@mantine/core';
import { useBrainstormingEditor } from '../hook/useBrainstormingEditor.ts';
import { GraphEditor } from './GraphEditor.tsx';
import { TextEditor } from './TextEditor.tsx';

const EditorLayout = () => {
  const { type } = useBrainstormingEditor();
  console.log('internal', type);
  return (
    <Box pos='relative'>
      {type === 'text' ? <TextEditor /> : <GraphEditor />}
    </Box>
  );
};

export { EditorLayout };
