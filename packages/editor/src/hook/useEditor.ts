import { useContext } from 'react';
import { EditorContext } from '../context/EditorContext.tsx';

const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error('useEditor must be used within a ProductProvider');
  }
  return context;
};
export { useEditor };
