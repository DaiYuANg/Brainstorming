import { Blockquote, List, Text, Title } from '@mantine/core';
import { BaseElement } from 'slate';
import { RenderElementProps } from 'slate-react';

const SHORTCUTS: { [key: string]: string } = {
  '*': 'list-item',
  '-': 'list-item',
  '+': 'list-item',
  '>': 'block-quote',
  '#': 'heading-one',
  '##': 'heading-two',
  '###': 'heading-three',
  '####': 'heading-four',
  '#####': 'heading-five',
  '######': 'heading-six',
};

const MarkdownElement = ({
  attributes,
  children,
  element,
}: RenderElementProps) => {
  const elementWithType = element as BaseElement & { type: string }; // 类型断言
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
      return <Text {...attributes}>{children}</Text>;
  }
};

export { MarkdownElement, SHORTCUTS };