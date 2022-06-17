// import { combineReducers, createReducer, createSlice } from '@reduxjs/toolkit';
// import actions from './contacts-action';
// import { createSlice } from '@reduxjs/toolkit';

// const items = createReducer([], {
//   [actions.fetchContactSuccess]: (_, { payload }) => payload,
//   [actions.addContactSuccess]: (state, { payload }) => [...state, payload],
//   [actions.deleteContactSuccess]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });
// const filter = createReducer('', {
//   [actions.changeFilter]: (_, { payload }) => payload,
// });

// const error = createReducer(null, {});
// export default combineReducers({
//   items,
//   filter,
//   error,
// });
//  const contactsSlise=createSlice({
//   name: 'contacts',
//   initialState:{
//     contacts: {
//       items: [],
//       filter: ''
//     }
//   },
//   reducers:{},
//   extraReducers:{
//     fetchContactSuccess(_, { payload }) {payload},
//     addContactSuccess(state, { payload }) {[...state, payload]},
//     deleteContactSuccess(state, { payload }) {
//       state.filter(({ id }) => id !== payload)},

//       changeFilter(_, { payload }) {payload},
//   },
//  })