import { Layout } from '@brainstorming/components';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <Layout
      height={20}
      breakpoint={'md'}
      content={
        <>
          <Outlet />
        </>
      }
    />
  );
};
export { MainLayout };
