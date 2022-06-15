import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactcontact');
const addContactError = createAction('contacts/addContactError');

const deleteContact = createAction('contacts/delete_contact');

const changeFilter = createAction('contacts/change_filter');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContactRequest, addContactSuccess, addContactError,deleteContact, changeFilter };
