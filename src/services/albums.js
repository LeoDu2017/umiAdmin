import request from 'utils/request';
import { api } from 'utils/config';


const { getTrees } = api;

export function getTree () {
  return request({
    url: getTrees,
    method: 'get'
  })
}
