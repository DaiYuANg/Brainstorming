import { createContext, ReactNode } from 'react';

type LayoutContextProp = {
  navbarWidth: number;
  setNavbarWidth: (width: number) => void;
  navbarOpened: boolean;
  toggleNavbar: () => void;
  headerHeight: number;
};

const LayoutContext = createContext<LayoutContextProp | undefined>(undefined);

type LayoutProviderProps = {
  children: ReactNode;
};

export { LayoutContext };
export type { LayoutProviderProps };
