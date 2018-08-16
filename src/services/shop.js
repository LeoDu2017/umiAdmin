import request from 'utils/request';
import { api } from 'utils/config';


const { getShopInfoApi } = api;

export function getShopInfoService () {
  return request({
    url: getShopInfoApi,
    method: 'get'
  })
}
