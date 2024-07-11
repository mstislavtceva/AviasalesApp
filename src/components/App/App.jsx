import React from 'react';
import { useSelector } from 'react-redux';
import { Spin, Alert } from 'antd';

import Header from '../Header';
import FiltersCheck from '../FiltersCheck';
import FiltersTabs from '../FiltersTabs';
import TicketsList from '../TickectsList';

import styles from './App.module.scss';

export default function App() {
  const stop = useSelector((state) => state.tickets.stop);

  return (
    <div className={styles.aviasales}>
      <div className={styles.aviasales__container}>
        <Header />
        <main className={styles.aviasales__main}>
          <FiltersCheck />
          <div className={styles.aviasales__content}>
            <FiltersTabs />
            {!stop && <Spin size="large" className={styles.spin} />}
            {!stop && (
              <Alert
                type="warning"
                message="Билеты еще подгружаются, но скоро можно будет посмотреть еще больше вариантов"
                className={styles.alert}
              />
            )}
            <TicketsList />
          </div>
        </main>
      </div>
    </div>
  );
}
