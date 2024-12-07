import { ReactElement } from 'react';
import { RouterProvider } from 'react-router';
import './App.css';
import { router } from './router';

const App = (): ReactElement => <RouterProvider router={router} />;

export default App;
