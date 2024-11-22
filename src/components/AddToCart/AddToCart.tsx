import React from 'react';
import styles from './AddToCart.module.scss';

export interface AddToCartProps {
  count: number;
}

const AddToCart: React.FC<AddToCartProps> = ({ count }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

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
      <input
        className={styles.inputCart}
        title="Введите количество товара"
        type="text"
        value={count}
        onChange={handleInputChange}
      />
      <button className={styles.buttonCart}>+</button>
    </div>
  );
};

export default AddToCart;