import React from 'react';
import Logo from '../Logo/Logo';
import styles from './HeaderMenu.module.scss';
import { ThemeToggleButton } from '../ThemeToggleButton/ThemeToggleButton';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import { LangSelectorButton } from '../LangSelectorButton/LangSelectorButton';

function HeaderMenu() {
  const { theme } = useTheme();

  return (
    <header className={`${styles.header} ${theme}`}>
      <div className={styles.headerContent}>
        <Logo />
      </div>
      <div className={styles.headerRight}>
        <LangSelectorButton />
        <ThemeToggleButton />
      </div>
    </header>
  );
}

export default HeaderMenu;
