/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable consistent-return */
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { name: 'all', check: false },
  { name: 'noTransfers', check: false },
  { name: 'oneTransfers', check: true },
  { name: 'twoTransfers', check: false },
  { name: 'threeTransfers', check: false },
];

const checkSlice = createSlice({
  name: 'check',
  initialState,
  reducers: {
    changeCheckbox(state, action) {
      //   const all = !state[0].check;
      if (action.payload === 'all') {
        if (!state[0].check) {
          return state.map((checkbox) => ({
            ...checkbox,
            check: !state[0].check,
          }));
        }
        if (state[0].check) {
          return state.map((checkbox) => ({
            ...checkbox,
            check: !checkbox.check,
          }));
        }
      } else {
        const newState = state.map((checkbox) =>
          checkbox.name === action.payload ? { ...checkbox, check: !checkbox.check } : checkbox
        );

        if (!newState.every((cb) => cb.check)) {
          newState[0] = { ...newState[0], check: false };
        }

        if (newState.slice(1).every((cb) => cb.check)) {
          newState[0] = { ...newState[0], check: true };
        }

        return newState;
      }
    },
  },
});

export const checkActions = checkSlice.actions;
export default checkSlice;
