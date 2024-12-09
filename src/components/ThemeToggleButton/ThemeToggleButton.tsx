import React from 'react';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import toOn from '../Images/ToOn.png';
import toOff from '../Images/ToOff.png';
import { ImageButton, Sizes } from '../ui/ImageButton/ImageButton';
import { Themes } from '../ThemeProvider/ThemeUtils';

export const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <ImageButton
      src={theme === Themes.Light ? toOff : toOn}
      size={Sizes.Middle}
      alt={theme === Themes.Light ? 'Выключить свет' : 'Включить свет'}
      handleClick={toggleTheme}
    ></ImageButton>
  );
};
