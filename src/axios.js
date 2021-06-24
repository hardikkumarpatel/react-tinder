import axios from 'axios';

const instance = axios.create({
    baseUrl: 'http://localhost:9002',
})

export default instance;