import '@fontsource/jetbrains-mono'; // Defaults to weight 400
import '@fontsource/jetbrains-mono/400-italic.css';
import '@fontsource/jetbrains-mono/400.css'; // Specify weight
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

postMessage({ payload: 'removeLoading' }, '*');
console.log(window.electronAPI);
window.electronAPI.loadPreferences().then((r) => {
  console.log(r);
});
