import React from 'react';
import styles from './GenericList.module.scss';
import { IGenericListItem } from '../Abstract/IGenericListItem';

export interface IGenericListProps<TItem extends IGenericListItem> {
  isGrid?: boolean;
  items: TItem[];
  lastItemRef?: React.MutableRefObject<HTMLLIElement | null>;
  onLastItemChanged: (key: string) => void;
}

export const GenericList = <TItem extends IGenericListItem>({
  isGrid,
  items,
  lastItemRef,
  onLastItemChanged,
}: IGenericListProps<TItem>) => {
  if (items.length === 0) {
    return <div className={styles.empty}>No items to display</div>;
  }

  const memoItems = items.map((item, index) => (
    <MemoizedListItem key={item.key} item={item} ref={setRefForLast(items, index, onLastItemChanged, lastItemRef)} />
  ));

  return <ul className={`${styles.list} ${isGrid ? styles.listGrid : ''}`}>{memoItems}</ul>;
};

type ListItemProps<TItem> = {
  item: TItem;
};

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps<IGenericListItem>>(({ item }, ref) => (
  <li id={item.key} ref={ref} className={styles.listItem}>
    {item.createComponent()}
  </li>
));

ListItem.displayName = 'ListItem';

const MemoizedListItem = React.memo(ListItem);

const setRefForLast = (
  items: IGenericListItem[],
  index: number,
  onLastItemChanged: (key: string) => void,
  lastItemRef?: React.MutableRefObject<HTMLLIElement | null>
) => {
  return (element: HTMLLIElement | null) => {
    if (index === items.length - 1 && lastItemRef) {
      lastItemRef.current = element;
      onLastItemChanged(items[items.length - 1].key);
    }
  };
};

export default GenericList;
