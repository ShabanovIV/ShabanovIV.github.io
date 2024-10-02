import React from 'react';
import styles from './ChildModal.module.css';

export interface ChildrenProps {
  visible: boolean;
  children: React.ReactNode;
}

export const ChildModal: React.FC<ChildrenProps> = ({ visible, children }) => {
  if (!visible) return null;

  return (
    <div className={styles.childModalOverlay}>
      <div className={styles.childModalWindow}>
        <div className={styles.childModalContent}>{children}</div>
        <button className={styles.childModalCloseButton}>Закрыть</button>
      </div>
    </div>
  );
};
