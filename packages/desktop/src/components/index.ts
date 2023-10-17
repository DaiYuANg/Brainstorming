import { lazy } from 'react';
import { BaseRange } from 'slate';
import { CoreEditor } from './editor/CoreEditor.tsx';
import { CustomEditor, CustomElement, EmptyText } from './editor/CustomType.ts';
import { CustomText } from './editor/EditorElements.ts';

const ApplicationSpotlight = lazy(() =>
  import('./ApplicationSpotlight.tsx').then(({ ApplicationSpotlight }) => ({
    default: ApplicationSpotlight,
  })),
);

const ContextMenu = lazy(() =>
  import('./ContextMenu.tsx').then(({ ContextMenu }) => ({
    default: ContextMenu,
  })),
);

const MainLayout = lazy(() =>
  import('./layout/MainLayout.tsx').then(({ MainLayout }) => ({
    default: MainLayout,
  })),
);

declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText | EmptyText;
    Range: BaseRange & {
      [key: string]: unknown;
    };
  }

  interface Elements {
    type: 'heading-one';
  }
}

export { ApplicationSpotlight, ContextMenu, CoreEditor, MainLayout };
