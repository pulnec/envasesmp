import React from 'react';
import './index.css';
import App from './App';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { pdfjs } from 'react-pdf';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
