import { MantineProvider } from '@mantine/core';
import { ContextMenuProvider } from 'mantine-contextmenu';
import 'mantine-contextmenu/styles.layer.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { scan } from 'react-scan';
import App from './App.tsx';

if (typeof window !== 'undefined') {
  scan({
    enabled: true,
    log: true, // logs render info to console (default: false)
  });
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme={'auto'}>
      <ContextMenuProvider>
        <App />
      </ContextMenuProvider>
    </MantineProvider>
  </React.StrictMode>,
);
