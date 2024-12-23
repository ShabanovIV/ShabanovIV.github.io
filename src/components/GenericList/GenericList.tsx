import React from 'react';
import styles from './GenericList.module.scss';
import { IGenericListItem } from '../Abstract/IGenericListItem';

export interface IGenericListProps<TItem extends IGenericListItem> {
  isGrid?: boolean;
  items: TItem[];
  lastItemRef?: React.MutableRefObject<HTMLLIElement | null>;
}

export const GenericList = <TItem extends IGenericListItem>({
  isGrid,
  items,
  lastItemRef,
}: IGenericListProps<TItem>) => {
  const memoItems = React.useMemo(() => {
    return items.map((item, index) => (
      <MemoizedListItem key={item.key} item={item} ref={setRefForLast(items.length, index, lastItemRef)} />
    ));
  }, [items, lastItemRef]);

  return <ul className={`${styles.list} ${isGrid ? styles.listGrid : ''}`}>{memoItems}</ul>;
};

type ListItemProps<TItem> = {
  item: TItem;
};

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps<IGenericListItem>>(({ item }, ref) => {
  return (
    <li id={item.key} ref={ref} className={styles.listItem}>
      {item.createComponent()}
    </li>
  );
});

ListItem.displayName = 'ListItem';

const MemoizedListItem = React.memo(ListItem);

const setRefForLast = (length: number, index: number, lastItemRef?: React.MutableRefObject<HTMLLIElement | null>) => {
  return index === length - 1 ? lastItemRef : null;
};

export default GenericList;
