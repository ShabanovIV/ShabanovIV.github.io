import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import CurrencyInput from 'react-currency-input-field';
import styles from './ProductForm.module.scss';
import { ProductSummaryProps } from '../../components/ProductSummary/ProductSummary';

interface ProductFormProps {
  product?: ProductSummaryProps;
  onSubmit: (data: ProductSummaryProps) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onSubmit }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProductSummaryProps>({
    defaultValues: product || {
      id: '',
      price: 0,
      imageUrl: '',
      title: '',
      description: '',
    },
  });

  const submitHandler = (data: ProductSummaryProps) => {
    onSubmit(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
      <h2 className={styles.title}>{product ? 'Редактировать продукт' : 'Добавить продукт'}</h2>

      {/* Название */}
      <div className={styles.field}>
        <label htmlFor="title" className={styles.label}>
          Название
        </label>
        <input id="title" className={styles.input} {...register('title', { required: 'Введите название продукта' })} />
        {errors.title && <p className={styles.error}>{errors.title.message}</p>}
      </div>

      {/* Цена */}
      <div className={styles.field}>
        <label htmlFor="price" className={styles.label}>
          Цена
        </label>
        <Controller
          control={control}
          name="price"
          rules={{
            required: 'Введите цену',
            validate: (value) => value > 0 || 'Цена должна быть больше 0',
          }}
          render={({ field }) => (
            <CurrencyInput
              id="price"
              className={styles.input}
              value={field.value}
              onValueChange={(value) => field.onChange(value)}
              decimalsLimit={2}
              decimalSeparator=","
              groupSeparator=" "
              prefix="₽ "
              placeholder="Введите цену"
            />
          )}
        />
        {errors.price && <p className={styles.error}>{errors.price.message}</p>}
      </div>

      {/* URL изображения */}
      <div className={styles.field}>
        <label htmlFor="imageUrl" className={styles.label}>
          URL изображения
        </label>
        <input
          id="imageUrl"
          className={styles.input}
          {...register('imageUrl', { required: 'Введите URL изображения' })}
        />
        {errors.imageUrl && <p className={styles.error}>{errors.imageUrl.message}</p>}
      </div>

      {/* Описание */}
      <div className={styles.field}>
        <label htmlFor="description" className={styles.label}>
          Описание
        </label>
        <textarea
          id="description"
          className={styles.textarea}
          {...register('description', { required: 'Введите описание' })}
        />
        {errors.description && <p className={styles.error}>{errors.description.message}</p>}
      </div>

      {/* Кнопка */}
      <button type="submit" className={styles.button}>
        {product ? 'Сохранить изменения' : 'Добавить продукт'}
      </button>
    </form>
  );
};

export default ProductForm;
