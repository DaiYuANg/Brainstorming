import { Container } from '@mantine/core';
import '@mantine/dropzone/styles.css';
import { useCallback, useMemo } from 'react';
import {
  BaseEditor,
  Descendant,
  Editor,
  Element as SlateElement,
  Node as SlateNode,
  createEditor,
} from 'slate';
import { HistoryEditor, withHistory } from 'slate-history';
import { Editable, ReactEditor, Slate, withReact } from 'slate-react';
import { Element, ElementProps } from './Element.tsx';
import { SHORTCUTS, withShortcuts } from './WithShortcuts.ts';

interface CoreEditorProps {
  initialValue: Array<Descendant>;
}

const CoreEditor = (props: CoreEditorProps) => {
  const editor = useMemo<BaseEditor & ReactEditor & HistoryEditor>(
    () => withShortcuts(withReact(withHistory(createEditor()))),
    [],
  );

  const renderElement = useCallback(
    (props: ElementProps) => <Element {...props} />,
    [],
  );
  const handleDOMBeforeInput = useCallback(
    (e: InputEvent) => {
      console.log(e);
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
  return (
    <>
      <Container>
        <Slate editor={editor} initialValue={props.initialValue}>
          <Editable
            style={{
              minHeight: '200px',
              padding: '5px',
              backgroundColor: 'transparent',
              outline: 'none' /* 移除默认的轮廓样式 */,
              border:
                '1px solid transparent' /* 添加一个透明的边框以保持元素的可编辑状态 */,
            }}
            onDOMBeforeInput={handleDOMBeforeInput}
            renderElement={renderElement}
            placeholder="Write some markdown..."
            spellCheck
            autoFocus
          />
        </Slate>
      </Container>
    </>
  );
};

export { CoreEditor };
export type { CoreEditorProps };
