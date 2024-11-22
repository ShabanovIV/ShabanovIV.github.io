import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/index.css';
import App from './app/App';
import './components/LangProvider/translations';
import { LangProvider } from './components/LangProvider/LangProvider';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <LangProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LangProvider>
  </React.StrictMode>
);
