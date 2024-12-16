import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface AuthFormInputs {
  username: string;
  password: string;
}

interface AuthFormProps {
  onLogin: (data: AuthFormInputs) => void;
  onRegister: (data: AuthFormInputs) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ onLogin, onRegister }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormInputs>();
  const [isLoginMode, setIsLoginMode] = useState(true);

  const toggleMode = () => setIsLoginMode((prevMode) => !prevMode);

  return (
    <div>
      <h1>{isLoginMode ? 'Авторизация' : 'Регистрация'}</h1>
      <form onSubmit={handleSubmit(isLoginMode ? onLogin : onRegister)}>
        <div>
          <label htmlFor="username">Имя пользователя:</label>
          <input id="username" type="text" {...register('username', { required: 'Введите имя пользователя' })} />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div>
          <label htmlFor="password">Пароль:</label>
          <input id="password" type="password" {...register('password', { required: 'Введите пароль' })} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">{isLoginMode ? 'Войти' : 'Зарегистрироваться'}</button>
      </form>
      <button onClick={toggleMode}>
        {isLoginMode ? 'Нет аккаунта? Зарегистрироваться' : 'Уже есть аккаунт? Войти'}
      </button>
    </div>
  );
};

export default AuthForm;
