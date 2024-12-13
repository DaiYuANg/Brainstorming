import { useDisclosure } from '@mantine/hooks';
import { ReactNode, useState } from 'react';
import { LayoutContext } from './LayoutContext.ts';

type LayoutProviderProps = {
  children: ReactNode;
  defaultNavbarWidth?: number;
  defaultHeaderHeight?: number;
};

const LayoutProvider = ({
  children,
  defaultNavbarWidth = 300,
  defaultHeaderHeight = 0,
}: LayoutProviderProps) => {
  const [navbarWidth, setNavbarWidth] = useState(defaultNavbarWidth);
  const [opened, { toggle }] = useDisclosure(true);

  return (
    <LayoutContext.Provider
      value={{
        navbarWidth,
        setNavbarWidth,
        navbarOpened: opened,
        toggleNavbar: toggle,
        headerHeight: defaultHeaderHeight,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export { LayoutProvider };
