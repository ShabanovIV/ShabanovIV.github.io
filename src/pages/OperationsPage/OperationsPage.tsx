import React, { useState } from 'react';
import RenderListObserver from '../../components/RenderList/RenderListObserver';
import { createCollection, createOperation } from '../../components/Helpers/RenderItemFactory';
import styles from './OperationsPage.module.scss';

const OperationsPage: React.FC = () => {
  const [operations, setOperations] = useState(createCollection(20, createOperation));

  const fetchOperations = () => {
    setOperations((prevOperations) => [...prevOperations, ...createCollection(20, createOperation)]);
  };

  return (
    <div className={styles.container}>
      <RenderListObserver isGrid={false} items={operations} onLastItem={fetchOperations} />
    </div>
  );
};

export default OperationsPage;
