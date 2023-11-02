import { BaseEditor, Descendant, Element, Range } from 'slate';
import { HistoryEditor } from 'slate-history';
import { ReactEditor } from 'slate-react';

export type BlockQuoteElement = {
  type: 'block-quote';
  align?: string;
  children: Descendant[];
};

export type BulletedListElement = {
  type: 'bulleted-list';
  align?: string;
  children: Descendant[];
};

export type CheckListItemElement = {
  type: 'check-list-item';
  checked: boolean;
  children: Descendant[];
};

export type EditableVoidElement = {
  type: 'editable-void';
  children: EmptyText[];
};

export type HeadingElement = {
  type: 'heading';
  align?: string;
  children: Descendant[];
};

export type HeadingOneElement = {
  type: 'heading-one';
  align?: string;
  children: Descendant[];
};

export type HeadingTwoElement = {
  type: 'heading-two';
  align?: string;
  children: Descendant[];
};

export type HeadingThreeElement = {
  type: 'heading-three';
  align?: string;
  children: Descendant[];
};

export type HeadingFourElement = {
  type: 'heading-four';
  align?: string;
  children: Descendant[];
};

export type HeadingFiveElement = {
  type: 'heading-five';
  align?: string;
  children: Descendant[];
};

export type HeadingSixElement = {
  type: 'heading-six';
  align?: string;
  children: Descendant[];
};

export type ImageElement = {
  type: 'image';
  url: string;
  children: EmptyText[];
};

export type LinkElement = { type: 'link'; url: string; children: Descendant[] };

export type ButtonElement = { type: 'button'; children: Descendant[] };

export type BadgeElement = { type: 'badge'; children: Descendant[] };

export type ListItemElement = { type: 'list-item'; children: Descendant[] };

export type MentionElement = {
  type: 'mention';
  character: string;
  children: CustomText[];
};

export type ParagraphElement = {
  type: 'paragraph';
  align?: string;
  children: Descendant[];
};

// export react TableElement = { react: 'table'; children: TableRow[] };

export type TableCellElement = { type: 'table-cell'; children: CustomText[] };

// export react TableRowElement = { react: 'table-row'; children: TableCell[] };

export type TitleElement = { type: 'title'; children: Descendant[] };

export type VideoElement = {
  type: 'video';
  url: string;
  children: EmptyText[];
};

export type CodeBlockElement = {
  type: 'code-block';
  language: string;
  children: Descendant[];
};

export type CodeLineElement = {
  type: 'code-line';
  children: Descendant[];
};

type CustomElement =
  | BlockQuoteElement
  | BulletedListElement
  | CheckListItemElement
  | EditableVoidElement
  | HeadingElement
  | HeadingTwoElement
  | ImageElement
  | LinkElement
  | ButtonElement
  | BadgeElement
  | ListItemElement
  | MentionElement
  | ParagraphElement
  // | TableElement
  // | TableRowElement
  | TableCellElement
  | TitleElement
  | VideoElement
  | CodeBlockElement
  | CodeLineElement
  | HeadingOneElement
  | HeadingThreeElement
  | HeadingFourElement
  | HeadingFiveElement
  | HeadingSixElement;

export type CustomText = {
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  text: string;
};

export type EmptyText = {
  text: string;
};

export type CustomEditor = BaseEditor &
  ReactEditor &
  HistoryEditor & {
    nodeToDecorations?: Map<Element, Range[]>;
  };

export type { CustomElement };
