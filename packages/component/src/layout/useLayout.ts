import { useContext } from 'react';
import { LayoutContext } from './LayoutContext.ts';

const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayoutContext must be used within a ProductProvider');
  }
  return context;
};

export { useLayout };
