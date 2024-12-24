import { ReactNode, useState } from 'react';
import { editorType } from '../component/EditorProps.ts';
import { EditorContext } from './EditorContext.tsx';

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
