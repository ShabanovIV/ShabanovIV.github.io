import React, { useEffect, useRef, useState, useCallback } from 'react';
import { IGenericListItem } from '../Abstract/IGenericListItem';
import GenericList from './GenericList';

export interface IGenericListObserverProps {
  isGrid?: boolean;
  fetchItems: () => IGenericListItem[];
}

const GenericListObserver: React.FC<IGenericListObserverProps> = ({ isGrid, fetchItems }) => {
  const [items, setItems] = useState(fetchItems());
  const lastItemRef = useRef<HTMLLIElement | null>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry?.isIntersecting) {
        setItems((prevItems) => [...prevItems, ...fetchItems()]);
      }
    },
    [fetchItems]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

    const currentLastItem = lastItemRef.current;
    if (currentLastItem) {
      observer.observe(currentLastItem);
    }

    return () => {
      if (currentLastItem) {
        observer.unobserve(currentLastItem);
      }
    };
  }, [handleIntersection, items]);

  return <GenericList isGrid={isGrid} items={items} lastItemRef={lastItemRef}></GenericList>;
};

export default GenericListObserver;
