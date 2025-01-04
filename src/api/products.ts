import { createProductSummary } from 'src/components/Helpers/GenericListItemFactory';
import { ProductSummaryProps } from '../components/ProductSummary/ProductSummary';

export const getProducts = async (): Promise<ProductSummaryProps[]> => {
  const products: ProductSummaryProps[] = [];
  let count = 20;
  while (count-- > 0) {
    products.push(createProductSummary() as ProductSummaryProps);
  }
  return Promise.resolve(products);
};
