import { Container } from '@mantine/core';
import { Descendant } from 'slate';
import { CoreEditor } from '../components';

const initialValue: Array<Descendant> = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
];

export const EditorPage = () => {
  return (
    <>
      <Container size="responsive">
        <CoreEditor initialValue={initialValue} />
      </Container>
    </>
  );
};
