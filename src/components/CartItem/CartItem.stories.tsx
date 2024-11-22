import { Meta, StoryObj } from '@storybook/react';
import CartItem from './CartItem';
import greenSnowboard from '../StoryImages/GreenSnowboard.png';
import React from 'react';

const meta: Meta<typeof CartItem> = {
  title: 'Homework/JSX_CSS/CartItem',
  component: CartItem,
};

export default meta;

type Story = StoryObj<typeof CartItem>;

export const CartItemStory: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <CartItem
        id={1}
        name={'Бюджетный сноуборд'}
        price={999}
        image={greenSnowboard}
        onRemove={(id) => console.log(`Удаление элемента с id: ${id}`)}
      />
    </div>
  ),
};
