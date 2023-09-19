import { MainLayout } from '@rockie/component';
import { LoginPage } from '../../views';

const routers = [
  {
    path: '/',
    element: <MainLayout />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
];

export { routers };
