import { useMemo } from 'react';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, Slate, withReact } from 'slate-react';

function Editor() {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const initialValue = [
    {
      type: 'paragraph',
      children: [
        { text: 'This is editable plain text, just like a <textarea>!' },
      ],
    },
  ];
  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable placeholder='Enter some plain text...' />
    </Slate>
  );
}

export default Editor;
