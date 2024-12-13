import { AppShell } from '@mantine/core';
import { ReactNode } from 'react';

type LayoutNavbarProps = {
  content?: ReactNode;
};

const LayoutHeader = ({ content }: LayoutNavbarProps) => {
  return <AppShell.Header>{content}</AppShell.Header>;
};

export { LayoutHeader };
export type { LayoutNavbarProps };
