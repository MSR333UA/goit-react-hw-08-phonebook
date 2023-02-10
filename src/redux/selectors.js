import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter.search;

export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUsername = state => state.auth.user.email;

export const selectFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    // console.log('Calculating visible tasks');
    if (!filter) {
      return contacts;
    }
    return contacts.filter(contact => contact.name.includes(filter));
  }
);
