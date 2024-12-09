import { useContext } from 'react';
import { EditorContext } from '../component/EditorContext';

const useEditorContext = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error(
      'useDriverBoardContext must be used within a ProductProvider',
    );
  }
  return context;
};
export { useEditorContext };
