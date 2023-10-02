import { RouterProvider } from 'react-router-dom';
import { router } from './modules';
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
