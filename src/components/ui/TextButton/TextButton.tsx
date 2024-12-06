import React from 'react';
import styles from './TextButton.module.scss';

export interface ITextButtonProps {
  text: string;
  maxTextLength: number;
  borderVisible: boolean;
  borderRounded: boolean;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const TextButton: React.FC<ITextButtonProps> = ({
  text,
  maxTextLength,
  borderVisible,
  borderRounded,
  handleClick,
}) => {
  const truncatedText =
    maxTextLength > 0 && maxTextLength < text.length ? `${text.substring(0, maxTextLength)}...` : text;
  const classNames = `${styles.button} ${borderVisible ? styles.borderVisible : styles.borderHide} ${
    borderRounded ? styles.borderRound : ''
  }`;
  console.log(classNames);

  return (
    <button title={text} onClick={handleClick} className={classNames}>
      {truncatedText}
    </button>
  );
};
