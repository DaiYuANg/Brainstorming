import { Blockquote, List, Text, Title } from '@mantine/core';
import { JSX } from 'react/jsx-runtime';
import { RenderElementProps } from 'slate-react';

const Element = ({
  attributes,
  children,
  element,
}: RenderElementProps): JSX.Element => {
  switch (element.type) {
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

export { Element };