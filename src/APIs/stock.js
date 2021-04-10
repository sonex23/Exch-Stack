import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://api.marketstack.com/v1'
});

export default Axios;