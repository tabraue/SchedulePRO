import axios from 'axios';

export const api = axios.create({
    baseURL: "http://localhost:27020/api",
    timeout: 3000
})
