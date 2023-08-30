import { RouterProvider } from 'react-router-dom';
import { router } from '../modules';
import { WorkspaceTabs } from './WorkspaceTabs.tsx';

export const Workspace = () => {
  return (
    <>
      <WorkspaceTabs />
      <RouterProvider router={router} />
    </>
  );
};
