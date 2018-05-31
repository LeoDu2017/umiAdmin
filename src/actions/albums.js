export function toggleOpen(id,dispatch,event){
  event.stopPropagation();
  dispatch({
    type:'albums/toggleOpen',
    payload:id
  })
}
export function selectClassify(id,dispatch,event){
  const currentTree = id;
  dispatch({
    type:'albums/setCurrentTree',
    payload:currentTree
  })
}
