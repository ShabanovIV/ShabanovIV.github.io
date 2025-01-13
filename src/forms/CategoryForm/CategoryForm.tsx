import React from 'react';
import { useForm } from 'react-hook-form';
import { CategoryProps } from '../../components/Category/Category';
import styles from './CategoryForm.module.scss';

interface ICategoryFormProps {
  category?: CategoryProps;
  onClose: () => void;
  onSubmit: (data: CategoryProps) => void;
}

const CategoryForm: React.FC<ICategoryFormProps> = ({ category, onClose, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryProps>({
    defaultValues: category || {
      name: '',
    },
  });

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit((data: CategoryProps) => {
        onSubmit(data);
      })}
    >
      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>
          Название
        </label>
        <input id="name" className={styles.input} {...register('name', { required: 'Введите название продукта' })} />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>
      <div className={styles.field}>
        <label htmlFor="photo" className={styles.label}>
          URL фото
        </label>
        <input id="photo" className={styles.input} {...register('photo')} />
        {errors.photo && <p className={styles.error}>{errors.photo?.message}</p>}
      </div>

      <div className={styles['button-container']}>
        <button type="submit" className={styles.button}>
          {category ? 'Сохранить' : 'Добавить'}
        </button>
        <button type="button" className={styles.button} onClick={onClose}>
          Отмена
        </button>
      </div>
    </form>
  );
};

export default CategoryForm;
