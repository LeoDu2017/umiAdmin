import request from 'utils/request';
import { api } from 'utils/config';

const { getBrandsListApi } = api;

export function getBrandsListService(){
  return request({
    url: getBrandsListApi,
    method: 'get'
  })
}
