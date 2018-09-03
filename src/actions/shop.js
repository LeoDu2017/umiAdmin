import { Modal } from 'antd';
const confirm = Modal.confirm;
export function selectImgs(dispatch,selected){
  dispatch({
    type:'albums/setDisplay',
    payload:false
  });
  selected.forEach(i => {
    dispatch({
      type:'shop/saveLogo',
      payload:i.file
    });
  })
}
export function toggleEditable(dispatch,shopInfo,originInfo,validateFieldsAndScroll,resetFields){
  if(JSON.stringify(shopInfo) !== JSON.stringify(originInfo)){
    confirm({
      title: '部分内容被修改，是否要保存修改的内容?',
      content: '取消将清空修改过的内容',
      onOk() {
        validateFieldsAndScroll((errors, values) => {
          if (errors) {
            return
          }
          dispatch({ type: 'shop/submitEdit', payload: values });
          dispatch({ type: 'shop/setOrigin', payload: shopInfo });
        })
      },
      onCancel() {
        resetFields();
        dispatch({ type: 'shop/setInfo', payload: originInfo })
      },
    });
  }

  dispatch({
    type:'shop/setEditable'
  });
}
export function FieldsChange({dispatch,...props}, fields){
  let field = {};
  for(let key in fields){
    field = fields[key]
  }
  dispatch({
    type:'shop/setChanged',
    payload:{[field.name]:field.value}
  });
}
// 保存
export function handleSubmit(dispatch,validateFieldsAndScroll,event){
  event.preventDefault();
  validateFieldsAndScroll((errors, values) => {
    if (errors) {
      return
    }
    dispatch({ type: 'shop/submitEdit', payload: values })
  })
}
// 删除管理员
export function deleteAdmin(dispatch,id,event){
  event.preventDefault();
  confirm({
    title: '提示',
    content: '您确定要删除此管理员吗？',
    onOk() {
      dispatch({
        type:'admin/deleteShopAdmin',
        payload:{id}
      })
    },
    onCancel() {
      console.log('close')
    },
  });

}
// 新增管理员
export function createAdmin(dispatch,values,event){
  dispatch({
    type: 'admin/createShopAdmin',
    payload: values,
  });
}
// 编辑管理员
export function editHandler(dispatch,id, values) {
  dispatch({
    type: 'admin/editShopAdmin',
    payload: { id,values },
  });
}
// 重置管理员密码
export function resetPassword(dispatch,id){
  confirm({
    title: '是否要重置该管理员的密码?',
    content: '重置后的原始密码为：123456',
    onOk() {
      dispatch({ type: 'admin/resetPassword', payload:id });
    },
    onCancel() {

    },
  });
}
