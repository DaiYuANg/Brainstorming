import {
  BasePoint,
  Editor,
  Path,
  Range,
  Element as SlateElement,
  Transforms,
} from 'slate';
import { BulletedListElement } from './CustomType.ts';

const SHORTCUTS: Record<string, string> = {
  '*': 'list-item',
  '-': 'list-item',
  '+': 'list-item',
  '>': 'block-quote',
  '#': 'heading-one',
  '##': 'heading-two',
  '###': 'heading-three',
  '####': 'heading-four',
  '#####': 'heading-five',
  '######': 'heading-six',
};
const withShortcuts = (editor: Editor) => {
  const { deleteBackward, insertText } = editor;
  console.log(deleteBackward);
  editor.insertText = (text: string) => {
    const { selection } = editor;

    if (text.endsWith(' ') && selection && Range.isCollapsed(selection)) {
      const { anchor } = selection;
      const block = Editor.above(editor, {
        match: (n) => SlateElement.isElement(n) && Editor.isBlock(editor, n),
      });
      const path: Path = block ? block[1] : [];
      const start: BasePoint = Editor.start(editor, path);
      const range = { anchor, focus: start };
      const beforeText: string =
        Editor.string(editor, range) + text.slice(0, -1);
      const type: string = SHORTCUTS[beforeText];

      if (type) {
        Transforms.select(editor, range);

        if (!Range.isCollapsed(range)) {
          Transforms.delete(editor);
        }

        const newProperties: Partial<SlateElement> = {
          type,
        };
        Transforms.setNodes<SlateElement>(editor, newProperties, {
          match: (n) => SlateElement.isElement(n) && Editor.isBlock(editor, n),
        });

        if (type === 'list-item') {
          const list: BulletedListElement = {
            type: 'bulleted-list',
            children: [],
          };
          Transforms.wrapNodes(editor, list, {
            match: (n) =>
              !Editor.isEditor(n) &&
              SlateElement.isElement(n) &&
              n.type === 'list-item',
          });
        }

        return;
      }
    }

    insertText(text);
  };

  editor.deleteBackward = (...args) => {
    console.log(args);
  };

  return editor;
};

export { SHORTCUTS, withShortcuts };
