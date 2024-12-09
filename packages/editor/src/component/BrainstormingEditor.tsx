import { Box } from '@mantine/core';
import { BrainstormingEditorProps } from './EditorProps.ts';
import { GraphEditor } from './GraphEditor.tsx';
import { TextEditor } from './TextEditor.tsx';
import { Toolbar } from './Toolbar.tsx';

const BrainstormingEditor = ({ type }: BrainstormingEditorProps) => {
  return (
    <Box pos='relative'>
      <Toolbar />
      {type === 'text' ? <TextEditor /> : <GraphEditor />}
    </Box>
  );
};

export default BrainstormingEditor;
