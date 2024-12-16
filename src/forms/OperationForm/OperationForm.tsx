import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import CurrencyInput from 'react-currency-input-field';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './OperationForm.module.scss';
import { OperationProps } from '../../components/Operation/Operation';

interface OperationFormProps {
  operation?: OperationProps; // Если передано, то редактирование, иначе добавление
  categories: string[]; // Список доступных категорий
  onSubmit: (data: Omit<OperationProps, 'id' | 'createComponent'>) => void;
}

const OperationForm: React.FC<OperationFormProps> = ({ operation, categories, onSubmit }) => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Omit<OperationProps, 'id' | 'createComponent'>>({
    defaultValues: operation || {
      amount: 0,
      category: categories[0] || '', // Первая категория по умолчанию
      title: '',
      description: '',
      date: new Date(),
    },
  });

  const submitHandler = (data: Omit<OperationProps, 'id' | 'createComponent'>) => {
    onSubmit(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
      <h2 className={styles.title}>{operation ? 'Редактировать операцию' : 'Добавить операцию'}</h2>

      {/* Название */}
      <div className={styles.field}>
        <label htmlFor="title" className={styles.label}>
          Название
        </label>
        <input id="title" className={styles.input} {...register('title', { required: 'Введите название операции' })} />
        {errors.title && <p className={styles.error}>{errors.title.message}</p>}
      </div>

      {/* Сумма */}
      <div className={styles.field}>
        <label htmlFor="amount" className={styles.label}>
          Сумма
        </label>
        <Controller
          control={control}
          name="amount"
          rules={{
            required: 'Введите сумму операции',
            validate: (value) => value > 0 || 'Сумма должна быть больше 0',
          }}
          render={({ field }) => (
            <CurrencyInput
              id="amount"
              className={styles.input}
              value={field.value}
              onValueChange={(value) => field.onChange(value)}
              decimalsLimit={2}
              decimalSeparator=","
              groupSeparator=" "
              prefix="₽ "
              placeholder="Введите сумму"
            />
          )}
        />
        {errors.amount && <p className={styles.error}>{errors.amount.message}</p>}
      </div>

      {/* Категория */}
      <div className={styles.field}>
        <label htmlFor="category" className={styles.label}>
          Категория
        </label>
        <select
          id="category"
          className={styles.select}
          {...register('category', { required: 'Выберите категорию операции' })}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && <p className={styles.error}>{errors.category.message}</p>}
      </div>

      {/* Описание */}
      <div className={styles.field}>
        <label htmlFor="description" className={styles.label}>
          Описание
        </label>
        <textarea
          id="description"
          className={styles.textarea}
          {...register('description')}
          placeholder="Введите описание"
        />
      </div>

      {/* Дата */}
      <div className={styles.field}>
        <label htmlFor="date" className={styles.label}>
          Дата
        </label>
        <Controller
          control={control}
          name="date"
          rules={{ required: 'Выберите дату операции' }}
          render={({ field }) => (
            <DatePicker
              className={styles.input}
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              dateFormat="dd.MM.yyyy"
              placeholderText="Выберите дату"
            />
          )}
        />
        {errors.date && <p className={styles.error}>{errors.date.message}</p>}
      </div>

      {/* Кнопка */}
      <button type="submit" className={styles.button}>
        {operation ? 'Сохранить изменения' : 'Добавить операцию'}
      </button>
    </form>
  );
};

export default OperationForm;
