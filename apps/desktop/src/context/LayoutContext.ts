import { createContext } from 'react';

interface LayoutContextValueProps {
  open: boolean;
}

const LayoutContext = createContext<LayoutContextValueProps>({
  open: false,
});

export { LayoutContext };
export type { LayoutContextValueProps };
