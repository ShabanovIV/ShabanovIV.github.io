import React, { createContext, useCallback, useContext, useState } from 'react';
import styles from './ThemeProvider.module.scss';

export const Themes = {
  Dark: 'myApp-dark',
  Light: 'myApp-light',
} as const;

export type Theme = (typeof Themes)[keyof typeof Themes];

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export interface ThemProviderProps {
  children: React.ReactNode;
}

const getCurrentThemeFromBody = (): Theme => {
  if (document.body.classList.contains(Themes.Dark)) return Themes.Dark;
  if (document.body.classList.contains(Themes.Light)) return Themes.Light;
  return Themes.Dark;
};

export const ThemeProvider: React.FC<ThemProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(getCurrentThemeFromBody());

  const toggleTheme = useCallback(() => {
    const newTheme = theme === Themes.Light ? Themes.Dark : Themes.Light;
    setTheme(newTheme);
    document.body.classList.toggle(styles['myApp-dark'], newTheme === Themes.Dark);
    document.body.classList.toggle(styles['myApp-light'], newTheme === Themes.Light);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme должен использоваться внутри ThemeProvider');
  }
  return context;
};
