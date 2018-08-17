import request from 'utils/request';
import { api } from 'utils/config';


const { getShopInfoApi,updateShopInfoApi } = api;

export function getShopInfoService () {
  return request({
    url: getShopInfoApi,
    method: 'get'
  })
}
export function updateShopInfoService(data){
  return request({
    url: updateShopInfoApi,
    method: 'post',
    data,
  })
}
