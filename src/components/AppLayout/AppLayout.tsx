import React, { ReactNode } from 'react';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import styles from './AppLayout.module.scss';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className={styles.appLayout}>
      <HeaderMenu
        isAuthenticated={false}
        handleSignIn={() => console.log('handle signin')}
        handleLogout={() => console.log('handle logout')}
      />
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};

export default AppLayout;
