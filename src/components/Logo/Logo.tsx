import React from 'react';
import styles from './Logo.module.scss';
import logoLight from '../Images/Logo.gif';
import logoDark from '../Images/Logo_dark.gif';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import { Themes } from '../ThemeProvider/ThemeUtils';

function Logo() {
  const { theme } = useTheme();

  return (
    <img
      src={theme === Themes.Dark ? logoDark : logoLight}
      alt="logo"
      className={`${styles.logo} ${theme === Themes.Dark ? styles.logoDark : styles.logoLight}`}
    />
  );
}

export default Logo;
