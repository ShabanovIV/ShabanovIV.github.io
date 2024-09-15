// Нужно превратить файл в ts и указать типы аргументов и типы возвращаемого значения.

/**
 * Удаляет символ плюс (+) в начале строки, если он присутствует.
 *
 * @param {string} string - Строка, из которой нужно удалить начальный плюс.
 * @returns {string} Строка без начального плюса, если он был.
 * @example
 * // Пример использования:
 * removePlus('+123');
 * // Вернёт '123'
 *
 * removePlus('123');
 * // Вернёт '123'
 */
export const removePlus = (string: string): string => string.replace(/^\+/, '');

/**
 * Добавляет символ плюс (+) в начало строки.
 *
 * @param {string} string - Строка, к которой нужно добавить символ плюс.
 * @returns {string} Строка с добавленным плюсом в начале.
 * @example
 * // Пример использования:
 * addPlus('123');
 * // Вернёт '+123'
 *
 * addPlus('+123');
 * // Вернёт '++123'
 */
export const addPlus = (string: string): string => `+${string}`;

const zerosRegEx = /^(-)?[0]+(-?\d+.*)$/;
const numberRegEx = /^-?\d+(\.\d+)?$/;

/**
 * Удаляет ведущие нули из строки числа.
 *
 * @param {string} value - Строка, содержащая число с возможными ведущими нулями.
 * @returns {string} Строка без ведущих нулей.
 * @throws {Error} Если строка не соответствует формату числа.
 */
export const removeFirstZeros = (value: string): string => {
  if (!numberRegEx.test(value)) {
    throw new Error('Invalid number format.');
  }

  return value.replace(zerosRegEx, '$1$2');
};

/**
 * Форматирует число, добавляя разделитель для групп из трёх цифр.
 *
 * @param {number} value - Число, которое нужно форматировать.
 * @param {string} [separator=' '] - Разделитель, который будет вставляться между группами цифр (по умолчанию — пробел).
 * @returns {string} Строка, представляющая число с разделителями.
 * @example
 * // Пример использования:
 * formatWithSeparator(1000000);
 * // Вернёт '1 000 000'
 *
 * formatWithSeparator(1000000, ',');
 * // Вернёт '1,000,000'
 */
export const formatWithSeparator = (value: number, separator = ' '): string =>
  value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

/**
 * Округляет число до заданного количества десятичных знаков.
 *
 * @param {number} value - Число, которое нужно округлить.
 * @param {number} [accuracy=2] - Количество десятичных знаков для округления (по умолчанию 2).
 * @returns {number} Округлённое число с заданной точностью.
 * @example
 * // Пример использования:
 * round(123.4567);
 * // Вернёт 123.46
 *
 * round(123.4567, 3);
 * // Вернёт 123.457
 *
 * round(123.4567, 0);
 * // Вернёт 123
 */
export const round = (value: number, accuracy = 2): number => {
  const d = 10 ** accuracy;
  return Math.round(value * d) / d;
};

const transformRegexp =
  /(matrix\(-?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, )(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)\)/;

/**
 * Извлекает значения трансформации по осям X и Y из строки CSS transform.
 *
 * @param {string} transformCssString - Строка CSS transform в формате `matrix(a, b, c, d, tx, ty)`.
 * @returns {{ x: number, y: number }} Объект с координатами трансформации по оси X и Y.
 * Если строка не соответствует регулярному выражению, возвращает { x: 0, y: 0 }.
 * @example
 * // Пример использования:
 * getTransformFromCss('matrix(1, 0, 0, 1, 100, 200)');
 * // Вернёт { x: 100, y: 200 }
 *
 * getTransformFromCss('invalid string');
 * // Вернёт { x: 0, y: 0 }
 */
export const getTransformFromCss = (transformCssString: string): { x: number; y: number } => {
  const matchArray = transformCssString.match(transformRegexp);
  if (!matchArray) return { x: 0, y: 0 };
  return {
    x: parseInt(matchArray[6], 10),
    y: parseInt(matchArray[8], 10),
  };
};

