import { createMemoryRouter } from 'react-router';
import { MainLayout } from '../component/MainLayout.tsx';
import { Editor } from '../page/editor.tsx';

const router = createMemoryRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/edit/:id',
        element: <Editor />,
      },
    ],
  },
]);

export { router };
