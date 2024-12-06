import React from 'react';
import styles from './AddToCart.module.scss';
import { TextButton } from '../ui/TextButton/TextButton';

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
        <TextButton
          text={'В корзину'}
          borderVisible={false}
          borderRounded={true}
          maxTextLength={Infinity}
          handleClick={undefined}
        />
      </div>
    );
  }

  return (
    <div className={styles.containerCart}>
      <TextButton
        text={'-'}
        borderVisible={true}
        borderRounded={false}
        maxTextLength={Infinity}
        handleClick={undefined}
      />
      <input
        className={styles.inputCart}
        title="Введите количество товара"
        type="text"
        value={count}
        onChange={handleInputChange}
      />
      <TextButton
        text={'+'}
        borderVisible={true}
        borderRounded={false}
        maxTextLength={Infinity}
        handleClick={undefined}
      />
    </div>
  );
};

export default AddToCart;
