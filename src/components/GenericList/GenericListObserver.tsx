import React, { useEffect, useRef, useCallback, useState } from 'react';
import { IGenericListItem } from '../Abstract/IGenericListItem';
import GenericList from './GenericList';

export interface IGenericListObserverProps {
  isGrid?: boolean;
  items: IGenericListItem[];
  onLastItem: () => void;
}

const GenericListObserver: React.FC<IGenericListObserverProps> = ({ isGrid, items, onLastItem }) => {
  const [lastItemKey, setLastItemKey] = useState('');
  const prevLastItemKey = useRef('');
  const lastItemRef = useRef<HTMLLIElement | null>(null);
  const hasCalledOnLastItem = useRef(false);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry?.isIntersecting && !hasCalledOnLastItem.current) {
        hasCalledOnLastItem.current = true;
        onLastItem();
      }
    },
    [onLastItem]
  );

  useEffect(() => {
    if (lastItemKey === prevLastItemKey.current) {
      return;
    } else {
      prevLastItemKey.current = lastItemKey;
    }

    const observer = new IntersectionObserver(handleIntersection, { threshold: 1 });

    const currentLastItem = lastItemRef.current; // Сохраняем текущее значение рефа
    if (currentLastItem) {
      observer.observe(currentLastItem);
    }

    return () => {
      if (currentLastItem) {
        observer.unobserve(currentLastItem); // Используем сохранённое значение
      }
    };
  }, [handleIntersection, lastItemKey]);

  useEffect(() => {
    hasCalledOnLastItem.current = false; // Сбрасываем флаг при изменении списка
  }, [lastItemKey]);

  return (
    <GenericList
      isGrid={isGrid}
      items={items}
      lastItemRef={lastItemRef}
      onLastItemChanged={setLastItemKey}
    ></GenericList>
  );
};

export default GenericListObserver;
