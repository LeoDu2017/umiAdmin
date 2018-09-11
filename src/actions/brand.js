import _ from "lodash"
import { Modal } from 'antd';
const confirm = Modal.confirm;

export function getCountry(id,countries){
  const country = _.find(countries, { 'id': id }) && countries[_.findIndex(countries, { 'id': id })].name;
  return country
}
export function removeBrand(dispatch,id,event){
  event.preventDefault();
  confirm({
    title: '提示',
    content: '您确定要删除此品牌吗？',
    onOk() {
      dispatch({
        type:'brand/removeBrand',
        payload:{id}
      })
    },
    onCancel() {
      console.log('close')
    },
  });


}
export function saveBanned(dispatch,id){
  id = id.split('-')[0];
  dispatch({
    type:'brand/saveBanned',
    payload:id
  })
}
export function onChange(dispatch,id,area){
  dispatch({
    type:'brand/saveChanged',
    payload:{area,id}
  })
}
export function onCollection(dispatch,resetFields,changedValue){
  dispatch({
    type:'brands/saveCollection',
    payload:{changedValue,resetFields}
  })
}
