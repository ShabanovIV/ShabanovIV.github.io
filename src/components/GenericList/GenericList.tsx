import React from 'react';
import styles from './GenericList.module.scss';
import { IGenericListItem } from '../Abstract/IGenericListItem';

export interface IGenericListProps<TItem extends IGenericListItem> {
  isGrid?: boolean;
  items: TItem[];
}

export const GenericList = <TItem extends IGenericListItem>({ isGrid, items }: IGenericListProps<TItem>) => {
  return (
    <ul className={`${styles.list} ${isGrid ? styles.listGrid : ''}`}>
      {items.map((item) => (
        <li key={item.key} className={styles.listItem}>
          {item.createComponent()}
        </li>
      ))}
    </ul>
  );
};

export default GenericList;
