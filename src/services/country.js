import request from 'utils/request';
import { api } from 'utils/config';

const { getCountryApi } = api;

export function getBrandsListService(data){
  console.log(data)
  return request({
    url: getCountryApi,
    data,
    method: 'get'
  })
}

