import { Meta, StoryObj } from '@storybook/react';
import ProductSummary from './ProductSummary';
import React from 'react';
import { createProductSummary } from '../Helpers/GenericListItemFactory';

const meta: Meta<typeof ProductSummary> = {
  title: 'components/ProductSummary',
  component: ProductSummary,
};

export default meta;

export const ProductSummaryLargeDescriptionStory: StoryObj<typeof ProductSummary> = {
  render: () => {
    const description =
      'Покупка канцелярских товаров для офиса — ручки, блокноты и стикеры. Обеспечение рабочей зоны необходимыми мелочами для комфортной работы.';

    const productSummary = createProductSummary();

    return (
      <>
        <div>
          <p>Полный текст описания: {description}</p>
        </div>
        {productSummary.createComponent()}
      </>
    );
  },
};
