import React from 'react';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { ThemeToggleButton } from '../ThemeToggleButton/ThemeToggleButton';

interface StoryDecoratorProps {
  children: React.ReactNode;
}

export const StoryDecorator: React.FC<StoryDecoratorProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <div>
        <ThemeToggleButton />
        {children}
      </div>
    </ThemeProvider>
  );
};
