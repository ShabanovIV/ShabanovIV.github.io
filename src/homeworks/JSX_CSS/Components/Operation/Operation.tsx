import React from 'react';
import styles from './Operation.module.scss';

export interface OperationProps {
  amount: number;
  category: string;
  title: string;
  description: string;
  date: Date;
}

const Operation: React.FC<OperationProps> = ({ amount, category, title, description, date }) => {
  return (
    <div className={styles.operation}>
      <h2>{title}</h2>
      <p>Дата: {date.toLocaleDateString()}</p>
      <p>Категория: {category}</p>
      <p>Сумма: {amount} ₽</p>
      <p>Описание: {description}</p>
      <button disabled>Редактировать</button>
    </div>
  );
};

export default Operation;
