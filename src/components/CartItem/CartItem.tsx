import React from 'react';
import styles from './CartItem.module.scss';
import removeIconLight from '../Images/Remove_light.png';
import removeIconDark from '../Images/Remove_dark.png';
import { Themes, useTheme } from '../ThemeProvider/ThemeProvider';

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  image: string;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ id, name, price, image, onRemove }) => {
  const { theme } = useTheme();

  return (
    <div className={styles.cartItem}>
      <img src={image} alt={name} className={styles.cartItemImage} />
      <div className={styles.cartItemDetails}>
        <div className={styles.cartItemHeader}>
          <h3>{name}</h3>
          <p>{price} ₽</p>
        </div>
        <button onClick={() => onRemove(id)} className={styles.cartItemRemoveButton}>
          <img src={theme === Themes.Dark ? removeIconDark : removeIconLight} alt="Удалить товар" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
