import React from 'react';
import styles from './TextButton.module.scss';

export interface ITextButtonProps {
  text: string;
  maxTextLength: number;
  borderVisible: boolean;
  borderRounded: boolean;
  style?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const TextButton: React.FC<ITextButtonProps> = ({
  text,
  maxTextLength,
  borderVisible,
  borderRounded,
  style,
  handleClick,
}) => {
  const truncatedText =
    maxTextLength > 0 && maxTextLength < text.length ? `${text.substring(0, maxTextLength)}...` : text;
  const classNames = `${borderVisible ? styles.borderVisible : styles.borderHide} ${
    borderRounded && styles.borderRound
  }`;

  return (
    <button title={text} onClick={handleClick} className={`${styles.button} ${classNames} ${style}`}>
      {truncatedText}
    </button>
  );
};
