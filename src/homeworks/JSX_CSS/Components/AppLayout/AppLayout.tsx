import React, { ReactNode } from 'react';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import styles from './AppLayout.module.css';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className={styles.appLayout}>
      <HeaderMenu />
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};

export default AppLayout;
