import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    search: '',
  },

  reducers: {
    changeFilterAction(state, { payload }) {
      state.search = payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { changeFilterAction } = filterSlice.actions;
