import React from 'react';
import styles from './Operation.module.scss';
import { IGenericListItem } from '../Abstract/IGenericListItem';
import { rubFormatter } from '../formats';

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
  const formattedAmount = rubFormatter.format(amount);
  return (
    <div className={styles.operation}>
      <h3>
        {title} от {date.toLocaleDateString()}
      </h3>
      <p>
        {category} {formattedAmount}
      </p>
      <p>{description}</p>
    </div>
  );
};

export default Operation;
