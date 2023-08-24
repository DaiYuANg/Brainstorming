import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { appWindow } from '@tauri-apps/api/window';
import '@fontsource/jetbrains-mono'; // Defaults to weight 400
import '@fontsource/jetbrains-mono/400-italic.css';
import '@fontsource/jetbrains-mono/400.css'; // Specify weight
// import { appWindow } from '@tauri-apps/api/window'; // Specify weight and style
// document
//   .getElementById('titlebar-minimize')!
//   .addEventListener('click', () => appWindow.minimize());
// document
//   .getElementById('titlebar-maximize')!
//   .addEventListener('click', () => appWindow.toggleMaximize());
// document
//   .getElementById('titlebar-close')!
//   .addEventListener('click', () => appWindow.close());
// appWindow.center().then((r) => {
//   console.log(r);
// });
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

postMessage({ payload: 'removeLoading' }, '*');
console.log(window.electronAPI);
window.electronAPI.loadPreferences().then((r) => {
  console.log(r);
});
