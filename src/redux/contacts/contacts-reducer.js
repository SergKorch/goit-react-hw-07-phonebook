import { combineReducers, createReducer } from '@reduxjs/toolkit';
import actions from './contacts-action';
import { nanoid } from 'nanoid';
import allContactsAPI from 'services/getContactAPI/getContactAPI';
const defaultValue = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
// const defaultValue=allContactsAPI.map(({id, name, phone})=>)
const items = createReducer(defaultValue, {
  [actions.addContactSuccess]: (state, { payload }) => 
    [...state, payload]
  ,
  [actions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const filter = createReducer('', {
  [actions.changeFilter]: (state, { payload }) => payload,
});
const loading = createReducer(false,{
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
