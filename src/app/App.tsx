import React from 'react';
import styles from './App.module.scss';
import { useLang } from 'src/components/LangProvider/LangProvider';
import HeaderMenu from 'src/components/HeaderMenu/HeaderMenu';

function App() {
  const { getTranslate } = useLang();
  return (
    <div className={styles.App}>
      <HeaderMenu />
      <p>{getTranslate('welcome.hello')}</p>
      <p>{getTranslate('welcome.work')}</p>
      <p>{getTranslate('welcome.tasks')}</p>
      <p>Telegram: @ivshaban Email: react.dev.shabanov@mail.ru</p>
    </div>
  );
}

export default App;
