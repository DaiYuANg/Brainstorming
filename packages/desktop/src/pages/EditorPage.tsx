import { ActionIcon, Affix, rem, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { IconArrowUp, IconTopologyRing } from '@tabler/icons-react';
import { useState } from 'react';
import { Descendant } from 'slate';
import { CanvasEditor, CoreEditor } from '../components';

const initialValue: Array<Descendant> = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
];
export const EditorPage = () => {
  const [scroll, scrollTo] = useWindowScroll();

  const [showFlow, setShowFlow] = useState(false);

  return (
    <>
      <div>
        <ActionIcon
          onClick={() => {
            setShowFlow(!showFlow);
          }}
          variant='default'
          size='md'
          aria-label='Settings'
        >
          <IconTopologyRing style={{ width: rem(20) }} stroke={1.5} />
        </ActionIcon>
        {showFlow ? (
          <>
            <CanvasEditor />
          </>
        ) : (
          <>
            <CoreEditor initialValue={initialValue} />
          </>
        )}

        <Affix color={'l'} position={{ bottom: 20, right: 20 }}>
          <Transition transition='slide-up' mounted={scroll.y > 0}>
            {(transitionStyles) => (
              <ActionIcon
                style={transitionStyles}
                onClick={() => scrollTo({ y: 0 })}
              >
                <IconArrowUp style={{ width: rem(16), height: rem(16) }} />
              </ActionIcon>
            )}
          </Transition>
        </Affix>
      </div>
    </>
  );
};
