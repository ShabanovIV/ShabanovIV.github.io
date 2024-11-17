import React, { useState } from 'react';
import { StoryDecorator } from '../src/homeworks/JSX_CSS/Components/StoryDecorator/StoryDecorator';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <StoryDecorator>
          <Story />
        </StoryDecorator>
      );
    },
  ],
};

export default preview;
