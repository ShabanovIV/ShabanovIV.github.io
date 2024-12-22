import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/index.css';
import App from './app/App';
import './components/LangProvider/translations';
import { LangProvider } from './components/LangProvider/LangProvider';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';
import { ErrorProvider } from './components/ErrorProvider/ErrorProvider';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <LangProvider>
      <ThemeProvider>
        <ErrorProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ErrorProvider>
      </ThemeProvider>
    </LangProvider>
  </React.StrictMode>
);
