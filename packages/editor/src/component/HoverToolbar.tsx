import { ActionIcon, Group } from '@mantine/core';
import { IconCopy } from '@tabler/icons-react';
import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Editor, Range } from 'slate';
import { useFocused, useSlate } from 'slate-react';

const Portal = ({ children }: { children?: ReactNode }) => {
  return typeof document === 'object'
    ? createPortal(children, document.body)
    : null;
};

const HoverToolbar = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const editor = useSlate();
  const inFocus = useFocused();
  useEffect(() => {
    const el = ref.current;
    const { selection } = editor;

    if (!el) {
      return;
    }

    if (
      !selection ||
      !inFocus ||
      Range.isCollapsed(selection) ||
      Editor.string(editor, selection) === ''
    ) {
      el.removeAttribute('style');
      return;
    }

    const domSelection = window.getSelection();
    const domRange = domSelection?.getRangeAt(0);
    if (domRange) {
      console.log(domRange);
      const rect = domRange.getBoundingClientRect();
      el.style.opacity = '1';
      el.style.top = `${rect.top + window.pageYOffset - el.offsetHeight}px`;
      el.style.left = `${
        rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2
      }px`;
    }
  });

  return (
    <Portal>
      <Group ref={ref}>
        <ActionIcon>
          <IconCopy />
        </ActionIcon>
      </Group>
    </Portal>
  );
};

export { HoverToolbar, Portal };
