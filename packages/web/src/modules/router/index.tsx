import { createMemoryRouter } from 'react-router';
import { LoginPage } from '../../views';

const router = createMemoryRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export { router };
