import axios from 'axios';
import config from './config'
export default function Ajax(option) {
  axios(option.url,config(option)).then(option.success).catch(function (error) {
    console.log(error);
  })
}





