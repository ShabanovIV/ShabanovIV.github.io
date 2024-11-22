import React, { ChangeEvent } from 'react';
import { useLang } from '../LangProvider/LangProvider';
import styles from './LangSelectorButton.module.scss';

export const LangSelectorButton: React.FC = () => {
  const { langs, lang, toggleLang } = useLang();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    toggleLang(event.target.value);
  };

  return (
    <div className={styles.langSelector}>
      <select value={lang} onChange={handleChange} className={styles.langDropdown} title="Выберите язык">
        {langs.map((value) => (
          <option key={value} value={value}>
            {value.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};
