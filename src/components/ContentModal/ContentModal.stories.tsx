import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ContentModal } from './ContentModal';
import { Layout } from './Layout';
import debug from 'debug';

const meta: Meta<typeof ContentModal> = {
  title: 'components/ContentModal',
  component: ContentModal,
};

export default meta;

export const ContentModalDefaultStory: StoryObj<typeof ContentModal> = {
  render: () => (
    <>
      <div>
        <Layout></Layout>
      </div>
    </>
  ),
};

export const ContentModalVisibleStory: StoryObj<typeof ContentModal> = {
  args: {
    visible: true,
    children: 'Это история для видимого модального окна',
    handleClose: () => {
      debug.log('close clicked');
    },
  },
};

export const ContentModalHiddenStory: StoryObj<typeof ContentModal> = {
  args: {
    visible: false,
    children: 'Это история для скрытого модального окна',
    handleClose: () => {
      debug.log('close clicked');
    },
  },
};
