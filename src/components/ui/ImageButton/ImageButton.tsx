import React from 'react';
import styles from './ImageButton.module.scss';

export const Sizes = {
  Small: 'small',
  Middle: 'middle',
  Large: 'large',
} as const;

export type Size = (typeof Sizes)[keyof typeof Sizes];

export interface IImageButtonProps {
  src: string;
  size: Size;
  alt: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const ImageButton: React.FC<IImageButtonProps> = ({ src, size, alt, handleClick }) => {
  return (
    <button onClick={handleClick} className={`${styles.button} ${styles[size]}`}>
      <img src={src} alt={alt} />
    </button>
  );
};
