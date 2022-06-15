import axios from 'axios';
// const asyncActionCreator =args=>dispatch=>{
//     fetch().then(x=> dispatch(aaa(x))).catch(y=> dispatch(yyy(y)))
// }
const addContactSuccess = (name, number) => dispatch => {
  const contact = { name, number, completed: false };
  dispatch({type: 'contacts/addContactRequest'})
  axios
    .post('contacts/addNumber', { name, number })
    .then(({ data }) =>
      dispatch({ type: 'contacts/addContactSuccess', payload: data })
    )
    .catch(error =>
      dispatch({ type: 'contacts/addContactError', payload: error })
    );
};