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
export function toggleEditable(dispatch){
  dispatch({
    type:'shop/setEditable'
  });
}
