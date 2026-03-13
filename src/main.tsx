import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

window.addEventListener('error', (event) => {
  const errorDiv = document.createElement('div');
  errorDiv.style.position = 'fixed';
  errorDiv.style.top = '0';
  errorDiv.style.left = '0';
  errorDiv.style.zIndex = '9999';
  errorDiv.style.backgroundColor = 'red';
  errorDiv.style.color = 'white';
  errorDiv.style.padding = '20px';
  errorDiv.style.whiteSpace = 'pre-wrap';
  errorDiv.innerHTML = `<h1>Error</h1><pre>${event.error?.stack || event.message}</pre>`;
  document.body.appendChild(errorDiv);
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
