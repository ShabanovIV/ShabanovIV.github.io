import React from 'react';
import ReactDOM from 'react-dom';

export interface ErrorPageProps {
  titleError: string;
  message: string;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({ titleError, message }) => {
  return ReactDOM.createPortal(
    <div>
      <h1>{titleError}</h1>
      <p>{message}</p>
    </div>,
    document.body
  );
};
