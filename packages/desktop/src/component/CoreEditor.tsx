import { Box } from '@mantine/core';
import { useState } from 'react';
import { createEditor } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';

type CoreEditorProps = {
  id?: string;
};

const CoreEditor = ({ id }: CoreEditorProps) => {
  const [editor] = useState(() => withReact(createEditor()));
  console.log(editor);
  const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: `A line of text in a paragraph.${id}` }],
    },
  ];

  return (
    <Box>
      <Slate editor={editor} initialValue={initialValue}>
        <Editable placeholder='Write some markdown...' autoFocus />
      </Slate>
    </Box>
  );
};

export { CoreEditor };
