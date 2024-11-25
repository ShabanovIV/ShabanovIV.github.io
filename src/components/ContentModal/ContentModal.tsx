import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ContentModal.module.scss';
import { useLang } from '../LangProvider/LangProvider';

export interface ContentModalProps {
  visible: boolean;
  children: React.ReactNode;
  handleClose: () => void;
}

export const ContentModal: React.FC<ContentModalProps> = ({ visible, children, handleClose }) => {
  const { getTranslate } = useLang();
  if (!visible) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modalWindow}>
        <div className={styles.modalContent}>{children}</div>
        <button className={styles.modalCloseButton} onClick={handleClose}>
          {getTranslate('contentModal.close')}
        </button>
      </div>
    </div>,
    document.body
  );
};
