import request from 'utils/request';
import { api } from 'utils/config';


const { getTrees,postSubTrees } = api;

export function getTree () {
  return request({
    url: getTrees,
    method: 'get'
  })
}

export function postSubTree(data) {
  return request({
    url: postSubTrees,
    method: 'post',
    data,
  })
}
