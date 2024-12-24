import { KeyboardEvent, useCallback, useState } from 'react';
import { BaseEditor, Editor, Element, Transforms } from 'slate';
import {
  Editable,
  ReactEditor,
  RenderElementProps,
  useSlate,
} from 'slate-react';
import { useMarkdownCompatible } from '../hook/useMarkdownCompatible.ts';
import { CommandMenu } from './CommandMenu.tsx';
import { RenderElement } from './RenderElement.tsx';

type CustomElement = { type: string; children: CustomText[] };
type CustomText = { text: string };

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
const ContentEdit = () => {
  const editor = useSlate();
  const renderElement = useCallback(
    (props: RenderElementProps) => <RenderElement {...props} />,
    [],
  );
  const markdownCompatible = useMarkdownCompatible(editor);
  const [menuOpened, setMenuOpened] = useState(false);
  const [menuPosition, setMenuPosition] = useState<{
    top: number;
    left: number;
  }>({
    top: 0,
    left: 0,
  });
  const isBlockActive = (editor: Editor, format: string): boolean => {
    const [match] = Editor.nodes(editor, {
      match: (n) => (n as CustomElement).type === format,
    });
    return !!match;
  };

  const toggleBlock = (editor: Editor, format: string): void => {
    const isActive = isBlockActive(editor, format);
    Transforms.setNodes(
      editor,
      { type: isActive ? 'paragraph' : format },
      { match: (n) => Editor.isBlock(editor, n as Element) },
    );
  };

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === '/') {
        event.preventDefault();
        if (editor.selection) {
          const domRange = ReactEditor.toDOMRange(editor, editor.selection);
          const rect = domRange.getBoundingClientRect();
          console.log('slate rect', rect);
        }
        const { selection } = editor;
        if (selection) {
          console.log(
            'select range0',
            window.getSelection()?.getRangeAt(0).getClientRects(),
          );
          const domRange = window
            .getSelection()
            ?.getRangeAt(0)
            .getBoundingClientRect();
          if (domRange) {
            console.log('domRange', domRange);
            setMenuPosition({
              top: domRange.top + window.scrollY + 20,
              left: domRange.left + window.scrollX,
            });
            setMenuOpened(true);
          }
        }
      }
    },
    [editor],
  );

  const handleCommandSelect = (format: string) => {
    toggleBlock(editor, format);
    setMenuOpened(false);
  };
  return (
    <>
      <Editable
        style={{
          // caretColor: 'transparent',
          position: 'relative',
        }}
        onKeyDown={handleKeyDown}
        renderElement={renderElement}
        onDOMBeforeInput={markdownCompatible}
        placeholder='Type something...'
        spellCheck
        autoFocus
      />
      {menuOpened && (
        <div
          style={{
            position: 'absolute',
            top: `${menuPosition.top}px`,
            left: `${menuPosition.left}px`,
          }}
        >
          <CommandMenu onCommandSelect={handleCommandSelect} />
        </div>
      )}
    </>
  );
};

export { ContentEdit };
