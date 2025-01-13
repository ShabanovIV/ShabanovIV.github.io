import { IRenderItem } from '../RenderList/RenderList';
import { OperationProps } from '../Operation/Operation';
import { OperationSummaryProps } from '../OperationSummary/OperationSummary';
import { ProductSummaryProps } from '../ProductSummary/ProductSummary';
import { products } from './Products';
import OperationCategories from './Operations.json';
import { v4 as uuidv4 } from 'uuid';

export const createCollection = (count: number, handleCreate: () => IRenderItem): IRenderItem[] => {
  const operations: IRenderItem[] = [];

  while (count-- > 0) {
    operations.push(handleCreate());
  }

  return operations;
};

// Продукт
export const createProductSummary = (): IRenderItem => {
  const productInfo = getRandomProductInfo();
  const productSummary = new ProductSummaryProps(
    uuidv4(),
    getRandomInt(2000, 100000),
    productInfo.image,
    productInfo.title,
    productInfo.description
  );

  return productSummary;
};

// Операция
export const createOperation = (): IRenderItem => {
  const categoryInfo = getRandomOperationCategory();

  return new OperationProps(
    uuidv4(),
    Math.floor(Math.random() * 10000),
    categoryInfo.name,
    categoryInfo.title,
    categoryInfo.description,
    new Date()
  );
};

// Сводная по операции
export const createOperationSummary = (): IRenderItem => {
  const categoryInfo = getRandomOperationCategory();
  const operationSummary = new OperationSummaryProps();
  operationSummary.id = uuidv4();
  operationSummary.title = categoryInfo.title;
  operationSummary.category = categoryInfo.name;
  operationSummary.amount = Math.floor(Math.random() * 10000);
  operationSummary.description = categoryInfo.description;

  return operationSummary;
};

function getRandomOperationCategory() {
  const randomIndex = Math.floor(Math.random() * OperationCategories.length);
  return OperationCategories[randomIndex];
}

function getRandomProductInfo() {
  const randomIndex = getRandomInt(0, products.length - 1);
  return products[randomIndex];
}

function getRandomInt(from: number, to: number): number {
  if (from > to) {
    throw new Error("'from' должно быть меньше или равно 'to'");
  }
  return Math.floor(Math.random() * (to - from + 1)) + from;
}
