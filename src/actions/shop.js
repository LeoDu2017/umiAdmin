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
