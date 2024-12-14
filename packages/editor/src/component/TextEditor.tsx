import { Container } from '@mantine/core';
import { useCallback, useMemo } from 'react';
import { Descendant } from 'slate';
import { Editable, ReactEditor, RenderElementProps, Slate } from 'slate-react';
import { useMarkdownCompatible } from '../hook/useMarkdownCompatible.ts';
import { SlateBuilder } from '../slate/SlateBuilder.ts';
import { RenderElement } from './RenderElement.tsx';
import { SelfPaintedCursor } from './SelfPaintedCursor.tsx';

const initialValue = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable plain text, just like a <textarea>!' },
    ],
  },
];
const TextEditor = () => {
  const renderElement = useCallback(
    (props: RenderElementProps) => <RenderElement {...props} />,
    [],
  );
  const editor = useMemo(
    () =>
      SlateBuilder.create()
        .withHistoryPlugin()
        .withMarkdownPlugin()
        .withReactPlugin()
        .build() as ReactEditor,
    [],
  );
  const markdownCompatible = useMarkdownCompatible(editor);

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
        <Editable
          style={{
            caretColor: 'transparent',
            position: 'relative',
          }}
          renderElement={renderElement}
          onDOMBeforeInput={markdownCompatible}
          placeholder='Write some markdown...'
          spellCheck
          autoFocus
        />
        <SelfPaintedCursor />
      </Slate>
    </Container>
  );
};

export { TextEditor };
