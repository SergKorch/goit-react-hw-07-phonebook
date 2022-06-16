import { combineReducers, createReducer } from '@reduxjs/toolkit';
import actions from './contacts-action';

const items = createReducer([], {
  [actions.fetchContactSuccess]: (_, { payload }) => payload,
  [actions.addContactSuccess]: (state, {payload}) => [...state,  payload ],
  [actions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const filter = createReducer('', {
  [actions.changeFilter]: (state, { payload }) => payload,
});
const loading = createReducer(false,{
  [actions.fetchContactRequest]: ()=>true,
  [actions.fetchContactSuccess]: ()=>false,
  [actions.fetchContactError]: ()=>false,
  [actions.addContactRequest]: ()=>true,
  [actions.addContactSuccess]: ()=>false,
  [actions.addContactError]: ()=>false,
  [actions.deleteContactRequest]: ()=>true,
  [actions.deleteContactSuccess]: ()=>false,
  [actions.deleteContactError]: ()=>false,

})
export default combineReducers({
  items,
  filter,
});
