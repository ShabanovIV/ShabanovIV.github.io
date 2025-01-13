import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import OperationForm from './OperationForm';
import { OperationProps } from '../../components/Operation/Operation';
import operationCategories from '../../components/Helpers/Operations.json';

const meta: Meta<typeof OperationForm> = {
  title: 'forms/OperationForm',
  component: OperationForm,
};

export default meta;

// Данные категорий
const categoryNames: string[] = operationCategories.map((category) => category.name);

// Сценарий для добавления новой операции
export const AddOperation: StoryObj<typeof OperationForm> = {
  render: () => {
    return <RenderAddOperation />;
  },
};

// Сценарий для редактирования существующей операции
export const EditOperation: StoryObj<typeof OperationForm> = {
  render: () => {
    return <RenderEditOperation />;
  },
};

const RenderAddOperation = () => {
  const [newOperation, setNewOperation] = useState<OperationProps | null>(null);

  const handleSubmit = (data: Omit<OperationProps, 'id' | 'createComponent'>) => {
    const createdOperation = new OperationProps(
      `${Date.now()}`, // Генерация уникального ID
      data.amount,
      data.category,
      data.title,
      data.description,
      new Date(data.date)
    );
    setNewOperation(createdOperation);
  };

  return (
    <div>
      <OperationForm categories={categoryNames} onSubmit={handleSubmit} />
      <h3>Добавленная операция:</h3>
      {newOperation ? newOperation.render() : <p>Пока ничего не добавлено</p>}
    </div>
  );
};

const RenderEditOperation = () => {
  const initialOperation = new OperationProps(
    '1',
    1500,
    categoryNames[2],
    'Купить новый ноутбук',
    'Покупка ноутбука для работы.',
    new Date()
  );

  const [modifiedOperation, setModifiedOperation] = useState<OperationProps>(
    new OperationProps(
      initialOperation.id,
      initialOperation.amount,
      initialOperation.category,
      initialOperation.title,
      initialOperation.description,
      new Date(initialOperation.date)
    )
  );

  const handleSubmit = (data: Omit<OperationProps, 'id' | 'createComponent'>) => {
    const updatedOperation = new OperationProps(
      modifiedOperation.id,
      data.amount,
      data.category,
      data.title,
      data.description,
      new Date(data.date)
    );
    setModifiedOperation(updatedOperation);
  };

  return (
    <div>
      <OperationForm operation={modifiedOperation} categories={categoryNames} onSubmit={handleSubmit} />
      <h3>Исходная операция:</h3>
      {initialOperation.render()}
      <h3>Обновлённая операция:</h3>
      {modifiedOperation.render()}
    </div>
  );
};
