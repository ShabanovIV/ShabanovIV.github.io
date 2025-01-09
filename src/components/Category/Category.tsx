import React from 'react';
import styles from './Category.module.scss';
import { IGenericListItem } from '../Abstract/IGenericListItem';

export class CategoryProps implements IGenericListItem {
  constructor(id: string, name: string, description: string, photo?: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.photo = photo;
  }

  public id: string;
  public name: string;
  public description: string;
  public photo?: string;

  public get key(): string {
    return this.id;
  }

  public createComponent() {
    return <Category {...this} />;
  }
}

const Category: React.FC<CategoryProps> = ({ name, description, photo }) => {
  return (
    <div className={styles.category}>
      {photo && <img src={photo} alt={name} />}
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Category;
