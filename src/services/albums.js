import request from 'utils/request';
import { api } from 'utils/config';


const { getTrees,storeSubTrees,updateTreeNames,getSubTrees,getPictures } = api;

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

export function getSubTree(parent_id) {
  const data = {parent_id};
  return request({
    url: getSubTrees,
    method: 'get',
    data
  })
}

export function getPicture () {
  return request({
    url: getPictures,
    method: 'get'
  })
}
