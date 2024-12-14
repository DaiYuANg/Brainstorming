import { Divider } from '@mantine/core';
import { useCallback, useEffect, useRef } from 'react';
import classes from './SelfPaintedCursor.module.css';
// TODO Custom Cursor transform
const SelfPaintedCursor = () => {
  const caretRef = useRef<HTMLDivElement | null>(null);

  const getCaretPosition = () => {
    const selection = window.getSelection();

    if (selection) {
      if (!selection.rangeCount) return null; // 没有选区时，返回 null

      const range = selection.getRangeAt(0); // 获取当前选区的第一个 Range
      // 获取选区的边界信息
      return range.getBoundingClientRect();
    }
  };

  const onSelectionChange = useCallback(() => {
    const caretPosition = getCaretPosition();
    if (caretRef.current && caretPosition) {
      console.log(caretPosition);
      caretRef.current.style.display = 'block';
      caretRef.current.style.top = caretPosition.top - 14 + 'px';
      caretRef.current.style.left = caretPosition.left - 16 + 'px';
    } else {
      if (caretRef.current) {
        caretRef.current.style.display = 'none';
      }
    }
  }, [caretRef]);

  useEffect(() => {
    document.addEventListener('selectionchange', onSelectionChange);
    return () => {
      document.removeEventListener('selectionchange', onSelectionChange);
    };
  });
  return (
    <Divider ref={caretRef} orientation='vertical' className={classes.cursor} />
  );
};

export { SelfPaintedCursor };
