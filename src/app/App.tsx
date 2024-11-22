import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import { LangSelectorButton } from 'src/components/LangSelectorButton/LangSelectorButton';
import { useLang } from 'src/components/LangProvider/LangProvider';
import { ThemeToggleButton } from 'src/components/ThemeToggleButton/ThemeToggleButton';

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
