import request from 'utils/request';
import { api } from 'utils/config';

const { getBrandsListApi,delBrandApi,getBannedApi } = api;

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
export function getBannedService(data){
  return request({
    url: getBannedApi,
    method: 'get'
  })
}
