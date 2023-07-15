import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'aaae1a3b8c674141829f06984c08bd9f',
  },
});
