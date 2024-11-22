import { ReactNode } from 'react';

export interface IGenericListItem {
  key: string;
  createComponent: () => ReactNode;
}
