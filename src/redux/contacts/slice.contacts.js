import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(el => el.id !== payload);
      })
      .addMatcher(
        action => {
          action.type.startsWith('contacts') &&
            action.type.endsWith('fulfilled');
        },
        state => {
          state.contacts.isLoading = false;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        action => {
          action.type.startsWith('contacts') && action.type.endsWith('pending');
        },
        state => {
          state.contacts.isLoading = true;
        }
      )
      .addMatcher(
        action => {
          action.type.startsWith('contacts') &&
            action.type.endsWith('rejected');
        },
        (state, { payload }) => {
          state.contacts.isLoading = false;
          state.error = payload;
        }
      );

    // [fetchContacts.pending](state) {
    //   state.isLoading = true;
    // },
    // [fetchContacts.fulfilled](state, { payload }) {
    //   state.isLoading = false;
    //   state.items = payload;
    // },
    // [fetchContacts.rejected](state, { payload }) {
    //   state.isLoading = false;
    //   state.error = payload;
    // },
    // [addContact.pending](state) {
    //   state.isLoading = true;
    // },
    // [addContact.fulfilled](state, { payload }) {
    //   state.isLoading = false;
    //   state.items.push(payload);
    // },
    // [addContact.rejected](state, { payload }) {
    //   state.isLoading = false;
    //   state.error = payload;
    // },
    // [deleteContact.pending](state) {
    //   state.isLoading = true;
    // },
    // [deleteContact.fulfilled](state, { payload }) {
    //   state.isLoading = false;
    //   state.items = state.items.filter(el => el.id !== payload);
    // },
    // [deleteContact.rejected](state, { payload }) {
    //   state.isLoading = false;
    //   state.error = payload;
    // },
    // getRequestAction(state) {
    //   state.isLoading = true;
    // },
    // getSuccessAction(state, { payload }) {
    //   state.isLoading = false;
    //   state.items = payload;
    // },
    // getErrorAction(state, { payload }) {
    //   state.isLoading = false;
    //   state.error = payload;
    // },
    //   deleteContactsAction: (state, action) => {
    //     state.data = state.data.filter(({ id }) => id !== action.payload);
    //   },
    // },
    // removeRequestAction(state) {
    //   state.isLoading = true;
    // },
    // removeSuccessAction(state, { payload }) {
    //   state.isLoading = false;
    //   state.items = state.items.filter(el => el.id !== payload);
    // },
    // removeErrorAction(state, { payload }) {
    //   state.isLoading = false;
    //   state.error = payload;
    // },
  },
});

export const contactsReducer = contactsSlice.reducer;
