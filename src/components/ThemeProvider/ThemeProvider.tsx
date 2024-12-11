import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import {
  applyTheme,
  applyThemeVariables,
  findTheme,
  getThemeVariableValues,
  injectGlobalThemes,
  Theme,
  Themes,
  ThemeStyleValues,
} from './ThemeUtils';

interface ThemeContextProps {
  theme: Theme;
  themeValues: ThemeStyleValues;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export interface ThemProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(findTheme(document.body));
  const [themeValues, setThemeValues] = useState(getThemeVariableValues(theme));

  // Начальная инициализация
  useEffect(() => {
    injectGlobalThemes(); // Добавляет стили для тёмной и светлой темы как global
  }, []);

  // При смене темы
  useEffect(() => {
    const values = getThemeVariableValues(theme);
    applyTheme(document.body, theme); // Применяет на body тему по умолчанию
    applyThemeVariables(document.documentElement, values); // Значения переменных текущей темы применяются к root
    setThemeValues(values); // Значения переменных текущей темы сохраняются для передачи в context
  }, [theme]);

  // Функция смены темы
  const toggleTheme = useCallback(() => {
    const newTheme = theme === Themes.Light ? Themes.Dark : Themes.Light;
    applyTheme(document.body, newTheme); // Применяет новую тему (берёт из global)
    setTheme(newTheme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, themeValues, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme должен использоваться внутри ThemeProvider');
  }
  return context;
};
