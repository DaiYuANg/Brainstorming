import { useCallback, useMemo } from 'react';
import { Editor, Element as SlateElement, Node as SlateNode } from 'slate';
import { Editable, ReactEditor, RenderElementProps, Slate } from 'slate-react';
import { MarkdownElement } from '../slate/MarkdownElement.tsx';
import { SHORTCUTS } from '../slate/Shortcuts.ts';
import { SlateBuilder } from '../slate/SlateBuilder.ts';
import { BrainstormingEditorProps } from './EditorProps.ts';
import { HoverToolbar } from './HoverToolbar.tsx';
const initialValue = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable plain text, just like a <textarea>!' },
    ],
  },
];
const BrainstormingEditor = (props: BrainstormingEditorProps) => {
  console.log(props.id);
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
  const handleDOMBeforeInput = useCallback(() => {
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
          match: (n) => SlateElement.isElement(n) && Editor.isBlock(editor, n),
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
  }, [editor]);

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <HoverToolbar />
      <Editable
        renderElement={renderElement}
        onDOMBeforeInput={handleDOMBeforeInput}
        placeholder='Write some markdown...'
        spellCheck
      />
    </Slate>
  );
};

export default BrainstormingEditor;
