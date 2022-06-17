import React, { useEffect } from 'react';
// import { deleteContact } from '../../redux/contacts/contacts-operations';
import ContactListItem from './ContactListItem';
import { useSelector, useDispatch } from 'react-redux';
import { visibleContacts } from 'redux/contacts/selectors';
// import { fetchContacts } from '../../redux/contacts/contacts-operations';
import { getContacts, deleteContact } from '../../redux/contacts/contactsAPI';

const ContactList = () => {
  const dispatch = useDispatch();
  dispatch(getContacts());
  const contacts = useSelector(state => state.contacts.items);
  return contacts.length > 0 ? (
    <ul>
      {contacts.map(({ id, name, phone }) => (
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

export default ContactList;
