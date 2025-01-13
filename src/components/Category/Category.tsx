import React from 'react';
import styles from './Category.module.scss';
import { IRenderItem } from '../RenderList/RenderList';
import { TextButton } from '../ui/TextButton/TextButton';

export class CategoryProps implements IRenderItem {
  constructor(id: string, name: string, showForm: (category: CategoryProps) => void, photo?: string) {
    this.id = id;
    this.name = name;
    this.showForm = showForm;
    this.photo = photo;
  }

  private showForm?: (category: CategoryProps) => void;

  public id: string;
  public name: string;
  public photo?: string;

  public get key(): string {
    return this.id;
  }

  public render() {
    return <Category {...this} onButtonEditClick={this.onButtonEditClick} />;
  }

  public onButtonEditClick = (): void => {
    if (this.showForm) this.showForm(this);
  };
}

const Category: React.FC<CategoryProps> = ({ name, photo, onButtonEditClick }) => {
  return (
    <div className={styles.category}>
      {photo && <img src={photo} alt={name} />}
      <h3>{name}</h3>
      <TextButton text="Редактировать" handleClick={onButtonEditClick} />
    </div>
  );
};

export default Category;
