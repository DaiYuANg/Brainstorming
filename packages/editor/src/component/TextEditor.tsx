import { useCallback, useMemo } from 'react';
import { Editable, ReactEditor, RenderElementProps, Slate } from 'slate-react';
import { useMarkdownCompatible } from '../hook/useMarkdownCompatible.ts';
import { MarkdownElement } from '../slate/MarkdownElement.tsx';
import { SlateBuilder } from '../slate/SlateBuilder.ts';
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
    (props: RenderElementProps) => <MarkdownElement {...props} />,
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
  return (
    <>
      <Slate editor={editor} initialValue={initialValue}>
        <Editable
          style={{
            caretColor: 'transparent',
          }}
          renderElement={renderElement}
          onDOMBeforeInput={markdownCompatible}
          placeholder='Write some markdown...'
          spellCheck
        />
        <SelfPaintedCursor />
      </Slate>
    </>
  );
};

export { TextEditor };
