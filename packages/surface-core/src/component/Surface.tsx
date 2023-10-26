import { useMemo } from 'react';
import { BaseEditor, createEditor } from 'slate';
import { HistoryEditor, withHistory } from 'slate-history';
import { Editable, ReactEditor, Slate, withReact } from 'slate-react';
import { useSurfaceGlobalStore } from '../store';
import { SurfaceComponentProp } from '../types/SurfaceComponentProp.ts';

const Surface = (props: Partial<SurfaceComponentProp>) => {
  const surfaceStore = useSurfaceGlobalStore();
  const editor = useMemo<BaseEditor & ReactEditor & HistoryEditor>(
    () => withReact(withHistory(createEditor())),
    [],
  );
  console.debug(surfaceStore);

  return (
    <>
      <Slate editor={editor} initialValue={props.initialValue!}>
        <Editable />
      </Slate>
    </>
  );
};

export { Surface };
