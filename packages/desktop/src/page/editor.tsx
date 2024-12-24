import { BrainstormingEditor } from '@brainstorming/editor';
import '@brainstorming/editor/dist/index.css';
import { IconCopy, IconDownload } from '@tabler/icons-react';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { useContextMenu } from 'mantine-contextmenu';
import { ReactElement } from 'react';
import { useParams } from 'react-router';
const Editor = (): ReactElement => {
  const { id } = useParams<{ id: string }>();
  const current = getCurrentWindow();
  current.outerPosition().then((r) => {
    console.log('window position', r);
  });
  const { showContextMenu } = useContextMenu();
  // if (rect) {
  //   const { x: windowX, y: windowY } = getCurrentWindow().innerPosition();
  //   return {
  //     top: rect.top + windowY,
  //     left: rect.left + windowX,
  //   };
  // }
  return (
    <div
      onContextMenu={showContextMenu([
        {
          key: 'copy',
          icon: <IconCopy size={16} />,
          title: 'Copy to clipboard',
          onClick: () => {
            console.log();
          },
        },
        {
          key: 'download',
          icon: <IconDownload size={16} />,
          title: 'Download to your device',
          onClick: () => {
            console.log();
          },
        },
      ])}
    >
      <BrainstormingEditor id={id} type={'text'} />
    </div>
  );
};

export { Editor };
