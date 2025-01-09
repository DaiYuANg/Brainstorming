import { Container } from '@mantine/core';
import { useMemo } from 'react';
import { Descendant } from 'slate';
import { ReactEditor, Slate } from 'slate-react';
import { useBrainstormingEditor } from '../hook/useBrainstormingEditor.ts';
import { SlateBuilder } from '../slate/SlateBuilder.ts';
import { ContentEdit } from './ContentEdit.tsx';
import { BNode } from './EditorProps.ts';

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'Type "/" to open the command menu.' }],
  },
];
const TextEditor = () => {
  const { onChange } = useBrainstormingEditor();

  const editor = useMemo(
    () =>
      SlateBuilder.create()
        .withHistoryPlugin()
        .withMarkdownPlugin()
        .withReactPlugin()
        .build() as ReactEditor,
    [],
  );

  const onValueChange = (values: Descendant[]) => {
    console.log('editor values', values);
    onChange?.(values);
    values.forEach((value) => {
      const a = value as BNode;
      console.log(a);
    });
  };

  return (
    <Container fluid>
      <Slate
        editor={editor}
        onValueChange={onValueChange}
        initialValue={initialValue}
      >
        <ContentEdit />
      </Slate>
    </Container>
  );
};

export { TextEditor };
