import React from 'react';

import logo from './avisales-logo.png';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo Aviasales" className={styles.header__image} />
    </header>
  );
}
