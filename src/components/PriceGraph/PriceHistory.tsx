/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useRef } from 'react';
import { useTheme } from '../ThemeProvider/ThemeProvider';

export interface HistoryPoint {
  x: string;
  y: number;
}

export interface IPriceHistoryProps {
  points: HistoryPoint[];
  width?: number;
  height?: number;
}

const PriceHistory: React.FC<IPriceHistoryProps> = ({ points, width = 500, height = 300 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { themeValues } = useTheme();
  const padding = 40;
  const canvasStyles = css`
    position: absolute;
    width: ${width}px;
    height: ${height}px;
  `;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Set background color to transparent
    ctx.fillStyle = 'transparent';
    ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = '#007bff';
    ctx.lineWidth = 2;
    ctx.font = '10px Arial';
    ctx.fillStyle = '#000000';

    // Calculate scaling factors
    const maxY = Math.max(...points.map((d) => d.y));
    const minY = Math.min(...points.map((d) => d.y));
    const scaleX = (width - padding * 2) / (points.length - 1);
    const scaleY = (height - padding * 2) / (maxY - minY || 1);

    // Draw axes
    ctx.strokeStyle = themeValues.BorderColor;
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.rect(padding, padding, width - padding * 2, height - padding * 2);
    ctx.stroke();

    // Plot data points and draw connecting lines
    ctx.strokeStyle = '#007bff';
    ctx.lineWidth = 2;
    ctx.beginPath(); // Start drawing the line path

    points.forEach((point, index) => {
      const x = padding + index * scaleX;
      const y = height - padding - (point.y - minY) * scaleY;

      if (index === 0) {
        ctx.moveTo(x, y); // Move to the first point
      } else {
        ctx.lineTo(x, y); // Draw a line to the next point
      }

      // Draw labels
      ctx.fillStyle = themeValues.TextColor;
      ctx.fillText(point.x, x - 10, height - padding + 20);
    });

    ctx.stroke(); // Actually draw the path
  }, [points, width, height, themeValues]);

  return <canvas css={canvasStyles} ref={canvasRef} width={width} height={height} />;
};

export default PriceHistory;
