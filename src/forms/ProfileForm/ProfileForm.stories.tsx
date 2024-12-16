import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ProfileForm from './ProfileForm';

const meta: Meta<typeof ProfileForm> = {
  title: 'forms/ProfileForm',
  component: ProfileForm,
};

export default meta;

export const ProfileFormStory: StoryObj<typeof ProfileForm> = {
  render: () => {
    return <ProfileForm onSubmit={() => console.log('submit!')}></ProfileForm>;
  },
};
