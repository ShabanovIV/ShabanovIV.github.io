import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import styles from './HeaderMenu.module.scss';
import { ThemeToggleButton } from '../ThemeToggleButton/ThemeToggleButton';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import { TextButton } from '../ui/TextButton/TextButton';

export interface IHeaderMenuProps {
  isAuthenticated: boolean;
  handleSignIn: () => void;
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
          <Link className={styles.menuItem} to="/operations">
            Операции
          </Link>
          {isAuthenticated && (
            <Link className={styles.menuItem} to="/profile">
              Профиль
            </Link>
          )}
        </div>
      </div>
      <div className={styles.headerRight}>
        <TextButton
          borderRounded={false}
          borderVisible={false}
          maxTextLength={Infinity}
          text={!isAuthenticated ? 'Вход/Регистрация' : 'Выйти'}
          handleClick={!isAuthenticated ? handleSignIn : handleLogout}
        />
        <ThemeToggleButton />
      </div>
    </header>
  );
};

export default HeaderMenu;
