/* eslint-disable import/no-named-as-default-member */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      welcome: {
        hello: 'Привет! Меня зовут Иван.',
        work: 'Я работаю в научно-исследовательском, проектом институте. Занимаюсь разработкой лабораторно-информационной,  менеджерской системы, предназначенной для автоматизации процессов лабораторных исследований керна и пластовых флюидов.',
        tasks:
          'На данный момент участвую в разработке новой версии приложения, в связи с переходом с Windows, .NET Framework,  WinForms, DevExpress, Oracle на Linux, .NET6, Asp.Net Core, PostgreSQL, React. Занимаюсь постановкой и контролем выполнения задач, проектированием архитектуры и разработкой серверной части приложения. Записался на данный курс чтобы получить необходимые знания для применения на текущей работе.',
      },
      layout: {
        title: 'Введите сообщение: ',
        show: 'Показать',
      },
      contentModal: {
        close: 'Закрыть',
      },
    },
  },
  en: {
    translation: {
      welcome: {
        hello: 'Hello! My name is Ivan.',
        work: 'I work at a research and design institute. My focus is developing a laboratory information management system (LIMS) designed to automate laboratory research processes for core samples and reservoir fluids.',
        tasks:
          'Currently, I am involved in the development of a new version of the application as part of a transition from Windows, .NET Framework, WinForms, DevExpress, and Oracle to Linux, .NET 6, ASP.NET Core, PostgreSQL, and React. My responsibilities include task planning and monitoring, architecture design, and backend application development. I enrolled in this course to gain the knowledge necessary for practical application in my current role.',
      },
      layout: {
        title: 'Input message: ',
        show: 'Show',
      },
      contentModal: {
        close: 'Close',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru', // Язык по умолчанию
  fallbackLng: 'ru', // Резервный язык
  interpolation: {
    escapeValue: false, // Для React не требуется экранирование
  },
});

export default i18n;
