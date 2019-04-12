import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dbclone-nodejs.herokuapp.com'
});

export default api;