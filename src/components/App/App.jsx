import React from 'react';

import Header from '../Header';
import FiltersCheck from '../FiltersCheck';
import FiltersTabs from '../FiltersTabs';
import TicketsList from '../TickectsList';

import styles from './App.module.scss';

export default function App() {
  return (
    <div className={styles.aviasales}>
      <div className={styles.aviasales__container}>
        <Header />
        <main className={styles.aviasales__main}>
          <FiltersCheck />
          <div className={styles.aviasales__content}>
            <FiltersTabs />
            <TicketsList />
          </div>
        </main>
      </div>
    </div>
  );
}
