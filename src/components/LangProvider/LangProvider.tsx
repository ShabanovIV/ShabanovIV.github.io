/* eslint-disable import/no-named-as-default-member */
import React, { createContext, useContext, useState } from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

interface LangContextProps {
  langs: string[];
  lang: string;
  toggleLang: (lang: string) => void;
  getTranslate: (key: string) => string;
}

const LangContext = createContext<LangContextProps | undefined>(undefined);

export interface LangProviderProps {
  children: React.ReactNode;
}

const getCurrentLangFromBody = (): string => {
  return document.body.lang ?? i18n.options.lng;
};

export const LangProvider: React.FC<LangProviderProps> = ({ children }) => {
  const [lang, setLang] = useState<string>(getCurrentLangFromBody());
  const { t } = useTranslation();

  const toggleLang = (lang: string) => {
    setLang(lang);
    document.body.lang = lang;
    i18n.changeLanguage(lang);
  };
  const getTranslate = (key: string) => {
    return t(key);
  };
  const langs = i18n.options.resources ? Object.keys(i18n.options.resources) : [];
  return <LangContext.Provider value={{ langs, lang, toggleLang, getTranslate }}>{children}</LangContext.Provider>;
};

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLang должен использоваться внутри LangProvider');
  }
  return context;
};
