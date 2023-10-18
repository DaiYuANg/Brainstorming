import { useState } from 'react';
import { useSlate } from 'slate-react';

const EditorCursor = () => {
  const editor = useSlate();
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  console.log(editor);
  return (
    <>
      <span
        style={{
          position: 'absolute',
          background: 'red',
          width: '10px',
          height: '20px',
          top: top,
          left: left,
        }}
      ></span>
    </>
  );
};

export { EditorCursor };
