import request from 'utils/request';
import { api } from 'utils/config';


const { userLogin } = api;

export function login (data) {
  return request({
    url: userLogin,
    method: 'post',
    data,
  })
}
