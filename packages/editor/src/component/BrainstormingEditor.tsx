import { EditorLayout } from './EditorLayout.tsx';
import { BrainstormingEditorProps } from './EditorProps.ts';
import { EditorProvider } from './EditorProvider.tsx';

const BrainstormingEditor = ({ type = 'text' }: BrainstormingEditorProps) => {
  return (
    <EditorProvider type={type}>
      <EditorLayout />
    </EditorProvider>
  );
};

export default BrainstormingEditor;
