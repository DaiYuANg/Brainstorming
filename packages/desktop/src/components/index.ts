import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';
import { ContextMenu } from './ContextMenu';
import { CoreEditor } from './CoreEditor.tsx';
import { CustomText, EditorElements } from './EditorElements.ts';

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: EditorElements;
    Text: CustomText;
  }
}

export { ContextMenu, CoreEditor };
