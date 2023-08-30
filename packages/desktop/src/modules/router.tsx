import { createBrowserRouter } from 'react-router-dom';
import { EmptyWorkspace } from '../pages/EmptyWorkspace.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <EmptyWorkspace />,
  },
]);

export { router };
