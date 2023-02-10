import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const addContactApi = contact => {
  return axios.post('/contacts', contact).then(res => res.data);
};

export const getContactApi = search => {
  return axios.get('/contacts').then(res => {
    // console.log(res.data);
    return res.data;
  });
};

export const removeContactApi = id => {
  return axios.delete(`/contacts/${id}`).then(() => {
    return id;
  });
};
