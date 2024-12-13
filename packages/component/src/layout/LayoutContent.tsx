import { AppShell } from '@mantine/core';
import { ReactNode } from 'react';

type LayoutContentProps = {
  content?: ReactNode;
};

const LayoutContent = ({ content }: LayoutContentProps) => {
  return <AppShell.Main>{content}</AppShell.Main>;
};

export { LayoutContent };
