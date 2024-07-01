import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const platform = window.electron.process.platform;
const root = document.getElementById('root') as HTMLElement;
root.classList.add(`platform-${platform}`);
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
