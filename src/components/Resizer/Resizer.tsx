import React, { FC, useMemo, useRef, useState } from 'react';
import cn from 'clsx';
import styles from './Resizer.module.scss';
import resizeButton from '../Images/resizeButton.png';

export type Size = { width: number; height: number };

export type ResizerProps = {
  className?: string;
  initialWidth: number;
  initialHeight: number;
  children: (size: Size) => React.ReactNode;
};

const MIN_SIZE = 32;

export const Resizer: FC<ResizerProps> = ({ className, children, initialWidth, initialHeight }) => {
  const root = useRef<HTMLDivElement | null>(null);

  const [size, setSize] = useState({ width: initialWidth, height: initialHeight });

  const sizesCopy = useRef(size);
  sizesCopy.current = size;

  const { onMouseDownResizer } = useMemo(() => {
    let start = { x: 0, y: 0, width: MIN_SIZE, height: MIN_SIZE };

    const safeSetSizes = (_size: Size) => {
      setSize({
        width: _size.width < MIN_SIZE ? MIN_SIZE : Math.round(_size.width),
        height: _size.height < MIN_SIZE ? MIN_SIZE : Math.round(_size.height),
      });
    };
    const move = (e: MouseEvent) => {
      e.preventDefault();
      if (!root.current) return;
      const rect = root.current.getBoundingClientRect();
      const x = start.x - (e.clientX - rect.x);
      const y = start.y - (e.clientY - rect.y);
      safeSetSizes({ width: start.width - x, height: start.height - y });
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };

    return {
      onMouseDownResizer: (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!root.current) return;
        const rect = root.current.getBoundingClientRect();
        start = {
          x: e.clientX - rect.x,
          y: e.clientY - rect.y,
          width: sizesCopy.current.width,
          height: sizesCopy.current.height,
        };
        window.addEventListener('mousemove', move);
        window.addEventListener('mouseup', up);
      },
    };
  }, []);

  return (
    <div ref={root} className={cn(styles.root, className)} style={{ width: size.width, height: size.height }}>
      <div className={styles.wrapper}>{children(size)}</div>
      <button className={styles.resizer} onMouseDown={onMouseDownResizer}>
        <img draggable={false} src={resizeButton} alt="Изменение размера" />
      </button>
    </div>
  );
};
