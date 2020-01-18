import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-f687c.firebaseio.com/'
});

export default instance;
