import { Meta, StoryObj } from '@storybook/react';
import AddToCart from './AddToCart';

const meta: Meta<typeof AddToCart> = {
  title: 'components/AddToCart',
  component: AddToCart,
};

export default meta;

export const AddToCartCountZeroStory: StoryObj<typeof AddToCart> = {
  args: {
    count: 0,
  },
};

export const AddToCartCountGreaterZeroStory: StoryObj<typeof AddToCart> = {
  args: {
    count: 250,
  },
};
