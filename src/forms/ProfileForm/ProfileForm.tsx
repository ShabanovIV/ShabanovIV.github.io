import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './ProfileForm.module.scss';

interface ProfileFormInputs {
  email: string;
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

interface ProfileFormProps {
  onSubmit: (data: ProfileFormInputs) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ProfileFormInputs>();

  const newPassword = watch('newPassword');

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.title}>Редактирование профиля</h1>

        {/* Email */}
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            Почта
          </label>
          <input
            id="email"
            type="email"
            className={styles.input}
            {...register('email', {
              required: 'Введите почту',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Введите корректный адрес почты',
              },
            })}
          />
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        </div>

        {/* Current Password */}
        <div className={styles.field}>
          <label htmlFor="currentPassword" className={styles.label}>
            Текущий пароль
          </label>
          <input
            id="currentPassword"
            type="password"
            className={styles.input}
            {...register('currentPassword', { required: 'Введите текущий пароль' })}
          />
          {errors.currentPassword && <p className={styles.error}>{errors.currentPassword.message}</p>}
        </div>

        {/* New Password */}
        <div className={styles.field}>
          <label htmlFor="newPassword" className={styles.label}>
            Новый пароль
          </label>
          <input
            id="newPassword"
            type="password"
            className={styles.input}
            {...register('newPassword', {
              required: 'Введите новый пароль',
              minLength: { value: 6, message: 'Пароль должен содержать минимум 6 символов' },
            })}
          />
          {errors.newPassword && <p className={styles.error}>{errors.newPassword.message}</p>}
        </div>

        {/* Confirm New Password */}
        <div className={styles.field}>
          <label htmlFor="confirmNewPassword" className={styles.label}>
            Подтвердите новый пароль
          </label>
          <input
            id="confirmNewPassword"
            type="password"
            className={styles.input}
            {...register('confirmNewPassword', {
              required: 'Подтвердите новый пароль',
              validate: (value) => value === newPassword || 'Пароли не совпадают',
            })}
          />
          {errors.confirmNewPassword && <p className={styles.error}>{errors.confirmNewPassword.message}</p>}
        </div>

        <button type="submit" className={styles.button}>
          Сохранить изменения
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
