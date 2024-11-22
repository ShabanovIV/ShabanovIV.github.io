import React from 'react';
import Logo from '../Logo/Logo';
import styles from './HeaderMenu.module.scss';
import { ThemeToggleButton } from '../ThemeToggleButton/ThemeToggleButton';
import { useTheme } from '../ThemeProvider/ThemeProvider';

function HeaderMenu() {
  const { theme } = useTheme();

  return (
    <header className={`${styles.header} ${theme}`}>
      <div className={styles.headerContent}>
        <Logo />
      </div>
      <div className={styles.headerRight}>
        <ThemeToggleButton />
      </div>
    </header>
  );
}

export default HeaderMenu;
