import { Meta, StoryObj } from '@storybook/react';
import { TextButton } from './TextButton';
import React from 'react';

const meta: Meta<typeof TextButton> = {
  title: 'ui/TextButton',
  component: TextButton,
};

export default meta;

function handleClick(): void {
  console.log('button click');
}

export const TextButtonStory: StoryObj<typeof TextButton> = {
  render: () => {
    const args = {
      text: 'Кнопка с надписью на ней',
      maxTextLength: 6,
      borderVisible: false,
      borderRounded: true,
      handleClick: handleClick,
    };

    return <TextButton {...args}></TextButton>;
  },
};

export const TextButtonLargeStory: StoryObj<typeof TextButton> = {
  render: () => {
    const args = {
      text: 'Кнопка с надписью на ней',
      maxTextLength: Infinity,
      borderVisible: false,
      borderRounded: true,
      handleClick: handleClick,
    };

    return <TextButton {...args}></TextButton>;
  },
};

export const TextButtonPlusStory: StoryObj<typeof TextButton> = {
  render: () => {
    const args = {
      text: '+',
      maxTextLength: Infinity,
      borderVisible: true,
      borderRounded: false,
      handleClick: handleClick,
    };

    return <TextButton {...args}></TextButton>;
  },
};
