import { createBrowserRouter } from 'react-router-dom';
import { EditorPage } from '../pages/EditorPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <EditorPage />,
  },
]);

export { router };
