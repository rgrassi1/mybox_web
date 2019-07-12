import axios from 'axios';

export default class Api {

    static axiosInstance = null;

    static init() {
        this.axiosInstance = axios.create({
            baseURL: process.env.API_URL || 'http://localhost:3333'
        })
        this.addInterceptors();
    } 

    static addInterceptors() {
        this.axiosInstance.interceptors.request.use(request => {
            request.headers['x-access-token'] = localStorage.getItem('mybox_token');
            return request;
        })
    }

    static get(url, config = {}) {
        return this.axiosInstance.get(url, config);
    }

    static post(url, data, config = {}) {
        return this.axiosInstance.post(url, data, config);
    }

    static delete(url, data, config = {}) {
        return this.axiosInstance.delete(url, data, config);
    }
}