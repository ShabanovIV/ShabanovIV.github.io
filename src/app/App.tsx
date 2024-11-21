import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import { LangSelectorButton } from 'src/homeworks/JSX_CSS/Components/LangSelectorButton/LangSelectorButton';
import { useLang } from 'src/homeworks/JSX_CSS/Components/LangProvider/LangProvider';
import { ThemeToggleButton } from 'src/homeworks/JSX_CSS/Components/ThemeToggleButton/ThemeToggleButton';

function App() {
  const { getTranslate } = useLang();
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <div className={styles.AppHeaderContent}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
        </div>
        <LangSelectorButton />
        <ThemeToggleButton />
      </header>
      <p>{getTranslate('welcome.hello')}</p>
      <p>{getTranslate('welcome.work')}</p>
      <p>{getTranslate('welcome.tasks')}</p>
      <p>Telegram: @ivshaban Email: react.dev.shabanov@mail.ru</p>
    </div>
  );
}

export default App;
