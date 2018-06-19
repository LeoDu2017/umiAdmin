export function showAlbums(dispatch,boolenValue){
  const dispaly = boolenValue;
  dispatch({
    type:'albums/setDisplay',
    payload:dispaly
  })
}

export function selectImgs(dispatch,id,type){
  dispatch({
    type:'pictures/setSelectImgs',
    payload:{id,type}
  })
}

export function removeSelected(dispatch,id,event){
  event.stopPropagation();
  dispatch({
    type:'pictures/removeSelectImgs',
    payload:id
  })
}
