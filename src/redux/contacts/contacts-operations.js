import axios from 'axios';
import actions from './contacts-action'

export const addContact = (name, phone) => dispatch => {
  // const contact = { name, number, completed: false };
  dispatch(actions.addContactRequest());
  axios
    .post('https://62a74e8cbedc4ca6d7c6c8ec.mockapi.io/contacts', {
      name,
      phone,
    })
    .then(({ data }) =>
      dispatch(actions.addContactSuccess(data))
    )
    .catch(error =>
      dispatch(actions.addContactError(error))
    );
};

export const deleteContact =(id)=> dispatch =>{
  dispatch(actions.deleteContactRequest())
 
  axios
    .delete(`https://62a74e8cbedc4ca6d7c6c8ec.mockapi.io/contacts/${id}`)
    .then(() =>
    dispatch(actions.deleteContactSuccess(id))
    )
    .catch(error =>
      dispatch(actions.deleteContactError(error))
    );
}
