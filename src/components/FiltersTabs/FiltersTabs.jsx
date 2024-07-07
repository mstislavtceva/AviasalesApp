/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { tabsActions } from '../../store/FiltersTabs';

import styles from './FiltersTabs.module.scss';

export default function FiltersTabs() {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.tabs.tab);

  const maxId = () => Math.random().toString(36).slice(2);

  const buttons = [
    { name: 'cheap', text: 'Самый дешевый', className: `${styles['filters__btn-left']}` },
    { name: 'fast', text: 'Самый быстрый' },
    { name: 'optimal', text: 'Оптимальный', className: `${styles['filters__btn-right']}` },
  ];

  const changeTabsHandler = (name) => {
    dispatch(tabsActions.setTab(name));
  };

  return (
    <div className={styles.filters}>
      {/* eslint-disable-next-line arrow-body-style */}
      {buttons.map(({ name, text, className }) => {
        return (
          <button
            key={maxId()}
            type="button"
            className={activeTab === name ? `${className} ${styles.active}` : className}
            onClick={() => changeTabsHandler(name)}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
}
