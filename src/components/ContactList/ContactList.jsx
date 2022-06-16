import React, {useEffect, useState} from 'react';
import {deleteContact} from '../../redux/contacts/contacts-operations';
import ContactListItem from './ContactListItem';
import { useSelector, useDispatch } from 'react-redux';
import { visibleContacts } from 'redux/contacts/selectors';
import * as allContactsAPI from '../../services/getContactAPI/getContactAPI'
import {fetchContacts} from '../../redux/contacts/contacts-operations'
import { connect } from 'react-redux';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);
  const contacts = useSelector(state=> state.contacts.items)
  const filter= useSelector(state=> state.contacts.filter)
const visibleContacts = state => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizeFilter);
    });
  };
  console.log(visibleContacts())
  return visibleContacts().length > 0 ? (
    <ul>
      {visibleContacts() && visibleContacts().map(({ id, name, phone }) => (
        <ContactListItem
          key={id}
          id={id}
          nameContact={name}
          number={phone}
          deleteContact={id => {
            dispatch(deleteContact(id));
          }}
        />
      ))}
    </ul>
  ) : (
    <p>No contacts</p>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchContactsAPI: () => dispatch(fetchContacts()),
});

export default connect(mapDispatchToProps)(ContactList);
