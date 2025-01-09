import {
  BrainstormingEditor,
  Descendant,
  editorType,
} from '@brainstorming/editor';
import '@brainstorming/editor/dist/index.css';
import { Button } from '@mantine/core';
import { IconCopy, IconDownload } from '@tabler/icons-react';
import { useContextMenu } from 'mantine-contextmenu';
import { ReactElement, useState } from 'react';
import { useParams } from 'react-router';

const Editor = (): ReactElement => {
  const { id } = useParams<{ id: string }>();
  const { showContextMenu } = useContextMenu();
  const [type, setType] = useState<editorType>('text');
  const onChange = (v: Descendant[]) => {
    console.log('outside', v);
  };
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
      <Button
        onClick={() => {
          console.log(type);
          console.log(type === 'text');
          if (type === 'text') {
            setType('paragraph');
          }
          console.log('outside', type);
        }}
      >
        switch
      </Button>
      <BrainstormingEditor onChange={onChange} id={id} type={type} />
    </div>
  );
};

export { Editor };
