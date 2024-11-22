import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Operation, { OperationProps } from './Operation';

const meta: Meta<typeof Operation> = {
  title: 'components/Operation',
  component: Operation,
};

export default meta;

export const OperationStory: StoryObj<typeof Operation> = {
  render: () => {
    const args: OperationProps = {
      title: 'Покупка',
      category: 'Канцелярия',
      amount: 10,
      date: new Date(),
      description:
        'Покупка канцелярских товаров для офиса — ручки, блокноты и стикеры. Обеспечение рабочей зоны необходимыми мелочами для комфортной работы.',
    };
    return (
      <>
        <div>
          <Operation {...args} />
        </div>
      </>
    );
  },
};
