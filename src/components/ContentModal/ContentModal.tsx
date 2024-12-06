import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ContentModal.module.scss';
import { useLang } from '../LangProvider/LangProvider';
import { TextButton } from '../ui/TextButton/TextButton';

export interface ContentModalProps {
  visible: boolean;
  children: string;
  handleClose: () => void;
}

export const ContentModal: React.FC<ContentModalProps> = ({ visible, children, handleClose }) => {
  const { getTranslate } = useLang();
  if (!visible) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modalWindow}>
        <div className={styles.modalContent}>{children}</div>
        <TextButton
          text={getTranslate('contentModal.close')}
          borderVisible={false}
          borderRounded={true}
          maxTextLength={Infinity}
          handleClick={handleClose}
        />
      </div>
    </div>,
    document.body
  );
};
