import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import Editor from './component/Editor.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Editor />
  </StrictMode>,
);
