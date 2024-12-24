import { Container } from '@mantine/core';
import { useMemo } from 'react';
import { Descendant } from 'slate';
import { ReactEditor, Slate } from 'slate-react';
import { SlateBuilder } from '../slate/SlateBuilder.ts';
import { ContentEdit } from './ContentEdit.tsx';

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'Type "/" to open the command menu.' }],
  },
];
const TextEditor = () => {
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
    console.log(values);
  };
  return (
    <Container fluid>
      <Slate
        editor={editor}
        onValueChange={onValueChange}
        initialValue={initialValue}
      >
        <ContentEdit />
        {/*<SelfPaintedCursor />*/}
      </Slate>
    </Container>
  );
};

export { TextEditor };
