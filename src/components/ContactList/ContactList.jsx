import React, { useEffect } from 'react';
import ContactListItem from './ContactListItem';
import { useSelector, useDispatch } from 'react-redux';
import ScaleLoader from 'react-spinners/ScaleLoader';
import s from './ContactList.module.css';
import { getContacts, deleteContactByID } from '../../redux/contactSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  const status = useSelector(state => state.contacts.loading);
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const visibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizeFilter);
    });
  };
  return (
    <div>
      {status && <div className={s.sweet_loading}>
        <ScaleLoader
          size={150}
          color={'#123abc'}
          speedMultiplier={1.5}
        />
      </div>}
      {visibleContacts().length > 0  && (
        <ul>
          {visibleContacts().map(({ id, name, phone }) => (
            <ContactListItem
              key={id}
              id={id}
              nameContact={name}
              number={phone}
              deleteContact={id => {
                dispatch(deleteContactByID(id));
                dispatch(getContacts());
              }}
            />
          ))}
        </ul>
      )}
      {visibleContacts().length === 0 && status === false && (
        <h1>No contacts</h1>
      )}
    </div>
  );
};

export default ContactList;
