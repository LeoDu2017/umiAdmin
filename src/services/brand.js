import request from 'utils/request';
import { api } from 'utils/config';

const { getBrandsListApi,delBrandApi,getBannedApi,udateBannedApi,getAllBrandsApi } = api;

export function getBrandsListService(data){
  return request({
    url: getBrandsListApi,
    method: 'get',
    data
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
export function getAllBrandsService(){
  return request({
    url: getAllBrandsApi,
    method: 'get'
  })
}
export function saveBannedService(data){
  return request({
    url: udateBannedApi,
    data,
    method: 'post'
  })
}
