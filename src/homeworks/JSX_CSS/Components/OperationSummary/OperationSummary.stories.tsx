import { Meta, StoryObj } from '@storybook/react';
import OperationSummary, { OperationSummaryProps } from './OperationSummary';
import React from 'react';

const meta: Meta<typeof OperationSummary> = {
  title: 'Homework/JSX_CSS/OperationSummary',
  component: OperationSummary,
};

export default meta;

export const OperationSummaryLargeDescriptionStory: StoryObj<typeof OperationSummary> = {
  render: () => {
    const description =
      'Покупка канцелярских товаров для офиса — ручки, блокноты и стикеры. Обеспечение рабочей зоны необходимыми мелочами для комфортной работы.';

    const args: OperationSummaryProps = {
      title: 'Покупка',
      category: 'Канцелярия',
      amount: 10,
      description: description,
    };
    return (
      <>
        <div>
          <p>Полный текст описания: {description}</p>
        </div>
        <OperationSummary {...args} />
      </>
    );
  },
};
