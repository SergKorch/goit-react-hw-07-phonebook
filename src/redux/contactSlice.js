import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import axios from 'axios';
const initialState = { items: [], filter: '', loading: false };

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(
      `https://62a74e8cbedc4ca6d7c6c8ec.mockapi.io/contacts`
    );
    dispatch(setContacts(res.data));
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, { rejectWithValue, dispatch }) => {
    await axios.post(`https://62a74e8cbedc4ca6d7c6c8ec.mockapi.io/contacts`, {
      name,
      phone,
    });
    dispatch(getContacts());
  }
);
export const deleteContactByID = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue, dispatch }) => {
    await axios.delete(
      `https://62a74e8cbedc4ca6d7c6c8ec.mockapi.io/contacts/${id}`
    );
    // dispatch(deleteContactSet(id));
    dispatch(getContacts());
  }
);

export const contacts = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts: (state, { payload }) => {
      state.items = payload;
    },
    addContactSet: (state, { payload }) => [...state.items, payload],
    deleteContactSet: (state, { payload }) => {
      state.items.filter(({ id }) => id !== payload);
    },
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: {
    [getContacts.fulfilled]: state => {
      state.loading = false;
    },
    [getContacts.pending]: state => {
      state.loading = true;
    },
    [getContacts.rejected]: state => {
      Notiflix.Notify.failure('Download contacts was rejected');
      state.loading = false;
    },
    [addContact.fulfilled]: state => {
      state.loading = false;
    },
    [addContact.pending]: state => {
      state.loading = true;
    },
    [addContact.rejected]: state => {
      Notiflix.Notify.failure('Adding a contact was rejected');
      state.loading = false;
    },
    [deleteContactByID.fulfilled]: state => {
      state.loading = false;
    },
    [deleteContactByID.pending]: state => {
      state.loading = true;
    },
    [deleteContactByID.rejected]: state => {
      Notiflix.Notify.failure('Сontact deletion was rejected');
      state.loading = false;
    },
  },
});

export const { setContacts, addContactSet, deleteContactSet, changeFilter } =
  contacts.actions;

export default contacts.reducer;
