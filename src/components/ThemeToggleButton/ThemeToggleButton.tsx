import React from 'react';
import { Themes, useTheme } from '../ThemeProvider/ThemeProvider';
import toOn from '../Images/ToOn.png';
import toOff from '../Images/ToOff.png';
import styles from './ThemeToggleButton.module.scss';

export const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button className={styles.button} onClick={toggleTheme}>
      <img
        src={theme === Themes.Light ? toOff : toOn}
        alt={theme === Themes.Light ? 'Выключить свет' : 'Включить свет'}
        className={styles.icon}
      />
    </button>
  );
};
