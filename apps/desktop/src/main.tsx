import '@fontsource/jetbrains-mono'; // Defaults to weight 400

import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/spotlight/styles.css';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initialize } from './modules';
import './styles/global.scss';
import { theme } from './theme.ts';

initialize().then((r) => {
  console.log(r);
  localStorage.setItem('GlobalShare', JSON.stringify(r));
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme='auto'>
      <App />
    </MantineProvider>
  </StrictMode>,
);
