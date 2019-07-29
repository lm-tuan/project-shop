import axios from 'axios';
import {URL_API} from './../contants/ApiTypes';


 const ApiCaller = ( endpoint, method = "GET", body) => {
    return axios({
        method,
        url: `${URL_API}/${endpoint}`,
        data:body
    }).catch( err => {
        console.log(err);
    });
}
export default ApiCaller;

