import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Operation from './Operation';
import { createOperation } from '../Helpers/RenderItemFactory';

const meta: Meta<typeof Operation> = {
  title: 'components/Operation',
  component: Operation,
};

export default meta;

export const OperationStory: StoryObj<typeof Operation> = {
  render: () => {
    const operation = createOperation();
    return (
      <>
        <div>{operation.render()}</div>
      </>
    );
  },
};
