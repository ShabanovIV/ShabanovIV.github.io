import React from 'react';
import styles from './Logo.module.scss';
import logoGif from '../Images/Logo.gif';

function Logo() {
  return <img src={logoGif} alt="logo" className={styles.logo} />;
}

export default Logo;