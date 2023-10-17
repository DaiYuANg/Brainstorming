import { ActionIcon, Affix, rem, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { IconArrowUp } from '@tabler/icons-react';
import { Descendant } from 'slate';
import { CoreEditor } from '../components';

const initialValue: Array<Descendant> = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
];
export const EditorPage = () => {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <>
      <div>
        <CoreEditor initialValue={initialValue} />
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
