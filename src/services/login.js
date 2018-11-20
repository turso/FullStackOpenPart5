import axios from 'axios';
const baseUrl = '/api/login';

const login = async credentials => {
  console.log('CREDENTIAALIT', credentials);
  const response = await axios.post(baseUrl, credentials);
  console.log('login response', response);
  return response.data;
};

export default { login };
