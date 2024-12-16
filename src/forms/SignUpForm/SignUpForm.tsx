import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './SignUpForm.module.scss';

interface SignUpFormInputs {
  userName: string;
  password: string;
  confirmPassword: string;
}

interface SignUpFormProps {
  onSignUp: (data: SignUpFormInputs) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSignUp }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormInputs>();

  const password = watch('password');

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSignUp)}>
        <h1 className={styles.title}>Регистрация</h1>
        <div className={styles.field}>
          <label htmlFor="userName" className={styles.label}>
            Имя пользователя
          </label>
          <input
            id="userName"
            type="text"
            className={styles.input}
            {...register('userName', {
              required: 'Введите имя пользователя',
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message: 'Имя пользователя может содержать только буквы и цифры',
              },
            })}
          />
          {errors.userName && <p className={styles.error}>{errors.userName.message}</p>}
        </div>
        <div className={styles.field}>
          <label htmlFor="password" className={styles.label}>
            Пароль
          </label>
          <input
            id="password"
            type="password"
            className={styles.input}
            {...register('password', {
              required: 'Введите пароль',
              minLength: { value: 6, message: 'Пароль должен содержать минимум 6 символов' },
            })}
          />
          {errors.password && <p className={styles.error}>{errors.password.message}</p>}
        </div>
        <div className={styles.field}>
          <label htmlFor="confirmPassword" className={styles.label}>
            Подтверждение пароля
          </label>
          <input
            id="confirmPassword"
            type="password"
            className={styles.input}
            {...register('confirmPassword', {
              required: 'Подтвердите пароль',
              validate: (value) => value === password || 'Пароли не совпадают',
            })}
          />
          {errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword.message}</p>}
        </div>
        <button type="submit" className={styles.button}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
