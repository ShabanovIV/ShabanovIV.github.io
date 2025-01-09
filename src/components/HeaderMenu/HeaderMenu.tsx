import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import styles from './HeaderMenu.module.scss';
import { ThemeToggleButton } from '../ThemeToggleButton/ThemeToggleButton';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import { TextButton } from '../ui/TextButton/TextButton';

export interface IHeaderMenuProps {
  isAuthenticated: boolean;
  handleSignIn?: () => void;
  handleLogout: () => void;
}

const HeaderMenu: React.FC<IHeaderMenuProps> = ({ isAuthenticated, handleSignIn, handleLogout }) => {
  const { theme } = useTheme();

  return (
    <header className={`${styles.header} ${theme}`}>
      <div className={styles.headerLeft}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.menu}>
          <Link className={styles.menuItem} to="/categories">
            Категории
          </Link>
          <Link className={styles.menuItem} to="/operations">
            Операции
          </Link>
        </div>
      </div>
      <div className={styles.headerRight}>
        {isAuthenticated && (
          <Link className={styles.menuItem} to="/profile">
            Профиль
          </Link>
        )}
        <span></span>
        <TextButton
          borderRounded={false}
          borderVisible={true}
          text={!isAuthenticated ? 'Вход' : 'Выйти'}
          handleClick={!isAuthenticated ? handleSignIn : handleLogout}
        />
        <ThemeToggleButton />
      </div>
    </header>
  );
};

export default HeaderMenu;
