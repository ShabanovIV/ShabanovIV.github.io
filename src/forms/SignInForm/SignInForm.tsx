import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './SignInForm.module.scss';
import { useError } from '../../components/ErrorProvider/ErrorProvider';

interface SignInFormInputs {
  userName: string;
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

  const { status, message } = useError();

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSignIn)}>
        <h1 className={styles.title}>Авторизация</h1>
        {status === 401 && <p className={styles.apiError}>{message}</p>}
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
