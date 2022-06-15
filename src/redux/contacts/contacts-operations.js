import axios from 'axios';
// const asyncActionCreator =args=>dispatch=>{
//     fetch().then(x=> dispatch(aaa(x))).catch(y=> dispatch(yyy(y)))
// }
import actions from './contacts-action'

export const addContact = (name, number) => dispatch => {
  const contact = { name, number, completed: false };
  dispatch(actions.addContactRequest);
  axios
    .post('https://62a74e8cbedc4ca6d7c6c8ec.mockapi.io/contacts', {
      name,
      number,
    })
    .then(({ data }) =>
      dispatch(actions.addContactSuccess(data))
    )
    .catch(error =>
      dispatch(actions.addContactError(error))
    );
};
