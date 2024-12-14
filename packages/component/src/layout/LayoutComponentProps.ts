import { ReactNode } from 'react';

type LayoutComponentProps = Partial<{
  header: ReactNode;
  navbar: ReactNode;
  content: ReactNode;
}>;

export type { LayoutComponentProps };
