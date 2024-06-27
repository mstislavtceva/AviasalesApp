import React from 'react';

import styles from './Ticket.module.scss';
import logoCompany from './company-logo.png';

export default function Ticket({ price }) {
  return (
    <>
      <div className={styles.ticket__general}>
        <span className={styles.ticket__price}>{price} P</span>
        <div className={styles.ticket__company}>
          <img src={logoCompany} alt="Logo company" />
        </div>
      </div>
      <div className={styles.ticket__info}>
        <div className={styles['ticket__from-where']}>
          <span>
            <span className={styles.ticket__grey}>mow-hkt</span>
            <span>10:45 - 08:00</span>
          </span>
          <span>
            <span className={styles.ticket__grey}>mow-hkt</span>
            <span>10:45 - 08:00</span>
          </span>
        </div>
        <div className={styles.ticket__duration}>
          <span>
            <span className={styles.ticket__grey}>В пути</span>
            <span>21ч 15мин</span>
          </span>
          <span>
            <span className={styles.ticket__grey}>В пути</span>
            <span>13ч 30мин</span>
          </span>
        </div>
        <div className={styles.ticket__transfers}>
          <span>
            <span className={styles.ticket__grey}>2 пересадки</span>
            <span>HKG, JNB</span>
          </span>
          <span>
            <span className={styles.ticket__grey}>1 пересадка</span>
            <span>HKG</span>
          </span>
        </div>
      </div>
    </>
  );
}
