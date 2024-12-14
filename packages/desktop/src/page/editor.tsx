import { BrainstormingEditor } from '@brainstorming/editor';
import '@brainstorming/editor/dist/index.css';
import { ReactElement } from 'react';
import { useParams } from 'react-router';

const Editor = (): ReactElement => {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <BrainstormingEditor id={id} type={'text'} />
    </>
  );
};

export { Editor };
