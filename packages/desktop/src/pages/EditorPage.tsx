import { Descendant } from 'slate';
import { CoreEditor } from '../components';

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
];

export const EditorPage = () => {
  return (
    <>
      <CoreEditor initialValue={initialValue} />
    </>
  );
};
