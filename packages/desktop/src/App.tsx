import { invoke } from '@tauri-apps/api/core';
import { ReactElement } from 'react';
import { RouterProvider } from 'react-router';
import './App.css';
import { router } from './router';

const App = (): ReactElement => {
  invoke('greet', { name: 'Hello, Async!' }).then((r) =>
    console.log('Completed!', r),
  );
  return <RouterProvider router={router} />;
};

export default App;
