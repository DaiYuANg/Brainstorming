import { Container, Text } from '@mantine/core';
import '@mantine/dropzone/styles.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  BaseEditor,
  Descendant,
  Editor,
  Node,
  Element as SlateElement,
  Transforms,
  createEditor,
} from 'slate';
import { HistoryEditor, withHistory } from 'slate-history';
import {
  Editable,
  ReactEditor,
  RenderElementProps,
  Slate,
  withReact,
} from 'slate-react';
import classes from './CoreEditor.module.css';
import { Element } from './Element.tsx';
import { SHORTCUTS, withShortcuts } from './WithShortcuts.ts';

interface CoreEditorProps {
  initialValue: Array<Descendant>;
}

const insertCustomCursor = (editor) => {
  const customCursor = { type: 'customCursor', children: [{ text: '|' }] };
  Transforms.insertNodes(editor, customCursor);
};

const CoreEditor = (props: CoreEditorProps) => {
  const editor = useMemo<BaseEditor & ReactEditor & HistoryEditor>(
    () => withShortcuts(withReact(withHistory(createEditor()))),
    [],
  );
  const [opened, setOpened] = useState(false);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const renderElement = useCallback(
    (props: RenderElementProps) => (
      <Element {...props} children={props.children} />
    ),
    [],
  );
  const task = useCallback(() => {
    const pendingDiffs = ReactEditor.androidPendingDiffs(editor);

    const scheduleFlush = pendingDiffs?.some(({ diff, path }) => {
      if (!diff.text.endsWith(' ')) {
        return false;
      }

      const { text } = Node.leaf(editor, path);
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
  }, [editor]);

  const handleDOMBeforeInput = useCallback(() => {
    queueMicrotask(task);
  }, [task]);
  const getCaretCoordinates = useCallback(() => {
    let x = 0,
      y = 0;
    const isSupported = typeof window.getSelection !== 'undefined';
    if (!isSupported) return { x, y };
    const selection = window.getSelection();
    if (selection?.rangeCount !== 0) {
      const range = selection?.getRangeAt(0).cloneRange();
      range?.collapse(true);
      const rect = range?.getClientRects()[0];
      if (rect) {
        x = rect.left;
        y = rect.top;
      }
    }
    return { x, y };
  }, []);
  useEffect(() => {
    // ReactEditor.focus(editor);
    document.addEventListener('resize', onchange);
    return () => {
      // ReactEditor.blur(editor);
      document.removeEventListener('resize', onchange);
    };
  });

  const onchange = useCallback(() => {
    // editor.insertText('123');
    // const xy = getCaretCoordinates();
    // setTop(xy.y);
    // setLeft(xy.x);
  }, []);
  const handleBeforeInput = (event: any) => {
    if (event.inputType === 'insertText') {
      event.preventDefault();
      insertCustomCursor(editor);
      Transforms.insertText(editor, event.data);
    }
  };
  return (
    <>
      <Container>
        <Slate
          editor={editor}
          onChange={onchange}
          initialValue={props.initialValue}
        >
          {ReactEditor.isFocused(editor) && (
            <>
              {/*<Menu opened={opened} width={200} shadow='md'>*/}
              {/*  <Menu.Target>*/}
              {/*    <div*/}
              {/*      className={classes.cursor}*/}
              {/*      style={{*/}
              {/*        left: left,*/}
              {/*        top: top,*/}
              {/*      }}*/}
              {/*    ></div>*/}
              {/*  </Menu.Target>*/}

              {/*  <Menu.Dropdown>*/}
              {/*    <Menu.Item component='a' href='https://mantine.dev'>*/}
              {/*      Mantine website*/}
              {/*    </Menu.Item>*/}
              {/*    <Menu.Item*/}
              {/*      leftSection={*/}
              {/*        <IconExternalLink*/}
              {/*          style={{ width: rem(14), height: rem(14) }}*/}
              {/*        />*/}
              {/*      }*/}
              {/*      component='a'*/}
              {/*      href='https://mantine.dev'*/}
              {/*      target='_blank'*/}
              {/*    >*/}
              {/*      External link*/}
              {/*    </Menu.Item>*/}
              {/*  </Menu.Dropdown>*/}
              {/*</Menu>*/}
            </>
          )}

          <Editable
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                insertCustomCursor(editor);
              }
            }}
            onBeforeInput={handleBeforeInput}
            onInput={(e) => {
              console.log(e);
              editor.insertNode({
                type: 'paragraph',
                children: [
                  {
                    text: '123',
                  },
                ],
              });
            }}
            onFocus={() => {
              console.log(123);
              console.log('focus');
            }}
            autoFocus={true}
            id={'editor'}
            className={classes.root}
            onDOMBeforeInput={handleDOMBeforeInput}
            renderElement={renderElement}
            placeholder='Write some markdown...'
            renderPlaceholder={({ children, attributes }) => (
              <>
                <Text
                  component={'span'}
                  {...attributes}
                  style={{
                    lineHeight: '25px',
                  }}
                >
                  {children}
                </Text>
              </>
            )}
          />
        </Slate>
      </Container>
    </>
  );
};

export { CoreEditor };
export type { CoreEditorProps };