import { useCallback, useMemo } from 'react';
import { BaseEditor, Descendant, createEditor } from 'slate';
import { HistoryEditor, withHistory } from 'slate-history';
import {
  Editable,
  ReactEditor,
  RenderElementProps,
  Slate,
  withReact,
} from 'slate-react';

interface CoreEditorProps {
  initialValue: Array<Descendant>;
}

const CoreEditor = (props: CoreEditorProps) => {
  const editor = useMemo<BaseEditor & ReactEditor & HistoryEditor>(
    () => withHistory(withReact(createEditor())),
    [],
  );

  // const decorate = useCallback((node: NodeEntry): BaseRange[] => {
  //     console.log(node)
  //     return []
  //     // const ranges = []
  //     //
  //     // if (!Text.isText(node)) {
  //     //   return ranges
  //     // }
  //
  //     // const getLength = (token:string) => {
  //     //   // if (typeof token === 'string') {
  //     //   //   return token.length
  //     //   // } else if (typeof token.content === 'string') {
  //     //   //   return token.content.length
  //     //   // } else {
  //     //   //   return token.content.reduce((l, t) => l + getLength(t), 0)
  //     //   // }
  //     // }
  //
  //     // const tokens = Prism.tokenize(node.text, Prism.languages.markdown)
  //     // let start = 0
  //     //
  //     // for (const token of tokens) {
  //     //   const length = getLength(token)
  //     //   const end = start + length
  //     //
  //     //   if (typeof token !== 'string') {
  //     //     ranges.push({
  //     //       [token.type]: true,
  //     //       anchor: { path, offset: start },
  //     //       focus: { path, offset: end },
  //     //     })
  //     //   }
  //     //
  //     //   start = end
  //     // }
  //     //
  //     // return ranges
  // }, [])

  // const renderLeaf = ({attributes, children, leaf, text}: RenderLeafProps): JSX.Element => {
  //     console.log(text)
  //     console.log(attributes)
  //     console.log(children)
  //     console.log(leaf)
  //     return (
  //         <span>{text.text}</span>
  //     )
  // }
  const renderElement = useCallback((props: RenderElementProps) => {
    console.log(props);
    switch (props.element.type) {
      case 'paragraph':
        return <div {...props} />;
      default:
        return <div {...props} />;
    }
  }, []);

  return (
    <>
      <Slate editor={editor} initialValue={props.initialValue}>
        <Editable
          autoFocus
          spellCheck
          style={{
            border: 0,
          }}
          renderElement={renderElement}
          placeholder={'place type something'}
        />
      </Slate>
    </>
  );
};

export { CoreEditor };
export type { CoreEditorProps };
