import { Blockquote, List, Text, Title } from '@mantine/core';
import { BaseElement, Range } from 'slate';
import { RenderElementProps, useSelected, useSlate } from 'slate-react';
import classes from './RenderElement.module.css';

const RenderElement = ({
  attributes,
  children,
  element,
}: RenderElementProps) => {
  const editor = useSlate();
  const selection = editor.selection;
  let isSelectionCollapsed = true;
  if (selection !== null) {
    isSelectionCollapsed = Range.isCollapsed(
      editor.range(selection.anchor, selection),
    );
  }

  const selected = useSelected();

  const isEmpty = () => {
    console.log('children', children);
    console.log(children[0].props.text);
    return children[0].props.text.text === '';
  };

  const elementWithType = element as BaseElement & { type: string };
  switch (elementWithType.type) {
    case 'block-quote':
      return <Blockquote {...attributes}>{children}</Blockquote>;
    case 'bulleted-list':
      return <List {...attributes}>{children}</List>;
    case 'heading-one':
      return (
        <Title order={1} {...attributes}>
          {children}
        </Title>
      );
    case 'heading-two':
      return (
        <Title order={2} {...attributes}>
          {children}
        </Title>
      );
    case 'heading-three':
      return (
        <Title order={3} {...attributes}>
          {children}
        </Title>
      );
    case 'heading-four':
      return (
        <Title order={4} {...attributes}>
          {children}
        </Title>
      );
    case 'heading-five':
      return (
        <Title order={5} {...attributes}>
          {children}
        </Title>
      );
    case 'heading-six':
      return (
        <Title order={6} {...attributes}>
          {children}
        </Title>
      );
    case 'list-item':
      return <List.Item {...attributes}>{children}</List.Item>;
    default:
      return (
        <Text
          className={
            selected && isEmpty() && isSelectionCollapsed
              ? classes.selectedEmptyElement
              : ''
          }
          {...attributes}
        >
          {children}
        </Text>
      );
  }
};

export { RenderElement };
