import React from 'react';
import styles from './Operation.module.scss';
import { IGenericListItem } from '../Abstract/IGenericListItem';

export class OperationProps implements IGenericListItem {
  public id: string;
  public amount: number;
  public category: string;
  public title: string;
  public description: string;
  public date: Date;

  public get key(): string {
    return this.id;
  }

  public createComponent() {
    return <Operation {...this} />;
  }
}

const Operation: React.FC<OperationProps> = ({ amount, category, title, description, date }) => {
  return (
    <div className={styles.operationSummary}>
      <h3>
        {title} от {date.toLocaleDateString()}
      </h3>
      <p>
        {category} {amount} ₽
      </p>
      <p>{description}</p>
    </div>
  );
};

export default Operation;
