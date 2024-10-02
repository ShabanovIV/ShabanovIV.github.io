import { Meta, StoryObj } from '@storybook/react';
import { ContentModal } from './ContentModal';

const meta: Meta<typeof ContentModal> = {
  title: 'Homework/JSX_CSS/ContentModal',
  component: ContentModal,
};

export default meta;

export const ContentModalVisibleStory: StoryObj<typeof ContentModal> = {
  args: {
    visible: true,
    children: 'Это история для видимого модального окна',
  },
};

export const ContentModalHiddenStory: StoryObj<typeof ContentModal> = {
  args: {
    visible: false,
    children: 'Это история для скрытого модального окна',
  },
};
