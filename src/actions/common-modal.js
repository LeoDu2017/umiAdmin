export function showModelHandler(dispatch,event){
  if (event) event.stopPropagation();
  dispatch({
    type:'commonModal/setVisible',
    payload:true
  })
}
export function hideModelHandler(dispatch,event){
  dispatch({
    type:'commonModal/setVisible',
    payload:false
  })
}
export function okHandler(dispatch,validateFields,callBack){
  validateFields((err, values) => {
    if (!err) {
      callBack(values);
      dispatch({
        type:'commonModal/setVisible',
        payload:false
      })
    }
  });
}
