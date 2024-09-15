import { v4 as uuidv4 } from 'uuid';
/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 */

/**
 * Тип Category (Категория).
 * @property {string} id - Уникальный идентификатор категории.
 * @property {string} name - Название категории.
 * @property {string} [photo] - URL фотографии категории (опционально).
 */
export type Category = {
  id: string;
  name: string;
  photo?: string;
};

/**
 * Тип Product (Продукт).
 * @property {string} id - Уникальный идентификатор продукта.
 * @property {string} name - Название продукта.
 * @property {string} photo - URL фотографии продукта.
 * @property {string} [desc] - Описание продукта (опционально).
 * @property {string} createdAt - Дата создания продукта.
 * @property {number} [oldPrice] - Старая цена продукта (опционально).
 * @property {number} price - Текущая цена продукта.
 * @property {Category} category - Категория, к которой принадлежит продукт.
 */
export type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

/**
 * Тип Cost (Трата).
 * @property {string} id - Уникальный идентификатор траты.
 * @property {string} name - Название траты.
 * @property {string} [desc] - Описание траты (опционально).
 * @property {string} createdAt - Дата создания траты.
 * @property {string} amount - Сумма траты.
 * @property {Category} category - Категория траты.
 * @property {'Cost'} type - Тип операции (Трата).
 */
export type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: string;
  category: Category;
  type: 'Cost';
};

/**
 * Тип Profit (Доход).
 * @property {string} id - Уникальный идентификатор дохода.
 * @property {string} name - Название дохода.
 * @property {string} [desc] - Описание дохода (опционально).
 * @property {string} createdAt - Дата создания дохода.
 * @property {string} amount - Сумма дохода.
 * @property {Category} category - Категория дохода.
 * @property {'Profit'} type - Тип операции (Доход).
 */
export type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: string;
  category: Category;
  type: 'Profit';
};

/**
 * Создает случайную категорию.
 * @returns {Category} Случайная категория.
 */
export const createRandomCategory = (): Category => {
  return {
    id: uuidv4(),
    name: `Category ${Math.floor(Math.random() * 100)}`,
    photo: Math.random() > 0.5 ? `https://picsum.photos/200/300` : undefined,
  };
};

/**
 * Создает случайный продукт.
 * @param {string} createdAt - Дата создания продукта.
 * @returns {Product} Случайный продукт.
 */
export const createRandomProduct = (createdAt: string): Product => {
  return {
    id: uuidv4(),
    name: `Product ${Math.floor(Math.random() * 100)}`,
    photo: `https://picsum.photos/200/300`,
    desc: Math.random() > 0.5 ? 'Описание продукта' : undefined,
    createdAt,
    oldPrice: Math.random() > 0.5 ? Math.floor(Math.random() * 1000) : undefined,
    price: Math.floor(Math.random() * 1000),
    category: createRandomCategory(),
  };
};

/**
 * Создает случайную операцию (Трата или Доход).
 * @param {string} createdAt - Дата создания операции.
 * @returns {Cost | Profit} Случайная операция (либо трата, либо доход).
 */
export const createRandomOperation = (createdAt: string): Cost | Profit => {
  const isCost = Math.random() > 0.5;

  return {
    id: uuidv4(),
    name: `${isCost ? 'Cost' : 'Profit'} ${Math.floor(Math.random() * 100)}`,
    desc: Math.random() > 0.5 ? 'Описание операции' : undefined,
    createdAt,
    amount: Math.floor(Math.random() * 10000).toString(),
    category: createRandomCategory(),
    type: isCost ? 'Cost' : 'Profit',
  };
};
