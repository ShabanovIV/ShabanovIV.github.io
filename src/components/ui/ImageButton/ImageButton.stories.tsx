import { Meta, StoryObj } from '@storybook/react';
import { ImageButton, Sizes } from './ImageButton';
import React, { useState } from 'react';
import on from '../../Images/on.png';
import off from '../../Images/off.png';

const meta: Meta<typeof ImageButton> = {
  title: 'ui/ImageButton',
  component: ImageButton,
};

export default meta;

const ToggleButton: React.FC = () => {
  const [check, setCheck] = useState(true);

  function handleToggle(): void {
    setCheck((prevCheck) => !prevCheck);
  }

  const args = {
    src: check ? on : off,
    size: Sizes.Large,
    alt: 'Кнопка с картинкой',
    handleClick: handleToggle,
  };

  return <ImageButton {...args}></ImageButton>;
};

export const ImageButtonStory: StoryObj<typeof ImageButton> = {
  render: () => {
    return (
      <div style={{ width: 64, height: 64, position: 'relative', zIndex: 1 }}>
        <ToggleButton></ToggleButton>
      </div>
    );
  },
};
