import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/slice.contacts';
import { filterReducer } from './filter/slice.filter';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: true,

  // devTools: process.env.NODE_ENV==='development'
});
