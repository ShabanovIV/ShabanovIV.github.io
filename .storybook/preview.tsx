import React from 'react';
import { StoryDecorator } from '../src/components/StoryDecorator/StoryDecorator';
import type { Preview } from '@storybook/react';
import '../src/components/LangProvider/translations';

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
