import React from 'react';
import styles from './AddToCart.module.scss';
import { TextButton } from '../ui/TextButton/TextButton';

export interface AddToCartProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onCountChange: React.ChangeEventHandler<HTMLInputElement>;
}

const AddToCart: React.FC<AddToCartProps> = ({ count, onIncrement, onDecrement, onCountChange }) => {
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
        handleClick={onDecrement}
      />
      <input
        className={styles.inputCart}
        title="Введите количество товара"
        type="text"
        value={count}
        onChange={onCountChange}
      />
      <TextButton
        text={'+'}
        borderVisible={true}
        borderRounded={false}
        maxTextLength={Infinity}
        handleClick={onIncrement}
      />
    </div>
  );
};

export default AddToCart;
