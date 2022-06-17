import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
    items: [],
    filter: '',
};

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(
      `https://62a74e8cbedc4ca6d7c6c8ec.mockapi.io/contacts`
    );
   dispatch(setContacts(res.data))
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, { rejectWithValue, dispatch }) => {
    await axios.post(
      `https://62a74e8cbedc4ca6d7c6c8ec.mockapi.io/contacts`
    , { name, phone });
  //  dispatch(addContactSet())
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue, dispatch }) => {
    await axios.delete(`https://62a74e8cbedc4ca6d7c6c8ec.mockapi.io/contacts/${id}`);
  //  dispatch(addContactSet())
  }
);

export const items = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setContacts: (state, { payload }) =>  {state.items=payload},
    addContactSet: (state, { payload }) => [...state.items, payload],
    deleteContactSet: (state, { payload }) => {
      state.items.filter(({ id }) => id !== payload);}
    },
    extraReducers:{
      [getContacts.fulfilled]:()=> console.log("fulfield"),
      [getContacts.pending]: ()=> console.log("pending"),
      [getContacts.rejected]: ()=> console.log("rejected"),
      [addContact.fulfilled]:()=> console.log("fulfield"),
      [addContact.pending]: ()=> console.log("pending"),
      [addContact.rejected]: ()=> console.log("rejected"),
      [deleteContact.fulfilled]:()=> console.log("fulfield"),
      [deleteContact.pending]: ()=> console.log("pending"),
      [deleteContact.rejected]: ()=> console.log("rejected"),
    },
  });
// const filter = createSlice({
//   name: 'filterSlice',
//   initialState,
//   reducers: {
//     changeFilter: (state, { payload }) => payload,
//   },
// });

export const { setContacts, addContactSet, deleteContactSet } = items.actions;
// export const { changeFilter } = items.actions;
export default items.reducer;
// export default combineReducers({
//   items,
//   filter,
// });
