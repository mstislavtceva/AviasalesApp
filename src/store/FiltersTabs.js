/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tab: '',
};

const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    setTab(state, action) {
      state.tab = action.payload;
    },
  },
});

export const tabsActions = tabsSlice.actions;
export default tabsSlice;
