import React from 'react';
import styles from './ContentModal.module.scss';

export interface ContentModalProps {
  visible: boolean;
  children: React.ReactNode;
}

export const ContentModal: React.FC<ContentModalProps> = ({ visible, children }) => {
  if (!visible) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalWindow}>
        <div className={styles.modalContent}>{children}</div>
        <button className={styles.modalCloseButton}>Закрыть</button>
      </div>
    </div>
  );
};
