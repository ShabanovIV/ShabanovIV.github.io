import React, { ChangeEvent, useState } from 'react';
import { ContentModal } from './ContentModal';
import { useLang } from '../LangProvider/LangProvider';

export const Layout: React.FC = () => {
  const [content, setContent] = useState('');
  const [visible, setVisible] = useState(false);
  const { getTranslate } = useLang();

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setContent(event.target.value);
  }

  function handleShow(): void {
    setVisible(true);
  }

  function handleClose(): void {
    setVisible(false);
  }

  return (
    <div>
      <label>
        {getTranslate('layout.title')}
        <input type="text" value={content} onChange={handleChange} />
      </label>
      <button onClick={handleShow}>{getTranslate('layout.show')}</button>
      <ContentModal visible={visible} handleClose={handleClose}>
        {content}
      </ContentModal>
    </div>
  );
};
