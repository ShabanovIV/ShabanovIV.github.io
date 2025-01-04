import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ErrorPage.module.scss';
import { ErrorType, ErrorTypes, useError } from '../../components/ErrorProvider/ErrorProvider';
import { TextButton } from '../../components/ui/TextButton/TextButton';

// Сообщения для известных типов ошибок
const errorMessages: { [key in ErrorType]: { errorTitle: string; errorMessage: string } } = {
  server: {
    errorTitle: 'Ошибка сервера',
    errorMessage: 'Произошла непредвиденная ошибка сервера. Пожалуйста, попробуйте позже.',
  },
  notFound: {
    errorTitle: 'Не найдено',
    errorMessage: 'Запрашиваемый ресурс не найден.',
  },
  accessDenied: {
    errorTitle: 'Доступ запрещен',
    errorMessage: 'У вас нет прав для доступа к этому ресурсу.',
  },
  none: {
    errorTitle: 'Э-э-э...',
    errorMessage: 'А почему это вообще сюда попало?',
  },
  validate: {
    errorTitle: 'Ошибка валидации',
    errorMessage: 'Некорректные данные. Проверьте и попробуйте снова.',
  },
};

export const ErrorPage: React.FC = () => {
  const error = useError();

  // Определяем тип ошибки или используем 'none' как значение по умолчанию
  const errorType: ErrorType = error.errorData?.type ?? ErrorTypes.None;

  return ReactDOM.createPortal(
    <div className={styles.content}>
      <h1>{errorMessages[errorType].errorTitle}</h1>
      <p>{errorMessages[errorType].errorMessage}</p>
      <TextButton
        borderRounded={true}
        borderVisible={false}
        maxTextLength={Infinity}
        text="Закрыть"
        handleClick={error.onRemoveError}
      />
    </div>,
    document.body
  );
};
