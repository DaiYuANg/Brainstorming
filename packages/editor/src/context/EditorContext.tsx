import { createContext } from 'react';
import { editorType } from '../component/EditorProps.ts';

type EditorContextProp = {
  type?: editorType;
  setType: (newType: editorType) => void;
};

const EditorContext = createContext<EditorContextProp | undefined>(undefined);

export { EditorContext };
