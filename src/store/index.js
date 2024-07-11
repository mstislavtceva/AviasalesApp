/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';

import tabsSlice from './FiltersTabs';
import checkSlice from './FiltersCheck';
import ticketsSlice from './TicketsData';

const store = configureStore({
  reducer: { tabs: tabsSlice.reducer, check: checkSlice.reducer, tickets: ticketsSlice.reducer },
});

export default store;
