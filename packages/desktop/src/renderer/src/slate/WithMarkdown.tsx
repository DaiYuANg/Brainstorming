import {
  Ancestor,
  Editor,
  Node,
  Point,
  Range,
  Element as SlateElement,
  Transforms,
} from 'slate';
import { SHORTCUTS } from './MarkdownElement.tsx';

type MarkdownNode = {
  type: string;
} & Node &
  Ancestor;

export type { MarkdownNode };

const withMarkdown = (editor: Editor) => {
  const { deleteBackward, insertText } = editor;
  editor.insertText = (text: string) => {
    const { selection } = editor;
    if (text.endsWith(' ') && selection && Range.isCollapsed(selection)) {
      const { anchor } = selection;
      const block = Editor.above(editor, {
        match: (n) => SlateElement.isElement(n) && Editor.isBlock(editor, n),
      });
      const path = block ? block[1] : [];
      const start = Editor.start(editor, path);
      const range = { anchor, focus: start };
      const beforeText = Editor.string(editor, range) + text.slice(0, -1);
      console.log(beforeText);
      const type = SHORTCUTS[beforeText];
      if (type) {
        Transforms.select(editor, range);

        if (!Range.isCollapsed(range)) {
          Transforms.delete(editor);
        }

        const newProperties: Partial<MarkdownNode> = {
          type,
          children: [
            {
              text: type,
            },
          ],
        };
        Transforms.setNodes(editor, newProperties, {
          match: (n) => SlateElement.isElement(n) && Editor.isBlock(editor, n),
        });
      }
      return;
    }
    insertText(text);
  };

  editor.deleteBackward = (...args) => {
    const { selection } = editor;
    if (selection && Range.isCollapsed(selection)) {
      const match = Editor.above<MarkdownNode>(editor, {
        match: (n) => {
          return SlateElement.isElement(n) && Editor.isBlock(editor, n);
        },
      });
      if (match) {
        const [block, path] = match;
        const start = Editor.start(editor, path);
        if (
          !Editor.isEditor(block) &&
          SlateElement.isElement(block) &&
          block.type !== 'paragraph' &&
          Point.equals(selection.anchor, start)
        ) {
          const newProperties: Partial<MarkdownNode> = {
            type: 'paragraph',
          };
          Transforms.setNodes(editor, newProperties);

          if (block.type === 'list-item') {
            Transforms.unwrapNodes<MarkdownNode>(editor, {
              match: (n) => {
                return !Editor.isEditor(n) && SlateElement.isElement(n);
              },
              split: true,
            });
          }
          return;
        }
      }
    }
    deleteBackward(...args);
  };
  return editor;
};

export { withMarkdown };
