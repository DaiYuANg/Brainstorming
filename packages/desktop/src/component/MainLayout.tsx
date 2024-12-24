import { Layout } from '@brainstorming/components';
import { ReactElement } from 'react';
import { Nav } from './nav.tsx';
import { Tab } from './tab.tsx';

const MainLayout = (): ReactElement => {
  return (
    <Layout height={10} breakpoint={'sm'} navbar={<Nav />} content={<Tab />} />
  );
};

export { MainLayout };
