import { createContext } from 'react';
import { Descendant } from 'slate';
import { editorType } from '../component';

type EditorContextProp = {
  type?: editorType;
  setType: (newType: editorType) => void;
  onChange?: (value: Descendant[]) => void;
};

const EditorContext = createContext<EditorContextProp | undefined>(undefined);

export { EditorContext };
