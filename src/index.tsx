import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/index.css';
import App from './app/App';
import './components/LangProvider/translations';
import { LangProvider } from './components/LangProvider/LangProvider';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';
import { ErrorProvider } from './components/ErrorProvider/ErrorProvider';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './stores/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <LangProvider>
      <ThemeProvider>
        <Provider store={store}>
          <ErrorProvider>
            <HashRouter>
              <App />
            </HashRouter>
          </ErrorProvider>
        </Provider>
      </ThemeProvider>
    </LangProvider>
  </React.StrictMode>
);
