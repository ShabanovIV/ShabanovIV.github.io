import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { GenericList } from './GenericList';
import {
  createCollection,
  createOperation,
  createOperationSummary,
  createProductSummary,
} from '../Helpers/GenericListItemFactory';

const meta: Meta<typeof GenericList> = {
  title: 'components/GenericList',
  component: GenericList,
};

export default meta;

export const GenericListProductSummaryListStory: StoryObj<typeof GenericList> = {
  render: () => {
    const args = {
      isGrid: true,
      items: createCollection(5, createProductSummary),
    };

    return (
      <>
        <GenericList {...args} />
      </>
    );
  },
};

export const GenericListOperationListStory: StoryObj<typeof GenericList> = {
  render: () => {
    const args = {
      isGrid: false,
      items: createCollection(20, createOperation),
    };

    return (
      <>
        <GenericList {...args} />
      </>
    );
  },
};

export const GenericListOperationSummaryListStory: StoryObj<typeof GenericList> = {
  render: () => {
    const args = {
      isGrid: false,
      items: createCollection(20, createOperationSummary),
    };

    return (
      <>
        <GenericList {...args} />
      </>
    );
  },
};
