import React from 'react';
import styles from './ProfilePage.module.scss';
import ProfileForm from '../../forms/ProfileForm/ProfileForm';

export const ProfilePage = () => {
  return (
    <div className={styles.container}>
      <ProfileForm onSubmit={() => console.log('profile submit')} />
    </div>
  );
};

export default ProfilePage;
