import { Meta, StoryObj } from '@storybook/react';
import OperationSummary from './OperationSummary';
import React from 'react';
import { createOperationSummary } from '../Helpers/GenericListItemFactory';

const meta: Meta<typeof OperationSummary> = {
  title: 'components/OperationSummary',
  component: OperationSummary,
};

export default meta;

export const OperationSummaryLargeDescriptionStory: StoryObj<typeof OperationSummary> = {
  render: () => {
    const description =
      'Покупка канцелярских товаров для офиса — ручки, блокноты и стикеры. Обеспечение рабочей зоны необходимыми мелочами для комфортной работы.';

    const operationSummary = createOperationSummary();

    return (
      <>
        <div>
          <p>Полный текст описания: {description}</p>
        </div>
        {operationSummary.createComponent()}
      </>
    );
  },
};
