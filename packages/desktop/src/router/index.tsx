import { createBrowserRouter } from 'react-router';
import { Layout } from '../component/layout.tsx';
import { Editor } from '../page/editor.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/edit/:id',
        element: <Editor />,
      },
    ],
  },
]);

export { router };
