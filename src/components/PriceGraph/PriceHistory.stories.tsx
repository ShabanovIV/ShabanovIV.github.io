import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import PriceHistory from './PriceHistory';
import { Resizer, Size } from '../Resizer/Resizer';

const meta: Meta<typeof PriceHistory> = {
  title: 'components/PriceHistory',
  component: PriceHistory,
};

export default meta;

const renderPriceHistory = (size: Size) => {
  const args = {
    points: [
      { x: '01.24', y: 2000 },
      { x: '02.24', y: 2000 },
      { x: '03.24', y: 5000 },
      { x: '04.24', y: 5000 },
      { x: '05.24', y: 4000 },
      { x: '06.24', y: 4000 },
      { x: '07.24', y: 6000 },
      { x: '08.24', y: 6000 },
    ],
    width: size.width,
    height: size.height,
  };
  return <PriceHistory {...args}></PriceHistory>;
};

export const PriceHistoryStory: StoryObj<typeof PriceHistory> = {
  render: () => {
    return (
      <div>
        {
          <Resizer initialHeight={300} initialWidth={500}>
            {renderPriceHistory}
          </Resizer>
        }
      </div>
    );
  },
};
