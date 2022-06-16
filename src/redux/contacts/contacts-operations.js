import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import actions from './contacts-action';

export const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactRequest());
  try {
    const { data } = await axios.get(
      'https://62a74e8cbedc4ca6d7c6c8ec.mockapi.io/contacts'
    );
    dispatch(actions.fetchContactSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactError(error));
  }
};
// export const fetchContacts2 = createAsyncThunk(
//   'contacts/fetchContacts',
//   async () => {
//     const { data } = await axios.get(
//       'https://62a74e8cbedc4ca6d7c6c8ec.mockapi.io/contacts'
//     );
//     return data;
//   }
// );
export const addContact =
  ({ name, phone }) =>
  dispatch => {
    
    dispatch(actions.addContactRequest());
    axios
      .post('https://62a74e8cbedc4ca6d7c6c8ec.mockapi.io/contacts', contact)
      .then(({ data }) => dispatch(actions.addContactSuccess(data)))
      .catch(error => dispatch(actions.addContactError(error)));
  };

  // export const addContact2 = createAsyncThunk(
  //   'contacts/addContacts',
  //   async ({ name, phone }) => {
  //     const contact = { name, phone };
  //     axios
  //     .post('https://62a74e8cbedc4ca6d7c6c8ec.mockapi.io/contacts', contact)
  //     .then(({ data }) => addContactSuccess(data))
  //     .catch(error => addContactError(error));
  //     return 
  //   }
  // );

export const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactRequest());

  axios
    .delete(`https://62a74e8cbedc4ca6d7c6c8ec.mockapi.io/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactSuccess(id)))
    .catch(error => dispatch(actions.deleteContactError(error)));
};
