import axios from 'axios';

const globalConfig = axios.create({
  baseURL: 'https://newsapi.org/v2/top-headlines',
});

export default globalConfig;
