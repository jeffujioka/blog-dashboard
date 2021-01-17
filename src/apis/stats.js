import axios from 'axios';

const instance = axios.create({
  // FIXME: replace hardcoded URL by process.env.REACT_APP_BASE_URL
  baseURL: 'http://localhost:4000'
});

// FIXME
const token = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkplZmZlcnNvbiBNYXNhaGlybyBGdWppb2thIiwiZW1haWwiOiJqZWZmZXJzb24uZnVqaW9rYUBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjEwODg4Nzk3LCJleHAiOjE2MTExNDc5OTd9.GS4f2xPtIlYhKNgJR0YM4jnBZwYnWCjdhzh_M0NVtTA';

instance.defaults.headers.common['Authorization'] = token;

export default instance;