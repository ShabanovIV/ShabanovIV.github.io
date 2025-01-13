import React from 'react';
import styles from './Category.module.scss';
import { IRenderItem } from '../RenderList/RenderList';

export class CategoryProps implements IRenderItem {
  constructor(id: string, name: string, photo?: string) {
    this.id = id;
    this.name = name;
    this.photo = photo;
  }

  public id: string;
  public name: string;
  public photo?: string;

  public get key(): string {
    return this.id;
  }

  public render() {
    return <Category {...this} />;
  }
}

const Category: React.FC<CategoryProps> = ({ name, photo }) => {
  return (
    <div className={styles.category}>
      {photo && <img src={photo} alt={name} />}
      <h3>{name}</h3>
    </div>
  );
};

export default Category;
