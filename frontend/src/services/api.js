import axios from 'axios';

export const api = axios.create({
    baseURL: "https://tabraue-schedulepro.onrender.com/api",
    timeout: 6000
})

//http://localhost:27020/api