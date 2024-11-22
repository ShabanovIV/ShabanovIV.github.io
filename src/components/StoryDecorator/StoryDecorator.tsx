import React from 'react';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { ThemeToggleButton } from '../ThemeToggleButton/ThemeToggleButton';
import { LangProvider } from '../LangProvider/LangProvider';
import { LangSelectorButton } from '../LangSelectorButton/LangSelectorButton';
import styles from './StoryDecorator.module.scss';

interface StoryDecoratorProps {
  children: React.ReactNode;
}

export const StoryDecorator: React.FC<StoryDecoratorProps> = ({ children }) => {
  return (
    <LangProvider>
      <ThemeProvider>
        <div className={styles.container}>
          <ThemeToggleButton />
          <LangSelectorButton />
        </div>
        {children}
      </ThemeProvider>
    </LangProvider>
  );
};
