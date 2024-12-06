import React from 'react';
import styles from './CartItem.module.scss';
import removeIconLight from '../Images/Remove_light.png';
import removeIconDark from '../Images/Remove_dark.png';
import { Themes, useTheme } from '../ThemeProvider/ThemeProvider';
import { ImageButton, Sizes } from '../ui/ImageButton/ImageButton';
import { rubFormatter } from '../formats';

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  image: string;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ id, name, price, image, onRemove }) => {
  const { theme } = useTheme();
  const formattedPrice = rubFormatter.format(price);

  return (
    <div className={styles.cartItem}>
      <img src={image} alt={name} className={styles.cartItemImage} />
      <div className={styles.cartItemDetails}>
        <div className={styles.cartItemHeader}>
          <h3>{name}</h3>
          <p>{formattedPrice}</p>
        </div>
        <div className={styles.cartItemRemoveButton}>
          <ImageButton
            src={theme === Themes.Dark ? removeIconDark : removeIconLight}
            size={Sizes.Middle}
            alt="Удалить товар"
            handleClick={() => onRemove(id)}
          ></ImageButton>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
