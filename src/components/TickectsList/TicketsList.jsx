import React from 'react';

import Ticket from '../Ticket';

import styles from './TicketsList.module.scss';

export default function TicketsList({ ticketsData }) {
  return (
    <div className={styles.ticketsList}>
      <ul>
        {ticketsData.map((ticket) => (
          <li>
            <Ticket price={ticket.price} />
          </li>
        ))}
      </ul>
      <button type="button">Показать еще 5 билетов!</button>
    </div>
  );
}
