import { EditorProvider } from '../context/EditorProvider.tsx';
import { EditorLayout } from './EditorLayout.tsx';
import { BrainstormingEditorProps } from './EditorProps.ts';

const BrainstormingEditor = ({ type = 'text' }: BrainstormingEditorProps) => {
  return (
    <EditorProvider type={type}>
      <EditorLayout />
    </EditorProvider>
  );
};

export { BrainstormingEditor };
