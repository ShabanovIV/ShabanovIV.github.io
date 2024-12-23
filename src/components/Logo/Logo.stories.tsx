import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Logo from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'components/Logo',
  component: Logo,
};

export default meta;

export const LogoStory: StoryObj<typeof Logo> = {
  render: () => {
    return (
      <>
        <div>
          <Logo />
        </div>
      </>
    );
  },
};
