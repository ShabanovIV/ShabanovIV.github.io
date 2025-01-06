import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './SignUpForm.module.scss';
import { useError } from '../../components/ErrorProvider/ErrorProvider';

interface SignUpFormInputs {
  email: string;
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
  const { errorData } = useError();
  const password = watch('password');

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSignUp)}>
        <h1 className={styles.title}>Регистрация</h1>
        {errorData?.status && (errorData?.status >= 401 || errorData?.status <= 499) && (
          <p className={styles.apiError}>{errorData?.message}</p>
        )}
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            email
          </label>
          <input id="email" type="text" className={styles.input} {...register('email')} />
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        </div>
        <div className={styles.field}>
          <label htmlFor="password" className={styles.label}>
            Пароль
          </label>
          <input id="password" type="password" className={styles.input} {...register('password')} />
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
