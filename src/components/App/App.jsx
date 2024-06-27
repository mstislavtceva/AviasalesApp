import React from 'react';

import Header from '../Header';
import Checkbox from '../Checkbox';
import Filters from '../Filters';
import TicketsList from '../TickectsList';

import styles from './App.module.scss';

export default function App() {
  const ticketsData = [{ price: 13400 }, { price: 28100 }, { price: 13400 }, { price: 28100 }];

  return (
    <div className={styles.aviasales}>
      <div className={styles.aviasales__container}>
        <Header />
        <main className={styles.aviasales__main}>
          <Checkbox />
          <div className={styles.aviasales__content}>
            <Filters />
            <TicketsList ticketsData={ticketsData} />
          </div>
        </main>
      </div>
    </div>
  );
}
