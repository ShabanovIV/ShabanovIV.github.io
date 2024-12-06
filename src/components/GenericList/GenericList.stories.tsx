import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { GenericList } from './GenericList';
import {
  createCollection,
  createOperation,
  createOperationSummary,
  createProductSummary,
} from '../Helpers/GenericListItemFactory';
import GenericListObserver, { IGenericListObserverProps } from './GenericListObserver';
import { TextButton } from '../ui/TextButton/TextButton';

const meta: Meta<typeof GenericList> = {
  title: 'components/GenericList',
  component: GenericList,
};

export default meta;

const fetchProducts = () => createCollection(20, createProductSummary);
const fetchOperations = () => createCollection(20, createOperation);

const GenericListLazyLoadStory: React.FC<IGenericListObserverProps> = ({ isGrid, fetchItems }) => {
  const [isGridStore, setIsGrid] = useState(isGrid);

  function handleChange(): void {
    setIsGrid((prevIsGridStore) => !prevIsGridStore);
  }

  return (
    <div>
      <TextButton
        text={`Использовать сетку: ${isGridStore}`}
        borderVisible={false}
        borderRounded={true}
        maxTextLength={Infinity}
        handleClick={handleChange}
      />
      <GenericListObserver isGrid={isGridStore} fetchItems={fetchItems} />
    </div>
  );
};

export const GenericListProductSummaryLazyLoadStory: StoryObj<typeof GenericListObserver> = {
  render: () => {
    return <GenericListLazyLoadStory isGrid={true} fetchItems={fetchProducts}></GenericListLazyLoadStory>;
  },
};

export const GenericListOperationLazyLoadStory: StoryObj<typeof GenericListObserver> = {
  render: () => {
    return <GenericListLazyLoadStory isGrid={false} fetchItems={fetchOperations}></GenericListLazyLoadStory>;
  },
};

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
