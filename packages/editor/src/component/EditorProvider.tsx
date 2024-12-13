import { ReactNode, useState } from 'react';
import { EditorContext } from './EditorContext.tsx';
import { editorType } from './EditorProps.ts';

type EditorProviderProps = {
  children: ReactNode;
  type: editorType;
};

const EditorProvider = ({ children, type }: EditorProviderProps) => {
  const [editorType, setEditorType] = useState<editorType>(type);

  return (
    <EditorContext.Provider
      value={{
        type: editorType,
        setType: setEditorType,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export { EditorProvider };
export type { EditorProviderProps };
