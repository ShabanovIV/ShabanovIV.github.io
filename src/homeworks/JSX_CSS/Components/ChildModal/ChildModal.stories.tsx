import { Meta, StoryObj } from '@storybook/react';
import { ChildModal } from './ChildModal';

const meta: Meta<typeof ChildModal> = {
  title: 'JSX_CSS_Homework/ChildModal',
  component: ChildModal,
  tags: ['autodocs'],
};

export default meta;

export const VisibleChildModalStory: StoryObj<typeof ChildModal> = {
  args: {
    visible: true,
    children: 'This is a story for a visible, modal window',
  },
};

export const HiddenChildModalStory: StoryObj<typeof ChildModal> = {
  args: {
    visible: false,
    children: 'This is a story for a hidden, modal window',
  },
};
