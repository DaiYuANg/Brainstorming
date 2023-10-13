import { BaseRange } from 'slate';
import { ContextMenu } from './ContextMenu';
import { CoreEditor } from './editor/CoreEditor.tsx';
import { CustomEditor, CustomElement, EmptyText } from './editor/CustomType.ts';
import { CustomText } from './editor/EditorElements.ts';

declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText | EmptyText;
    Range: BaseRange & {
      [key: string]: unknown;
    };
  }
}

export { ContextMenu, CoreEditor };
