import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}:${process.env.REACT_APP_API_PORT}/api`,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=utf-8'
    }
});


export default api;