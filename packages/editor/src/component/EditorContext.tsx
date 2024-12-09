import { createContext, ReactNode } from 'react';
import { editorType } from './EditorProps.ts';

type EditorContextProp = {
  type?: editorType;
};

const EditorContext = createContext<EditorContextProp | undefined>(undefined);

type EditorProviderProps = {
  children: ReactNode;
};

const EditorProvider = ({ children }: EditorProviderProps) => {
  return <EditorContext.Provider value={{}}>{children}</EditorContext.Provider>;
};

export { EditorContext, EditorProvider };
