import { Divider } from '@mantine/core';
import { useEffect, useRef } from 'react';
import { useSlate } from 'slate-react';

// TODO Custom Cursor transform
const SelfPaintedCursor = () => {
  const editor = useSlate();
  const cursorRef = useRef<HTMLDivElement | null>(null);
  // const [cursorPosition, setCursorPosition] = useState(null);
  // const [isTyping, setIsTyping] = useState(false);
  useEffect(() => {
    // const handleChange = () => {
    //   const { selection } = editor;
    //   if (selection && Range.isCollapsed(selection)) {
    //     const point = Editor.start(editor, selection);
    //     // const { top, left } = editor.view.pointToDOM(point);
    //     // setCursorPosition({ top, left });
    //   }
    // };
    // editor.on('change', handleChange);
    // return () => editor.off('change', handleChange);
  }, [editor]);
  return <Divider ref={cursorRef} pos={'relative'} />;
};

export { SelfPaintedCursor };
