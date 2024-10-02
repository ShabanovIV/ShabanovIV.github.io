import React from 'react';
import styles from './CartItem.module.css';
import removeIcon from '../Images/Remove.png'; // Путь к иконке удаления
import AddToCart from '../AddToCart/AddToCart';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
  return (
    <div className={styles.cartItem}>
      <img src={item.image} alt={item.name} className={styles.cartItemImage} />
      <div className={styles.cartItemDetails}>
        <div className={styles.cartItemHeader}>
          <h3>{item.name}</h3>
          <p>{item.price} ₽</p>
        </div>
        <button onClick={() => onRemove(item.id)} className={styles.cartItemRemoveButton}>
          <img src={removeIcon} alt="Удалить товар" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
