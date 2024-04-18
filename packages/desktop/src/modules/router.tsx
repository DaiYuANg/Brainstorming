import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const EditorPage = lazy(() =>
  import('../pages/EditorPage.tsx').then(({ EditorPage }) => ({
    default: EditorPage,
  })),
);

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense>
        <EditorPage />
      </Suspense>
    ),
  },
]);

export { EditorPage, router };
