import request from 'utils/request';
import { api } from 'utils/config';


const { getTrees,storeSubTrees,updateTreeNames } = api;

export function getTree () {
  return request({
    url: getTrees,
    method: 'get'
  })
}

export function storeSubTree(data) {
  return request({
    url: storeSubTrees,
    method: 'post',
    data,
  })
}

export function updateTreeName(data) {
  return request({
    url: updateTreeNames,
    method: 'post',
    data
  })
}
