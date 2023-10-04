import { useMemo } from 'react';
import { BaseEditor, Descendant, createEditor } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, ReactEditor, Slate, withReact } from 'slate-react';

interface CoreEditorProps {
  initialValue: Array<Descendant>;
}

type CustomElement = { type: 'paragraph'; children: CustomText[] };

type CustomText = { text: string };

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const CoreEditor = (props: CoreEditorProps) => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  return (
    <>
      <Slate editor={editor} initialValue={props.initialValue}>
        <Editable placeholder={'place type something'} />
      </Slate>
    </>
  );
};

export { CoreEditor };
