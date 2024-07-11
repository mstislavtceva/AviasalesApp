/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  tickets: [],
  searchId: null,
  loading: false,
  error: null,
  stop: false,
};

// eslint-disable-next-line func-names
export const searchId = createAsyncThunk('tickets/searchId', async function () {
  try {
    const response = await fetch('https://aviasales-test-api.kata.academy/search');
    const data = await response.json();
    return data.searchId;
  } catch (error) {
    throw new Error('Could not fetch ID');
  }
});

// eslint-disable-next-line func-names
export const getTicketsData = createAsyncThunk('tickets/getTicketsData', async function (id) {
  try {
    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Could not fetch tickets');
  }
});

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchId.fulfilled, (state, action) => {
        state.loading = true;
        state.searchId = action.payload;
      })
      .addCase(searchId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getTicketsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTicketsData.fulfilled, (state, action) => {
        if (state.tickets.length) {
          state.loading = false;
        } else {
          state.loading = true;
        }

        state.tickets.push(...action.payload.tickets);
        state.stop = action.payload.stop;
      })
      .addCase(getTicketsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ticketsSlice;
