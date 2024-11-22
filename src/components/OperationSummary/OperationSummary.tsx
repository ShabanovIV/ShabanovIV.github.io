import React, { FC } from 'react';
import styles from './OperationSummary.module.scss';

export interface OperationSummaryProps {
  amount: number;
  category: string;
  title: string;
  description: string;
}

const OperationSummary: FC<OperationSummaryProps> = ({ amount, category, title, description }) => {
  const truncateDescription = description.length > 50 ? description.slice(0, 50) + '...' : description;

  return (
    <div className={styles.operationSummary}>
      <h3>{title}</h3>
      <p>Категория: {category}</p>
      <p>Сумма: {amount} ₽</p>
      <p title={description}>Описание: {truncateDescription}</p>
    </div>
  );
};

export default OperationSummary;
