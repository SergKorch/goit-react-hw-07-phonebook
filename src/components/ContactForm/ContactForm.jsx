import { useState } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import s from './ContactForm.module.css';
import { addContact } from '../../redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const nameInpId = nanoid();
  const numbInpId = nanoid();
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const changeInp = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const submitInp = event => {
    event.preventDefault();
    const isContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isContact) {
      Notiflix.Notify.failure(`${name} is already in contact`);
      return contacts;
    } else {
      dispatch(addContact({ name, phone }));
    }
    reset();
  };
  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <div>
      <form onSubmit={submitInp} action="submit">
        <label htmlFor={nameInpId}>
          <p>Name</p>
          <input
            type="text"
            name="name"
            value={name}
            onChange={changeInp}
            id={nameInpId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter name here"
          />
        </label>
        <label htmlFor={numbInpId}>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            value={phone}
            onChange={changeInp}
            id={numbInpId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter number here"
          />
        </label>
        <button className={s.submitButton} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
