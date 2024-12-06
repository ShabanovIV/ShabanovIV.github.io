import React, { ChangeEvent, useState } from 'react';
import { ContentModal } from './ContentModal';
import { useLang } from '../LangProvider/LangProvider';
import { TextButton } from '../ui/TextButton/TextButton';

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
      <TextButton
        text={getTranslate('layout.show')}
        borderVisible={false}
        borderRounded={true}
        maxTextLength={Infinity}
        handleClick={handleShow}
      />
      <ContentModal visible={visible} handleClose={handleClose}>
        {content}
      </ContentModal>
    </div>
  );
};
