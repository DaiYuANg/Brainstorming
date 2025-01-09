import { Descendant, ExtendedType } from 'slate';

type editorType = 'text' | 'paragraph';

type BrainstormingEditorProps = {
  id?: string;
  type?: editorType;
  onChange?: (value: Descendant[]) => void;
};

type BNode = ExtendedType<'Element', Descendant>;

export type { BNode, BrainstormingEditorProps, editorType };
