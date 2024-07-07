/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { checkActions } from '../../store/FiltersCheck';

import styles from './FiltersCheck.module.scss';

export default function FiltersCheck() {
  const dispatch = useDispatch();
  const checked = useSelector((state) => state.check);

  const maxId = () => Math.random().toString(36).slice(2);

  const checkboxes = [
    { name: 'all', label: 'Все' },
    { name: 'noTransfers', label: 'Без пересадок' },
    { name: 'oneTransfers', label: '1 пересадка' },
    { name: 'twoTransfers', label: '2 пересадкие' },
    { name: 'threeTransfers', label: '3 пересадки' },
  ];

  const changeCheckboxHandler = (name) => {
    dispatch(checkActions.changeCheckbox(name));
  };

  return (
    <div className={styles.checkbox}>
      <h2 className={styles.checkbox__heading}>Количество пересадок</h2>
      <form className={styles.checkbox__form}>
        {/* eslint-disable-next-line arrow-body-style */}
        {checkboxes.map(({ name, label }, index) => {
          return (
            <label htmlFor={name} key={maxId()}>
              <input
                type="checkbox"
                id={name}
                checked={checked[index].name === name ? checked[index].check : false}
                onChange={() => changeCheckboxHandler(name)}
              />
              {label}
            </label>
          );
        })}
      </form>
    </div>
  );
}
