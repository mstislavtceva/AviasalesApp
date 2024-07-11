import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Ticket from '../Ticket';
import { searchId, getTicketsData } from '../../store/TicketsData';

import styles from './TicketsList.module.scss';

export default function TicketsList() {
  const maxId = () => Math.random().toString(36).slice(2);

  const dispatch = useDispatch();

  const idQuery = useSelector((state) => state.tickets.searchId);
  const tickets = useSelector((state) => state.tickets.tickets);

  useEffect(() => {
    if (idQuery) {
      dispatch(getTicketsData(idQuery));
    }
  }, [dispatch, idQuery]);

  useEffect(() => {
    dispatch(searchId());
  }, [dispatch]);

  console.log(tickets);

  return (
    <div className={styles.ticketsList}>
      <ul>
        {tickets.slice(0, 5).map((ticket) => (
          <li key={maxId()}>
            <Ticket
              price={ticket.price}
              from={ticket.segments[0]}
              where={ticket.segments[1]}
              // from={ticket.segments.origin}
              // in={ticket.segments.destination}
              // date={ticket.segments.date}
              // duration={ticket.segments.duration}
            />
          </li>
        ))}
      </ul>
      <button type="button">Показать еще 5 билетов!</button>
    </div>
  );
}
