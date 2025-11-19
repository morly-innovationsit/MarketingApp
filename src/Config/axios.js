import axios from 'axios';
import { DevelopmentApi } from '../Config/urlConstants';
// import { ACCESS_TOKEN,  } from '../_Plugins/AuthMethods'

//const token = window.localStorage.getItem("ACCESS_TOKEN");
const token = "";

const axiosInstance = axios.create({
    baseURL: DevelopmentApi,
    headers: {
         'Authorization': token ? `${token}` : '',
        'Content-Type': 'application/json',
    }
});
console.log(DevelopmentApi)
export default axiosInstance;