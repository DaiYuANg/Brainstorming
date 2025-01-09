import { ReactNode, useState } from 'react';
import { BrainstormingEditorProps, editorType } from '../component';
import { EditorContext } from './EditorContext.tsx';

type EditorProviderProps = {
  children: ReactNode;
} & BrainstormingEditorProps;

const EditorProvider = ({ children, type, onChange }: EditorProviderProps) => {
  const [editorType, setEditorType] = useState<editorType | undefined>(type);

  return (
    <EditorContext.Provider
      value={{
        type: editorType,
        setType: setEditorType,
        onChange: onChange,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export { EditorProvider };
export type { EditorProviderProps };
