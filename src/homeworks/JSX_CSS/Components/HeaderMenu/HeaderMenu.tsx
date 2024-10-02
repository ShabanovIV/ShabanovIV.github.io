import React from 'react';
import Logo from '../Logo/Logo';
import styles from './HeaderMenu.module.css';

function HeaderMenu() {
  return (
    <header className={styles.header}>
      <div>
        <Logo />
      </div>
    </header>
  );
}

export default HeaderMenu;
