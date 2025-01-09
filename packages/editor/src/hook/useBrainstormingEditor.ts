import { useContext } from 'react';
import { EditorContext } from '../context/EditorContext.tsx';

const useBrainstormingEditor = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error(
      'useBrainstormingEditor must be used within a ProductProvider',
    );
  }
  return context;
};
export { useBrainstormingEditor };
