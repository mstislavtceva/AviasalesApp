/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { format, add } from 'date-fns';

import styles from './Ticket.module.scss';
import logoCompany from './company-logo.png';

export default function Ticket({ price, from, where }) {
  const formatTimeTicket = (date, duration) => {
    const startTime = new Date(date);
    const endTime = add(startTime, { minutes: duration });
    console.log(`${format(startTime, 'HH:mm')} – ${format(endTime, 'HH:mm')}`);
    return `${format(startTime, 'HH:mm')} – ${format(endTime, 'HH:mm')}`;
  };

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
            <span className={styles.ticket__grey}>
              {from.origin}-{from.destination}
            </span>
            <span>{formatTimeTicket(from.date, from.duration)}</span>
          </span>
          <span>
            <span className={styles.ticket__grey}>
              {where.origin}-{where.destination}
            </span>
            <span>{formatTimeTicket(where.date, where.duration)}</span>
          </span>
        </div>
        <div className={styles.ticket__duration}>
          <span>
            <span className={styles.ticket__grey}>В пути</span>
            <span>{`${Math.floor(from.duration / 60)}ч ${from.duration % 60}мин`}</span>
          </span>
          <span>
            <span className={styles.ticket__grey}>В пути</span>
            <span>{`${Math.floor(where.duration / 60)}ч ${where.duration % 60}мин`}</span>
          </span>
        </div>
        <div className={styles.ticket__transfers}>
          <span>
            <span className={styles.ticket__grey}>
              {from.stops.length === 1
                ? '1 пересадка'
                : from.stops.length === 0
                  ? ''
                  : `${from.stops.length} пересадки`}
            </span>
            <span>{from.stops.join(', ')}</span>
          </span>
          <span>
            <span className={styles.ticket__grey}>
              {where.stops.length === 1
                ? '1 пересадка'
                : where.stops.length === 0
                  ? ''
                  : `${where.stops.length} пересадки`}
            </span>
            <span>{where.stops.join(', ')}</span>
          </span>
        </div>
      </div>
    </>
  );
}
