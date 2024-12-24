import { BrainstormingEditor } from '@brainstorming/editor';
import '@brainstorming/editor/dist/index.css';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { ReactElement } from 'react';
import { useParams } from 'react-router';
const Editor = (): ReactElement => {
  const { id } = useParams<{ id: string }>();
  const current = getCurrentWindow();
  current.innerPosition().then((r) => {
    console.log('window position', r);
  });
  // if (rect) {
  //   const { x: windowX, y: windowY } = getCurrentWindow().innerPosition();
  //   return {
  //     top: rect.top + windowY,
  //     left: rect.left + windowX,
  //   };
  // }
  return (
    <>
      <BrainstormingEditor id={id} type={'text'} />
    </>
  );
};

export { Editor };
