import { AppShell } from '@mantine/core';
import { LayoutComponentProps } from './LayoutComponentProps.ts';
import { LayoutContent } from './LayoutContent.tsx';
import { LayoutHeader } from './LayoutHeader.tsx';
import { LayoutNavbar } from './LayoutNavbar.tsx';
import { useLayout } from './useLayout.ts';

const LayoutComponent = ({ navbar, content, header }: LayoutComponentProps) => {
  console.log(navbar);
  const { navbarWidth, navbarOpened } = useLayout();
  return (
    <AppShell
      header={{ height: 0 }}
      navbar={{
        width: navbarWidth,
        breakpoint: 'sm',
        collapsed: { mobile: !navbarOpened, desktop: !navbarOpened },
      }}
      padding='md'
      withBorder={true}
    >
      <LayoutHeader content={header} />
      <LayoutNavbar content={navbar} />
      <LayoutContent content={content} />
    </AppShell>
  );
};

export { LayoutComponent };
