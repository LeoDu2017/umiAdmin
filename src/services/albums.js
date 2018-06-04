import request from 'utils/request';
import { api } from 'utils/config';


const { getTrees,postSubTrees,updateTreeNames } = api;

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

export function updateTreeName(data) {
  return request({
    url: updateTreeNames,
    method: 'post',
    data
  })
}
