import { Box } from '@mantine/core';
import { useCallback, useMemo } from 'react';
import { Editor, Element as SlateElement, Node as SlateNode } from 'slate';
import { Editable, ReactEditor, RenderElementProps, Slate } from 'slate-react';
import { MarkdownElement, SHORTCUTS } from '../slate/MarkdownElement.tsx';
import { SlateBuilder } from '../slate/SlateBuilder.ts';

type CoreEditorProps = {
  id?: string;
};

const CoreEditor = ({ id }: CoreEditorProps) => {
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
  const handleDOMBeforeInput = useCallback(
    (_e: InputEvent) => {
      queueMicrotask(() => {
        const pendingDiffs = ReactEditor.androidPendingDiffs(editor);

        const scheduleFlush = pendingDiffs?.some(({ diff, path }) => {
          if (!diff.text.endsWith(' ')) {
            return false;
          }

          const { text } = SlateNode.leaf(editor, path);
          const beforeText = text.slice(0, diff.start) + diff.text.slice(0, -1);
          if (!(beforeText in SHORTCUTS)) {
            return;
          }

          const blockEntry = Editor.above(editor, {
            at: path,
            match: (n) =>
              SlateElement.isElement(n) && Editor.isBlock(editor, n),
          });
          if (!blockEntry) {
            return false;
          }

          const [, blockPath] = blockEntry;
          return Editor.isStart(editor, Editor.start(editor, path), blockPath);
        });

        if (scheduleFlush) {
          ReactEditor.androidScheduleFlush(editor);
        }
      });
    },
    [editor],
  );
  const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: `A line of text in a paragraph` }],
    },
  ];

  return (
    <Box key={id}>
      <Slate editor={editor} initialValue={initialValue}>
        <Editable
          renderElement={renderElement}
          onDOMBeforeInput={handleDOMBeforeInput}
          placeholder='Write some markdown...'
          spellCheck
        />
      </Slate>
    </Box>
  );
};

export { CoreEditor };
