import React from 'react';

import styles from './Checkbox.module.scss';

export default function Checkbox() {
  return (
    <div className={styles.checkbox}>
      <h2 className={styles.checkbox__heading}>Количество пересадок</h2>
      <form className={styles.checkbox__form}>
        <label htmlFor="all">
          <input type="checkbox" id="all" />
          Все
        </label>
        <label htmlFor="noTransfers">
          <input type="checkbox" id="noTransfers" checked />
          Без пересадок
        </label>
        <label htmlFor="oneTransfer">
          <input type="checkbox" id="oneTransfer" />1 пересадка
        </label>
        <label htmlFor="twoTransfers">
          <input type="checkbox" id="twoTransfers" />2 пересадки
        </label>
        <label htmlFor="threeTransfers">
          <input type="checkbox" id="threeTransfers" />3 пересадки
        </label>
      </form>
    </div>
  );
}
