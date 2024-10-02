import React from 'react';
import styles from './AddToCart.module.css';

export interface AddToCartProps {
  count: number;
}

const AddToCart: React.FC<AddToCartProps> = ({ count }) => {
  if (count === 0) {
    return (
      <div className={styles.containerCart}>
        <button className={styles.buttonInCart}>В корзину</button>
      </div>
    );
  }

  return (
    <div className={styles.containerCart}>
      <button className={styles.buttonCart}>-</button>
      <input className={styles.inputCart} title="Введите количество товара" type="text" value={count} />
      <button className={styles.buttonCart}>+</button>
    </div>
  );
};

export default AddToCart;
