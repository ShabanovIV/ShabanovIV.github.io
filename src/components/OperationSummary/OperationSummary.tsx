import React, { FC } from 'react';
import styles from './OperationSummary.module.scss';
import { IGenericListItem } from '../Abstract/IGenericListItem';
import { rubFormatter } from '../formats';

export class OperationSummaryProps implements IGenericListItem {
  public id: string;
  public amount: number;
  public category: string;
  public title: string;
  public description: string;

  public get key() {
    return `OperationSummaryProps-${this.id}`;
  }

  public createComponent() {
    return <OperationSummary {...this} />;
  }
}

const OperationSummary: FC<OperationSummaryProps> = ({ amount, category, title, description }) => {
  const truncateDescription = description.length > 50 ? `${description.slice(0, 50)}...` : description;
  const formattedAmount = rubFormatter.format(amount);
  return (
    <div className={styles.operationSummary}>
      <h3>{title}</h3>
      <p>
        {category} {formattedAmount}
      </p>
      <p title={description}>{truncateDescription}</p>
    </div>
  );
};

export default OperationSummary;
