import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import App from './App';
import { ErrorProvider } from '../components/ErrorProvider/ErrorProvider';

const meta: Meta<typeof App> = {
  title: 'Main/App',
  component: App,
};

export default meta;

export const AppStory: StoryObj<typeof App> = {
  render: () => {
    return (
      <ErrorProvider>
        <App />
      </ErrorProvider>
    );
  },
};
