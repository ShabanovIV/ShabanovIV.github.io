import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Resizer } from '../Resizer/Resizer';
import AppLayout from '../AppLayout/AppLayout';

const meta: Meta<typeof Resizer> = {
  title: 'components/Resizer',
  component: Resizer,
};

export default meta;

const renderPriceHistory = () => {
  return <AppLayout>Измените размер, выполняя растягивание за правый, нижний угол.</AppLayout>;
};

export const PriceHistoryStory: StoryObj<typeof Resizer> = {
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
