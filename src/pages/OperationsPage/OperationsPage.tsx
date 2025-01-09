import React, { useState } from 'react';
import GenericListObserver from '../../components/GenericList/GenericListObserver';
import { createCollection, createOperation } from '../../components/Helpers/GenericListItemFactory';
import styles from './OperationsPage.module.scss';

const OperationsPage: React.FC = () => {
  const [operations, setOperations] = useState(createCollection(20, createOperation));

  const fetchOperations = () => {
    setOperations((prevOperations) => [...prevOperations, ...createCollection(20, createOperation)]);
  };

  return (
    <div className={styles.container}>
      <GenericListObserver isGrid={false} items={operations} onLastItem={fetchOperations} />
    </div>
  );
};

export default OperationsPage;
