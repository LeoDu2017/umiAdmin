export function showModelHandler(dispatch,id,event){
  if (event) event.stopPropagation();

  dispatch({
    type:'commonModal/setVisible',
    payload:{[id]:true}
  })
}
export function hideModelHandler(dispatch,resetFields,id,event){
  resetFields && resetFields();
  dispatch({
    type:'commonModal/setVisible',
    payload:{[id]:false}
  })
}
export function okHandler(dispatch,validateFields,callBack,id,noForm){
  validateFields ? validateFields((err, values) => {
    if (!err) {
      dispatch({
        type:'commonModal/setVisible',
        payload:{[id]:false}
      });
      callBack(values);
    }
  }) :  dispatch({type:'commonModal/setVisible',payload:{[id]:false}});
  noForm && callBack(id)
}
