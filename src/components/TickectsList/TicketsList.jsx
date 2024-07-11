/* eslint-disable indent */
import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'antd';

import Ticket from '../Ticket';
import { searchId, getTicketsData } from '../../store/TicketsData';

import styles from './TicketsList.module.scss';

export default function TicketsList() {
  const maxId = () => Math.random().toString(36).slice(2);

  const [ticketsCount, setTicketsCount] = useState(5);

  const dispatch = useDispatch();

  const idQuery = useSelector((state) => state.tickets.searchId);
  const tickets = useSelector((state) => state.tickets.tickets);
  const stop = useSelector((state) => state.tickets.stop);
  const activeChecks = useSelector((state) => state.check);
  const activeTab = useSelector((state) => state.tabs.tab);

  useEffect(() => {
    if (!stop && idQuery) {
      const timer = setInterval(() => {
        dispatch(getTicketsData(idQuery));
      }, 500);

      return () => {
        clearInterval(timer);
      };
    }

    return () => undefined;
  }, [dispatch, idQuery, stop]);

  useEffect(() => {
    dispatch(searchId());
  }, [dispatch]);

  const sortTicketsData = (data, tab) => {
    // eslint-disable-next-line prefer-const
    let newTickets = [...data];

    switch (tab) {
      case 'cheap':
        newTickets.sort((a, b) => a.price - b.price);
        break;
      case 'fast':
        newTickets.sort((prev, next) => {
          const first = prev.segments[0].duration + prev.segments[1].duration;
          const second = next.segments[0].duration + next.segments[1].duration;
          return first - second;
        });
        break;
      case 'optimal':
        newTickets.sort((prev, next) => {
          const first = prev.price * prev.segments[0].duration;
          const second = next.price * next.segments[0].duration;
          return first - second;
        });
        break;
      default:
        break;
    }

    return newTickets;
  };

  const filterTickets = (checks, newData) => {
    // export default function utilsFilter(filterTransfers, sortedTickets) {
    let filteredTickets = [];
    const noTransfersOn = checks[1].check;
    const oneTransfersOn = checks[2].check;
    const twoTransfersOn = checks[3].check;
    const threeTransfersOn = checks[4].check;

    if (noTransfersOn) {
      filteredTickets = newData.filter(
        (ticket) => ticket.segments[1].stops.length === 0 && ticket.segments[0].stops.length === 0
      );
    } else if (oneTransfersOn) {
      filteredTickets = newData.filter(
        (ticket) => ticket.segments[1].stops.length === 1 || ticket.segments[0].stops.length === 1
      );
    } else if (twoTransfersOn) {
      filteredTickets = newData.filter(
        (ticket) => ticket.segments[1].stops.length === 2 || ticket.segments[0].stops.length === 2
      );
    } else if (threeTransfersOn) {
      filteredTickets = newData.filter(
        (ticket) => ticket.segments[1].stops.length === 3 || ticket.segments[0].stops.length === 3
      );
    }

    return filteredTickets;
  };

  const sortedTickets = useMemo(() => sortTicketsData(tickets, activeTab), [tickets, activeTab]);

  const filteredTickets = useMemo(() => filterTickets(activeChecks, sortedTickets), [activeChecks, sortedTickets]);

  const addTicketsCount = () => {
    if (stop) {
      setTicketsCount((prevTicketsCount) => prevTicketsCount + 5);
    }
  };

  // console.log(idQuery);
  // console.log(tickets);

  return (
    <div className={styles.ticketsList}>
      <ul>
        {filteredTickets.slice(0, ticketsCount).map((ticket) => (
          <li key={maxId()}>
            <Ticket price={ticket.price} from={ticket.segments[0]} where={ticket.segments[1]} />
          </li>
        ))}
      </ul>
      {filteredTickets.length ? (
        <button type="button" onClick={addTicketsCount}>
          Показать еще 5 билетов!
        </button>
      ) : (
        <Alert message="Рейсов, подходящих под заданные фильтры, не найдено" type="warning" />
      )}
    </div>
  );
}
