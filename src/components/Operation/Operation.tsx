import React from 'react';
import styles from './Operation.module.scss';
import { IRenderItem } from '../RenderList/RenderList';
import { rubFormatter } from '../formats';

export class OperationProps implements IRenderItem {
  constructor(id: string, amount: number, category: string, title: string, description: string, date: Date) {
    this.id = id;
    this.amount = amount;
    this.category = category;
    this.title = title;
    this.description = description;
    this.date = date;
  }

  public id: string;
  public amount: number;
  public category: string;
  public title: string;
  public description: string;
  public date: Date;

  public get key(): string {
    return this.id;
  }

  public render() {
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
