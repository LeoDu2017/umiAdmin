export function getPictures(dispatch,page){
  dispatch({
    type:'pictures/getPictures',
    payload:{page}
  })
}
export function selectImgs(dispatch,id,single){
  dispatch({
    type:'pictures/setSelectImgs',
    payload:{id,single}
  })
}

export function removeSelected(dispatch,id,event){
  event.stopPropagation();
  dispatch({
    type:'pictures/removeSelectImgs',
    payload:id
  })
}

export function useSelected(dispatch,selected){
  dispatch({
    type:'pictures/useSelectImgs',
    payload:selected
  })
}
