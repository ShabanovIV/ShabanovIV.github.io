import axios from 'axios';

export interface Operation {
  id: string;
  amount: number;
  category: string;
  title: string;
  description: string;
  date: Date;
}

// Получить список всех операций
export const getOperations = async (): Promise<Operation[]> => {
  const response = await axios.get('/operations');
  return response.data;
};

// Получить операцию по id
export const getOperationById = async (id: string): Promise<Operation> => {
  const response = await axios.get(`/operations/${id}`);
  return response.data;
};

// Добавить новую операцию
export const createOperation = async (operation: Omit<Operation, 'id' | 'date'>): Promise<string> => {
  const response = await axios.post('/operations', operation);
  return response.data.message;
};

// Удалить операцию по id
export const deleteOperation = async (id: string): Promise<string> => {
  const response = await axios.delete(`/operations/${id}`);
  return response.data.message;
};
