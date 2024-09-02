import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Привет! меня зовут Иван, я работаю в научно-исследовательском, проектом институте. Занимаюсь разработкой
          лабораторно-информационной, менеджерской системы, предназначенной для автоматизации процессов лабораторных
          исследований керна и пластовых флюидов.
        </p>
        <p>
          На данный момент участвую в разработке новой версии приложения, в связи с переходом с Windows, .NET Framework,
          WinForms, DevExpress, Oracle на Linux, .NET6, Asp.Net Core, PostgreSQL, React. Занимаюсь постановкой и
          контролем выполнения задач, проектированием архитектуры и разработкой серверной части приложения.
        </p>
        <p>Записался на данный курс чтобы получить необходимые знания для применения на текущей работе.</p>
        <p>Telegram: @ivshaban</p>
        <p>Email: react.dev.shabanov@mail.ru</p>
      </header>
    </div>
  );
}

export default App;
