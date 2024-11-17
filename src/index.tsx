import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/index.css';
import App from './app/App';
import './homeworks/JSX_CSS/Components/LangProvider/translations';
import { LangProvider } from './homeworks/JSX_CSS/Components/LangProvider/LangProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </React.StrictMode>
);