/**
 * Вычисляет контрастное значение цвета на основе его RGB-компонентов.
 *
 * Алгоритм основан на взвешенном значении яркости каждого компонента:
 * - Красный (R): 29.9%
 * - Зеленый (G): 58.7%
 * - Синий (B): 11.4%
 *
 * Эта формула используется для оценки яркости цвета с учетом восприятия цвета человеческим глазом.
 *
 * @param {number} red - Значение красного компонента (от 0 до 255).
 * @param {number} green - Значение зеленого компонента (от 0 до 255).
 * @param {number} blue - Значение синего компонента (от 0 до 255).
 * @returns {number} Контрастное значение цвета (от 0 до 255), где 0 — самый темный, 255 — самый яркий.
 * @example
 * // Пример использования:
 * getColorContrastValue(255, 0, 0);
 * // Вернёт 76 (контрастное значение для чистого красного цвета)
 *
 * getColorContrastValue(255, 255, 255);
 * // Вернёт 255 (контрастное значение для белого)
 *
 * getColorContrastValue(0, 0, 0);
 * // Вернёт 0 (контрастное значение для черного)
 */
export const getColorContrastValue = (red: number, green: number, blue: number): number =>
  Math.round((red * 299 + green * 587 + blue * 114) / 1000);

/**
 * Возвращает тип контраста ('black' или 'white') в зависимости от контрастного значения.
 *
 * Если контрастное значение больше 125, функция возвращает 'black', иначе — 'white'.
 * Эта функция используется для выбора наилучшего цвета текста (черного или белого) на фоне
 * с определенным уровнем яркости.
 *
 * @param {number} contrastValue - Контрастное значение (от 0 до 255), обычно рассчитанное по формуле яркости.
 * @returns {'black' | 'white'} Цвет текста: 'black', если контрастное значение больше 125, иначе 'white'.
 * @example
 * // Пример использования:
 * getContrastType(150);
 * // Вернёт 'black' (подходит для светлого фона)
 *
 * getContrastType(100);
 * // Вернёт 'white' (подходит для темного фона)
 */
export const getContrastType = (contrastValue: number): 'black' | 'white' => (contrastValue > 125 ? 'black' : 'white');

export const shortColorRegExp = /^#[0-9a-f]{3}$/i;
export const longColorRegExp = /^#[0-9a-f]{6}$/i;

/**
 * Проверяет, является ли строка допустимым шестнадцатеричным цветом в формате #RGB или #RRGGBB.
 *
 * Если строка не соответствует ни короткому (#RGB), ни длинному (#RRGGBB) шестнадцатеричному формату,
 * выбрасывается ошибка.
 *
 * @param {string} color - Строка, представляющая цвет в шестнадцатеричном формате.
 * @throws {Error} Если строка не является допустимым шестнадцатеричным цветом.
 * @example
 * // Пример использования:
 * checkColor('#fff'); // Короткий формат
 * checkColor('#ffffff'); // Длинный формат
 *
 * // Ошибка:
 * checkColor('#ff'); // Выбросит ошибку "invalid hex color: #ff"
 */
export const checkColor = (color: string): void => {
  if (!longColorRegExp.test(color) && !shortColorRegExp.test(color)) throw new Error(`invalid hex color: ${color}`);
};

export type RedValue = number;
export type GreenValue = number;
export type BlueValue = number;

/**
 * Конвертирует шестнадцатеричный цвет в формат RGB.
 *
 * Поддерживаются как короткий формат (#RGB), так и длинный формат (#RRGGBB). Функция сначала
 * проверяет корректность формата цвета с помощью функции `checkColor`. Затем преобразует его
 * в соответствующие значения для красного (R), зеленого (G) и синего (B) компонентов.
 *
 * @param {string} color - Строка, представляющая шестнадцатеричный цвет (#RGB или #RRGGBB).
 * @returns {[RedValue, GreenValue, BlueValue]} Кортеж значений RGB, где каждое значение — это число.
 * @throws {Error} Если строка не является допустимым шестнадцатеричным цветом.
 * @example
 * // Пример использования:
 * hex2rgb('#fff');
 * // Вернёт [15, 15, 15] для короткого формата
 *
 * hex2rgb('#ffffff');
 * // Вернёт [255, 255, 255] для длинного формата
 *
 * hex2rgb('#112233');
 * // Вернёт [17, 34, 51] для длинного формата
 */
