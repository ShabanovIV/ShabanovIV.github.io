import React from 'react';
import styles from './ProductSummary.module.scss';
import AddToCart from '../AddToCart/AddToCart';
import { IGenericListItem } from '../Abstract/IGenericListItem';

export class ProductSummaryProps implements IGenericListItem {
  id: string;
  price: number;
  imageUrl: string;
  title: string;
  description: string;

  public get key() {
    return this.id;
  }

  public createComponent() {
    return <ProductSummary {...this} />;
  }
}

const ProductSummary: React.FC<ProductSummaryProps> = ({ price, imageUrl, title, description }) => {
  const truncatedDescription = description.length > 50 ? `${description.slice(0, 50)}...` : description;

  return (
    <div className={styles.productCard}>
      <img src={imageUrl} alt={title} className={styles.productImage} />
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{title}</h3>
        <p className={styles.productDescription} title={description}>
          {truncatedDescription}
        </p>
        <div className={styles.priceAndCart}>
          {price} ₽
          <AddToCart count={0} />
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;
