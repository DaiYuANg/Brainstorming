import {
  autoUpdate,
  flip,
  inline,
  shift,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react';
import { KeyboardEvent, useCallback, useState } from 'react';
import { Transforms } from 'slate';
import { Editable, RenderElementProps, useSlate } from 'slate-react';
import { useMarkdownCompatible } from '../hook/useMarkdownCompatible.ts';
import { CommandMenu } from './CommandMenu.tsx';
import { RenderElement } from './RenderElement.tsx';

const ContentEdit = () => {
  const editor = useSlate();
  const renderElement = useCallback(
    (props: RenderElementProps) => <RenderElement {...props} />,
    [],
  );
  const markdownCompatible = useMarkdownCompatible(editor);

  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    placement: 'bottom-start',
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [inline(), flip(), shift()],
    whileElementsMounted: autoUpdate,
    transform: true,
  });

  const dismiss = useDismiss(context);

  const { getFloatingProps } = useInteractions([dismiss]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key !== '/') {
      return;
    }

    const selection = window.getSelection();
    const range =
      typeof selection?.rangeCount === 'number' && selection.rangeCount > 0
        ? selection.getRangeAt(0)
        : null;

    if (!range) {
      return;
    }

    refs.setReference({
      getBoundingClientRect: () => range.getBoundingClientRect(),
      getClientRects: () => range.getClientRects(),
    });
    setIsOpen(true);
  };

  const handleCommandSelect = (command: string) => {
    // Transforms.insertText(editor, command);
    console.log(command);
    Transforms.insertNodes(editor, {
      children: [
        {
          text: '',
        },
      ],
    });
    setIsOpen(false);
  };

  return (
    <>
      <Editable
        style={{
          position: 'relative',
        }}
        onKeyDown={handleKeyDown}
        renderElement={renderElement}
        onDOMBeforeInput={markdownCompatible}
        placeholder='Type something...'
        spellCheck
        autoFocus
      />
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={{
            ...floatingStyles,
            background: 'black',
            color: 'white',
            padding: 4,
          }}
          {...getFloatingProps()}
        >
          <CommandMenu onCommandSelect={handleCommandSelect} />
        </div>
      )}
    </>
  );
};

export { ContentEdit };
