import React from 'react';
import {deleteContact} from '../../redux/contacts/contacts-operations';
import ContactListItem from './ContactListItem';
import { useSelector, useDispatch } from 'react-redux';
import { visibleContacts } from 'redux/contacts/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(visibleContacts);
  return contacts.length > 0 ? (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          nameContact={name}
          number={number}
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

export default ContactList;
