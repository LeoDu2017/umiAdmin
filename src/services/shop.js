import request from 'utils/request';
import { api } from 'utils/config';


const { getShopInfoApi,updateShopInfoApi,usersApi,delShopAdminApi,createShopAdminApi } = api;

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
export function getShopAdminsService(){
  return request({
    url: usersApi,
    method: 'get'
  })
}
export function delShopAdminService(data){
  return request({
    url: delShopAdminApi,
    method: 'post',
    data,
  })
}
export function createShopAdminService(data){
  return request({
    url: createShopAdminApi,
    method: 'post',
    data,
  })
}
// export function delShopAdminService(id) {
//   return request(`/shop/admins/${id}`, {
//     method: 'DELETE',
//   });
// }
