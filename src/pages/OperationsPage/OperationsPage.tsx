import React from 'react';
import GenericListObserver from '../../components/GenericList/GenericListObserver';
import { createCollection, createOperation } from '../../components/Helpers/GenericListItemFactory';
import styles from './OperationsPage.module.scss';

const OperationsPage: React.FC = () => {
  const fetchOperations = () => createCollection(20, createOperation);
  return (
    <div className={styles.container}>
      <GenericListObserver isGrid={false} fetchItems={fetchOperations} />
    </div>
  );
};

export default OperationsPage;
