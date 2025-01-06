import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './SignInForm.module.scss';
import { useError } from '../../components/ErrorProvider/ErrorProvider';

interface SignInFormInputs {
  email: string;
  password: string;
}

interface SignInFormProps {
  onSignIn: (credentials: SignInFormInputs) => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ onSignIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputs>();

  const { errorData } = useError();

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSignIn)}>
        <h1 className={styles.title}>Авторизация</h1>
        {errorData?.status && (errorData?.status >= 401 || errorData?.status <= 499) && (
          <p className={styles.apiError}>{errorData?.message}</p>
        )}
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input id="email" type="text" className={styles.input} {...register('email')} />
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        </div>
        <div className={styles.field}>
          <label htmlFor="password" className={styles.label}>
            Пароль
          </label>
          <input
            id="password"
            type="password"
            className={styles.input}
            {...register('password', { required: 'Введите пароль' })}
          />
          {errors.password && <p className={styles.error}>{errors.password.message}</p>}
        </div>
        <button type="submit" className={styles.button}>
          Войти
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
