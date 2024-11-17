import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'src/homeworks/JSX_CSS/Components/ThemeProvider/theme.scss';
import { LangSelectorButton } from 'src/homeworks/JSX_CSS/Components/LangSelectorButton/LangSelectorButton';
import { useLang } from 'src/homeworks/JSX_CSS/Components/LangProvider/LangProvider';

function App() {
  const { getTranslate } = useLang();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LangSelectorButton />
      </header>
      <p>{getTranslate('welcome.hello')}</p>
      <p>{getTranslate('welcome.work')}</p>
      <p>{getTranslate('welcome.tasks')}</p>
      <p>Telegram: @ivshaban Email: react.dev.shabanov@mail.ru</p>
    </div>
  );
}

export default App;
