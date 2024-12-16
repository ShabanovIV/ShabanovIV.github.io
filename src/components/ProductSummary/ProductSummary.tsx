import React from 'react';
import styles from './ProductSummary.module.scss';
import AddToCart from '../AddToCart/AddToCart';
import { IGenericListItem } from '../Abstract/IGenericListItem';
import { rubFormatter } from '../formats';

export class ProductSummaryProps implements IGenericListItem {
  id: string;
  price: number;
  imageUrl: string;
  title: string;
  description: string;
  onIncrement?: () => void;
  onDecrement?: () => void;
  onCountChange?: React.ChangeEventHandler<HTMLInputElement>;

  constructor(id: string, price: number, imageUrl: string, title: string, description: string) {
    this.id = id;
    this.price = price;
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
  }

  public get key() {
    return this.id;
  }

  public createComponent() {
    return <ProductSummary {...this} />;
  }
}

const ProductSummary: React.FC<ProductSummaryProps> = ({
  price,
  imageUrl,
  title,
  description,
  onIncrement,
  onDecrement,
  onCountChange,
}) => {
  const truncatedDescription = description.length > 50 ? `${description.slice(0, 50)}...` : description;
  const formattedPrice = rubFormatter.format(price);
  return (
    <div className={styles.productCard}>
      <img src={imageUrl} alt={title} className={styles.productImage} />
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{title}</h3>
        <p className={styles.productDescription} title={description}>
          {truncatedDescription}
        </p>
        <div className={styles.priceAndCart}>
          {formattedPrice}
          <AddToCart count={0} onIncrement={onIncrement} onDecrement={onDecrement} onCountChange={onCountChange} />
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;
