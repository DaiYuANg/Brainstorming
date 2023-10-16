import '@fontsource/jetbrains-mono'; // Defaults to weight 400

import '@mantine/core/styles.css';
import '@mantine/spotlight/styles.css';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

postMessage({ payload: 'removeLoading' }, '*');
window.electronAPI.loadPreferences().then((r) => {
  console.log(r);
});
