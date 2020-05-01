import axios from 'axios';
import {handleResponse, handleError} from './apiUtils';
const baseUrl = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

export function getDwarves() {
  return axios(baseUrl).then(handleResponse).catch(handleError);
}
