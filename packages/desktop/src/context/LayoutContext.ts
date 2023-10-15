import { createContext } from 'react';

interface LayoutContextValueProps {
  open: boolean;
}

const LayoutContext = createContext<LayoutContextValueProps>({});

export { LayoutContext };
export type { LayoutContextValueProps };
