import axios from 'axios';
const baseUrl = '/api/blogs';

let token = null;

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const setToken = newToken => {
  token = `bearer ${newToken}`;
};

const create = async newObject => {
  const config = {
    headers: { Authorization: token }
  };

  console.log('NEWOBJECT', newObject);
  console.log('CONFIG', config);

  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then(response => response.data);
};

const deleteOne = async id => {
  const config = {
    headers: { Authorization: token }
  };
  console.log('CONFIG ON DELETESSA', config);

  const response = await axios.delete(`${baseUrl}/${id}`, config);

  return response.data;
};

export default { getAll, create, update, setToken, deleteOne };
