import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ProductSummary, { ProductSummaryProps } from '../../components/ProductSummary/ProductSummary';
import ProductForm from './ProductForm';
import { createProductSummary } from '../../components/Helpers/GenericListItemFactory';

const meta: Meta<typeof ProductSummary> = {
  title: 'forms/ProductForm',
  component: ProductSummary,
};

export default meta;

// Исходный продукт
const initialProduct = createProductSummary();

// Сценарий для добавления нового продукта
export const AddProduct: StoryObj<typeof ProductSummary> = {
  render: () => {
    return <RenderAddProduct />;
  },
};

// Сценарий для редактирования существующего продукта
export const EditProduct: StoryObj<typeof ProductSummary> = {
  render: () => {
    return <RenderEditProduct />;
  },
};

const RenderAddProduct = () => {
  const [newProduct, setNewProduct] = useState<ProductSummaryProps | null>(null);

  const handleAdd = (productData: Omit<ProductSummaryProps, 'id' | 'createComponent'>) => {
    const createdProduct = new ProductSummaryProps(
      `${Date.now()}`, // Уникальный ID
      productData.price,
      productData.imageUrl,
      productData.title,
      productData.description
    );
    setNewProduct(createdProduct);
  };

  return (
    <div>
      <h3>Добавление нового продукта</h3>
      <ProductForm onSubmit={handleAdd} />
      <h3>Добавленный продукт:</h3>
      {newProduct ? newProduct.createComponent() : <p>Продукт ещё не добавлен</p>}
    </div>
  );
};

const RenderEditProduct = () => {
  const initialProductAsProps = initialProduct as ProductSummaryProps;
  const [modifiedProduct, setModifiedProduct] = useState<ProductSummaryProps>(
    new ProductSummaryProps(
      initialProductAsProps.id,
      initialProductAsProps.price,
      initialProductAsProps.imageUrl,
      initialProductAsProps.title,
      initialProductAsProps.description
    )
  );

  const handleEdit = (productData: Omit<ProductSummaryProps, 'id' | 'createComponent'>) => {
    const updatedProduct = new ProductSummaryProps(
      modifiedProduct.id,
      productData.price,
      productData.imageUrl,
      productData.title,
      productData.description
    );
    setModifiedProduct(updatedProduct);
  };

  return (
    <div>
      <h3>Редактирование продукта</h3>
      <ProductForm product={modifiedProduct} onSubmit={handleEdit} />
      <h3>Обновлённый продукт:</h3>
      {modifiedProduct.createComponent()}
    </div>
  );
};
