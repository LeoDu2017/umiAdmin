import request from 'utils/request';
import { api } from 'utils/config';

const { getBrandsListApi,delBrandApi } = api;

export function getBrandsListService(){
  return request({
    url: getBrandsListApi,
    method: 'get'
  })
}
export function delBrandService(data){
  return request({
    url: delBrandApi,
    data,
    method: 'post'
  })
}
