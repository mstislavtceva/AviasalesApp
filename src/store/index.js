/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';

import tabsSlice from './FiltersTabs';
import checkSlice from './FiltersCheck';

const store = configureStore({
  reducer: { tabs: tabsSlice.reducer, check: checkSlice.reducer },
});

export default store;