export const hex2rgb = (color: string): [RedValue, GreenValue, BlueValue] => {
  checkColor(color);
  if (shortColorRegExp.test(color)) {
    const red = parseInt(color.substring(1, 2), 16);
    const green = parseInt(color.substring(2, 3), 16);
    const blue = parseInt(color.substring(3, 4), 16);
    return [red, green, blue];
  }
  const red = parseInt(color.substring(1, 3), 16);
  const green = parseInt(color.substring(3, 5), 16);
  const blue = parseInt(color.substring(5, 8), 16);
  return [red, green, blue];
};

/**
 * Преобразует массив в массив объектов, где каждый объект содержит элемент массива и его порядковый номер.
 *
 * Каждый элемент исходного массива преобразуется в объект с двумя свойствами:
 * - `value`: значение элемента массива.
 * - `number`: порядковый номер элемента (индекс), начиная с 0.
 *
 * @template T - Тип элементов в исходном массиве.
 * @param {T[]} arr - Исходный массив элементов любого типа.
 * @returns {{ value: T; number: number }[]} Массив объектов, каждый из которых содержит элемент массива и его индекс.
 * @example
 * // Пример использования:
 * getNumberedArray(['apple', 'banana', 'cherry']);
 * // Вернёт [{ value: 'apple', number: 0 }, { value: 'banana', number: 1 }, { value: 'cherry', number: 2 }]
 *
 * getNumberedArray([10, 20, 30]);
 * // Вернёт [{ value: 10, number: 0 }, { value: 20, number: 1 }, { value: 30, number: 2 }]
 */
export const getNumberedArray = <T>(arr: T[]): { value: T; number: number }[] =>
  arr.map((value, number) => ({ value, number }));

/**
 * Преобразует массив объектов с полями `value` и `number` в массив строк, где каждое значение соединяется с номером через подчеркивание.
 *
 * Каждый объект массива преобразуется в строку в формате `value_number`, где:
 * - `value`: значение элемента.
 * - `number`: порядковый номер элемента.
 *
 * @template T - Тип значения `value` в объектах массива.
 * @param {{ value: T; number: number }[]} arr - Массив объектов, каждый из которых содержит значение и порядковый номер.
 * @returns {string[]} Массив строк, где каждая строка — это комбинация `value` и `number`, соединённые через подчеркивание.
 * @example
 * // Пример использования:
 * toStringArray([{ value: 'apple', number: 0 }, { value: 'banana', number: 1 }]);
 * // Вернёт ['apple_0', 'banana_1']
 *
 * toStringArray([{ value: 10, number: 0 }, { value: 20, number: 1 }]);
 * // Вернёт ['10_0', '20_1']
 */
export const toStringArray = <T>(arr: [{ value: T; number: number }]): string[] =>
  arr.map(({ value, number }) => `${value}_${number}`);

export type Customer = {
  id: number;
  name: string;
  age: number;
  isSubscribed: boolean;
};

export type CustomerMap = {
  [key: number]: {
    name: string;
    age: number;
    isSubscribed: boolean;
  };
};

/**
 * Преобразует массив клиентов в объект, где ключами являются идентификаторы клиентов.
 *
 * Функция принимает массив объектов типа Customer и преобразует его в объект, где ключами являются идентификаторы клиентов (id),
 * а значениями — объекты с их данными (имя, возраст, статус подписки).
 *
 * @param {Customer[]} customers - Массив объектов клиентов.
 * @returns {CustomerMap} Объект, где ключами являются идентификаторы клиентов, а значениями — данные о клиентах.
 * @example
 * // Пример использования:
 * const customers = [
 *   { id: 1, name: 'Alice', age: 30, isSubscribed: true },
 *   { id: 2, name: 'Bob', age: 25, isSubscribed: false }
 * ];
 *
 * const customerMap = transformCustomers(customers);
 * // Вернёт:
 * // {
 * //   1: { name: 'Alice', age: 30, isSubscribed: true },
 * //   2: { name: 'Bob', age: 25, isSubscribed: false }
 * // }
 */
export const transformCustomers = (customers: Customer[]) => {
  return customers.reduce((acc: CustomerMap, customer: Customer) => {
    acc[customer.id] = {
      name: customer.name,
      age: customer.age,
      isSubscribed: customer.isSubscribed,
    };
    return acc;
  }, {});
};
