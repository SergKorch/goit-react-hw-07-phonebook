import axios from 'axios';

const allContactsAPI = () => {
  return axios.get('https://62a74e8cbedc4ca6d7c6c8ec.mockapi.io/contacts');
};

export default allContactsAPI;
