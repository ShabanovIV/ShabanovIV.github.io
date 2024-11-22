import { Meta, StoryObj } from '@storybook/react';
import ProductSummary from './ProductSummary';
import redSnowboard from '../StoryImages/RedSnowboard.png';
import greenSnowboard from '../StoryImages/GreenSnowboard.png';

const meta: Meta<typeof ProductSummary> = {
  title: 'components/ProductSummary',
  component: ProductSummary,
};

export default meta;

export const ProductStory: StoryObj<typeof ProductSummary> = {
  args: {
    price: 999,
    imageUrl: greenSnowboard,
    title: 'Бюджетный сноуборд',
    description: 'Неплохой вариант.',
  },
};

export const ProductWithLongDescription: StoryObj<typeof ProductSummary> = {
  args: {
    price: 9999,
    imageUrl: redSnowboard,
    title: 'Профессиональный сноуборд',
    description:
      'Этот сноуборд идеально подходит для профессионалов. Он создан с использованием самых современных технологий, которые обеспечивают легкость, прочность и стабильность при любых условиях катания. Длинное описание обрезается, если превышает допустимую длину.',
  },
};
