import axios from 'axios';

axios.defaults.baseURL = 'https://63e27c48ad0093bf29d126c3.mockapi.io';

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
