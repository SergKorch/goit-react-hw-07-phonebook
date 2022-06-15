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
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    allContactsAPI.allContactsAPI().then(setContacts);
  }, []);
  console.log(contacts)
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

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchContacts()),
});

export default connect(mapDispatchToProps)(ContactList);
