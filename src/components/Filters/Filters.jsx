import React from 'react';

import styles from './Filters.module.scss';

export default function Filters() {
  return (
    <div className={styles.filters}>
      <button type="button" className={styles['filters__btn-left']}>
        Самый дешевый
      </button>
      <button type="button">Самый быстрый</button>
      <button type="button" className={styles['filters__btn-right']}>
        Оптимальный
      </button>
    </div>
  );
}
